import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, TrendingUp, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ fontSize: '3rem' }}>🔍</div>
                <h2 style={{ color: '#1E293B', fontWeight: 700 }}>Project not found</h2>
                <Link to="/" style={{ color: '#8B5CF6', textDecoration: 'none', fontWeight: 500 }}>← Back to portfolio</Link>
            </div>
        );
    }

    return (
        <main style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
            {/* Hero banner */}
            <div style={{
                background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)`,
                borderBottom: `1px solid ${project.color}25`,
                padding: '4rem 1.5rem 3rem',
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    {/* Back breadcrumb */}
                    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                        <button
                            onClick={() => navigate(-1)}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'none', border: 'none', cursor: 'pointer',
                                color: '#64748B', fontSize: '0.875rem', fontWeight: 500,
                                marginBottom: '2rem', padding: 0, fontFamily: 'Inter, sans-serif',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#8B5CF6'}
                            onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
                        >
                            <ArrowLeft size={16} /> Back to projects
                        </button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        {/* Badges */}
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                            <span style={{
                                padding: '0.3rem 0.75rem', background: `${project.color}15`, color: project.color,
                                borderRadius: 999, fontSize: '0.75rem', fontWeight: 600, border: `1px solid ${project.color}30`,
                            }}>
                                {project.category}
                            </span>
                            <span style={{
                                padding: '0.3rem 0.75rem',
                                background: project.status === 'Shipped' ? '#DCFCE7' : '#FEF9C3',
                                color: project.status === 'Shipped' ? '#15803D' : '#92400E',
                                borderRadius: 999, fontSize: '0.75rem', fontWeight: 600,
                            }}>
                                {project.status}
                            </span>
                            <span style={{ padding: '0.3rem 0.75rem', background: '#F8FAFC', color: '#94A3B8', borderRadius: 999, fontSize: '0.75rem', fontWeight: 500 }}>
                                {project.year}
                            </span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1E293B', lineHeight: 1.15, letterSpacing: '-0.03em', margin: '0 0 1rem' }}>
                            {project.title}
                        </h1>
                        <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7, maxWidth: 680, margin: '0 0 2rem' }}>
                            {project.summary}
                        </p>

                        {/* Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tags.map((tag) => (
                                <span key={tag} style={{
                                    padding: '0.25rem 0.625rem', background: 'white',
                                    border: '1px solid #E2E8F0', borderRadius: 6,
                                    fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#475569',
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content body */}
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>
                {/* Metrics row */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{
                        display: 'grid', gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
                        gap: '1px', background: '#E2E8F0', borderRadius: 16, overflow: 'hidden',
                        marginBottom: '3.5rem',
                    }}
                >
                    {project.metrics.map((m) => (
                        <div key={m.label} style={{ background: '#FFFFFF', padding: '2rem 1.5rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: project.color, letterSpacing: '-0.04em', marginBottom: '0.375rem' }}>
                                {m.value}
                            </div>
                            <div style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 500 }}>{m.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Problem / Solution two-column */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {[
                        { label: '🔴  Problem', content: project.problem, bg: '#FFF1F2', border: '#FECDD3', text: '#9F1239' },
                        { label: '🟢  Solution', content: project.solution, bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D' },
                    ].map(({ label, content, bg, border, text }) => (
                        <div key={label} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, padding: '1.75rem' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: text, marginBottom: '0.875rem' }}>
                                {label}
                            </div>
                            <p style={{ fontSize: '0.9375rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>{content}</p>
                        </div>
                    ))}
                </div>

                {/* Process phases */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1E293B', marginBottom: '1.5rem' }}>
                        How I approached it
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {project.process.map((step, i) => (
                            <motion.div
                                key={step.phase}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{
                                    display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                                    padding: '1.25rem 1.5rem', background: '#F8FAFC',
                                    border: '1px solid #E2E8F0', borderRadius: 12,
                                }}
                            >
                                <div style={{
                                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                                    background: `${project.color}15`, border: `2px solid ${project.color}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', fontWeight: 700, color: project.color,
                                }}>
                                    {i + 1}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.25rem' }}>{step.phase}</div>
                                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{step.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Outcome */}
                <div style={{
                    background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                    border: `1px solid ${project.color}25`, borderRadius: 16, padding: '2rem',
                    marginBottom: '3rem',
                }}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.75rem' }}>
                        📊 Outcome
                    </h2>
                    <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{project.outcome}</p>
                </div>

                {/* Learnings */}
                <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 16, padding: '2rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.75rem' }}>
                        💡 What I learned
                    </h2>
                    <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{project.learnings}</p>
                </div>

                {/* Navigation to other projects */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '2.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#94A3B8', marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        Other projects
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {projects.filter((p) => p.id !== id).map((p) => (
                            <Link
                                key={p.id}
                                to={`/projects/${p.id}`}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    background: '#F8FAFC', border: '1px solid #E2E8F0',
                                    borderRadius: 8, color: '#475569', textDecoration: 'none',
                                    fontSize: '0.875rem', fontWeight: 500, transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#475569'; }}
                            >
                                {p.title} <ChevronRight size={14} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

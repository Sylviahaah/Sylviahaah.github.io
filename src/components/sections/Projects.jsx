import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

const CATEGORIES = ['All', 'AI Product', 'Design', 'Blog', 'Resources'];

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
            style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
            }}
        >
            <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Card visual strip */}
                <div style={{
                    height: 160, position: 'relative', overflow: 'hidden',
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    {/* Abstract geometric indicator */}
                    <div style={{
                        width: 80, height: 80, borderRadius: 20,
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}90)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 12px 40px ${project.color}40`,
                    }}>
                        <TrendingUp size={36} color="white" />
                    </div>
                    {/* Category + Status badges */}
                    <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: '0.5rem' }}>
                        <span style={{
                            padding: '0.25rem 0.625rem',
                            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                            borderRadius: 999, fontSize: '0.7rem', fontWeight: 600, color: '#475569',
                        }}>{project.category}</span>
                    </div>
                    <div style={{ position: 'absolute', top: 12, right: 12 }}>
                        <span style={{
                            padding: '0.25rem 0.625rem',
                            background: project.status === 'Shipped' ? '#DCFCE7' : '#FEF9C3',
                            borderRadius: 999, fontSize: '0.7rem', fontWeight: 600,
                            color: project.status === 'Shipped' ? '#15803D' : '#92400E',
                        }}>{project.status}</span>
                    </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '0.5rem', display: 'flex', justify: 'space-between', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 500 }}>{project.year}</span>
                    </div>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                        {project.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748B', margin: '0 0 1.25rem', lineHeight: 1.6, flex: 1 }}>
                        {project.tagline}
                    </p>

                    {/* Metrics row */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                        {project.metrics.slice(0, 2).map((m) => (
                            <div key={m.label}>
                                <div style={{ fontSize: '1rem', fontWeight: 700, color: project.color }}>{m.value}</div>
                                <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 500 }}>{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
                        {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} style={{
                                padding: '0.2rem 0.5rem', background: '#F8FAFC',
                                border: '1px solid #E2E8F0', borderRadius: 6,
                                fontSize: '0.7rem', color: '#64748B', fontFamily: 'JetBrains Mono, monospace',
                            }}>{tag}</span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: project.color, fontWeight: 600, fontSize: '0.875rem' }}>
                        View case study <ArrowRight size={16} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

function PlaceholderCard({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                background: '#F8FAFC',
                border: '2px dashed #E2E8F0',
                borderRadius: 20, overflow: 'hidden',
                minHeight: 260,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '0.75rem',
                color: '#94A3B8',
            }}
        >
            <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: '#EDF2F7',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
            }}>
                {category === 'Blog' ? '✍️' : '📦'}
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#64748B' }}>
                {category} — Coming Soon
            </div>
            <div style={{ fontSize: '0.8125rem', color: '#94A3B8', textAlign: 'center', maxWidth: 200, lineHeight: 1.5 }}>
                Content for this section is being prepared.
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(p => p.category === activeTab);

    const isPlaceholderTab = activeTab !== 'All' && filteredProjects.length === 0;

    return (
        <section id="projects" style={{ padding: '7rem 1.5rem', background: '#F8FAFC' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <SectionHeading
                    label="Projects"
                    title="Selected work"
                    subtitle="Real products. Real constraints. Each one a distinct problem space."
                />

                {/* Category Tabs */}
                <div style={{
                    overflowX: 'auto',
                    marginTop: '2.5rem',
                    marginBottom: '2rem',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                }}>
                    <div style={{
                        display: 'flex', gap: '0.5rem',
                        width: 'max-content',
                        minWidth: '100%',
                    }}>
                        {CATEGORIES.map((cat) => {
                            const isActive = activeTab === cat;
                            return (
                                <motion.button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        padding: '0.5rem 1.125rem',
                                        borderRadius: 8,
                                        border: isActive ? 'none' : '1.5px solid #E2E8F0',
                                        background: isActive
                                            ? 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
                                            : 'white',
                                        color: isActive ? 'white' : '#475569',
                                        fontSize: '0.875rem',
                                        fontWeight: isActive ? 600 : 500,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: isActive ? '0 4px 14px rgba(139,92,246,0.35)' : 'none',
                                        fontFamily: 'Inter, sans-serif',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {cat}
                                    {cat !== 'All' && (
                                        <span style={{
                                            marginLeft: '0.4rem',
                                            fontSize: '0.7rem',
                                            background: isActive ? 'rgba(255,255,255,0.25)' : '#F1F5F9',
                                            color: isActive ? 'white' : '#64748B',
                                            borderRadius: 999,
                                            padding: '0.05rem 0.4rem',
                                            fontWeight: 600,
                                        }}>
                                            {projects.filter(p => p.category === cat).length || '…'}
                                        </span>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    <AnimatePresence mode="popLayout">
                        {isPlaceholderTab ? (
                            <PlaceholderCard key={`placeholder-${activeTab}`} category={activeTab} index={0} />
                        ) : (
                            filteredProjects.map((p, i) => (
                                <ProjectCard key={p.id} project={p} index={i} />
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { experience, education } from '../../data/experience';

function TimelineItem({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}
        >
            {/* Timeline dot + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(139,92,246,0.3)',
                    zIndex: 1,
                }}>
                    <Briefcase size={18} color="white" />
                </div>
                <div style={{ width: 2, flex: 1, background: '#E2E8F0', marginTop: 8 }} />
            </div>

            {/* Content */}
            <div style={{ paddingBottom: '2.5rem', flex: 1, paddingTop: '0.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.25rem' }}>{item.role}</h3>
                        <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#8B5CF6' }}>{item.company}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{
                            display: 'inline-block', padding: '0.25rem 0.75rem',
                            background: '#F5F3FF', color: '#7C3AED',
                            borderRadius: 999, fontSize: '0.75rem', fontWeight: 500,
                        }}>
                            {item.period}
                        </span>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem' }}>{item.location}</div>
                    </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 1rem' }}>
                    {item.description}
                </p>

                <ul style={{ margin: 0, padding: '0 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {item.highlights.map((h) => (
                        <li key={h} style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                            {h}
                        </li>
                    ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {item.tech.map((t) => (
                        <span key={t} style={{
                            padding: '0.2rem 0.625rem',
                            background: '#F8FAFC', color: '#475569',
                            border: '1px solid #E2E8F0', borderRadius: 6,
                            fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace',
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section id="experience" style={{ padding: '7rem 1.5rem', background: '#F8FAFC' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <SectionHeading
                    label="Experience"
                    title="Where I've created impact"
                    subtitle="5+ years building AI and data products across startup and growth-stage environments."
                />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
                    {/* Work timeline */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                            Work
                        </h3>
                        {experience.map((item, i) => (
                            <TimelineItem key={item.id} item={item} index={i} />
                        ))}
                    </div>

                    {/* Education */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                            Education
                        </h3>
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, x: -32 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.55, delay: i * 0.1 }}
                                style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem' }}
                            >
                                <div style={{
                                    width: 44, height: 44, borderRadius: '50%',
                                    background: '#F5F3FF', border: '2px solid #DDD6FE',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <GraduationCap size={18} color="#8B5CF6" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1E293B', margin: '0 0 0.25rem' }}>{edu.degree}</h4>
                                    <div style={{ fontSize: '0.875rem', color: '#8B5CF6', fontWeight: 500, marginBottom: '0.25rem' }}>{edu.institution}</div>
                                    <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '0.5rem' }}>{edu.period}</div>
                                    <div style={{ fontSize: '0.8125rem', color: '#64748B', fontStyle: 'italic' }}>{edu.note}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

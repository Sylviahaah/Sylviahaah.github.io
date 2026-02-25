import { motion } from 'framer-motion';
import { Sparkles, Target, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const PRINCIPLES = [
    {
        icon: Target,
        title: 'Data Informs, Humans Decide',
        body: 'Metrics guide decisions, but never override the nuance of real user stories.',
    },
    {
        icon: Sparkles,
        title: 'Ship to Learn',
        body: 'A working prototype today beats a perfect spec next month.',
    },
    {
        icon: Users,
        title: 'Cross-boundary Thinking',
        body: 'The most innovative solutions come from connecting disparate fields — like architecture and AI.',
    },
];

export default function About() {
    return (
        <section id="about" style={{ padding: '7rem 1.5rem', background: '#FFFFFF' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <SectionHeading
                    label="About"
                    title="PM as a craft, AI as a medium"
                    subtitle="I believe the best AI products aren't built by choosing between research and business — they're built by people who speak both languages fluently."
                />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {/* Bio card */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6 }}
                        style={{
                            gridColumn: 'span 1',
                            background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
                            borderRadius: 20, padding: '2.5rem', border: '1px solid #DDD6FE',
                        }}
                    >
                        {/* Placeholder avatar */}
                        <div style={{
                            width: 80, height: 80, borderRadius: '50%',
                            background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2rem', marginBottom: '1.5rem',
                            boxShadow: '0 8px 24px rgba(139,92,246,0.3)',
                        }}>
                            👤
                        </div>
                        <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1E293B', margin: '0 0 1rem' }}>
                            Sylvia Zhang
                        </h3>
                        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.75, margin: '0 0 1.5rem' }}>
                            With a foundation in architecture from Tianjin University, I bring spatial thinking and systems design to product management. My transition into AI was driven by a passion for creating tools that augment human capabilities rather than replace them.
                        </p>
                        <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>
                            Through internships at China Architectural Design Institute and ByteDance, I've developed a hybrid skill set — conducting user interviews, analyzing foot traffic data, managing content workflows, and building Chrome extensions. I believe the best products emerge at the intersection of deep user understanding and technical feasibility.
                        </p>
                    </motion.div>

                    {/* Principles */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {PRINCIPLES.map(({ icon: Icon, title, body }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, x: 32 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{
                                    display: 'flex', gap: '1.25rem', padding: '1.5rem',
                                    background: '#FFFFFF', borderRadius: 16,
                                    border: '1px solid #E2E8F0',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                    transition: 'box-shadow 0.2s, border-color 0.2s',
                                    cursor: 'default',
                                }}
                                whileHover={{ boxShadow: '0 4px 20px rgba(139,92,246,0.1)', borderColor: '#C4B5FD' }}
                            >
                                <div style={{
                                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                                    background: '#F5F3FF',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Icon size={22} color="#8B5CF6" />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', margin: '0 0 0.375rem' }}>{title}</h4>
                                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

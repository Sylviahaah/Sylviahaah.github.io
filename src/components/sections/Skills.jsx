import { motion } from 'framer-motion';
import { Brain, Lightbulb, Code2, Wrench } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories, coreCompetencies } from '../../data/skills';

const ICON_MAP = { Brain, Lightbulb, Code2, Wrench };

function SkillTag({ name, delay }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.06, y: -2 }}
            style={{
                display: 'inline-block',
                padding: '0.375rem 0.875rem',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#475569',
                cursor: 'default',
                transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C4B5FD'; e.currentTarget.style.color = '#7C3AED'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#475569'; }}
        >
            {name}
        </motion.span>
    );
}

function CompetencyBar({ label, level, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ marginBottom: '1rem' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1E293B' }}>{label}</span>
                <span style={{ fontSize: '0.8125rem', color: '#8B5CF6', fontWeight: 600 }}>{level}%</span>
            </div>
            <div style={{ height: 6, background: '#F1F5F9', borderRadius: 999, overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #8B5CF6, #A78BFA)',
                        borderRadius: 999,
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '7rem 1.5rem', background: '#FFFFFF' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <SectionHeading
                    label="Skills"
                    title="What I bring to the table"
                    subtitle="Built across 5 years of shipping AI products — from discovery to deployment."
                />

                {/* Skill categories */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {skillCategories.map((cat, ci) => {
                        const Icon = ICON_MAP[cat.icon];
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: ci * 0.1 }}
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: 16, padding: '1.75rem',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                    transition: 'box-shadow 0.2s, border-color 0.2s',
                                }}
                                whileHover={{ boxShadow: '0 6px 24px rgba(139,92,246,0.1)', borderColor: '#DDD6FE' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: 10,
                                        background: `${cat.color}15`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {Icon && <Icon size={20} color={cat.color} />}
                                    </div>
                                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1E293B', margin: 0 }}>{cat.label}</h3>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {cat.skills.map((skill, si) => (
                                        <SkillTag key={skill} name={skill} delay={ci * 0.05 + si * 0.03} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Core competencies */}
                <div style={{ maxWidth: 620, margin: '0 auto' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1E293B', marginBottom: '1.75rem', textAlign: 'center' }}>
                        Core competencies
                    </h3>
                    {coreCompetencies.map((c, i) => (
                        <CompetencyBar key={c.label} label={c.label} level={c.level} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

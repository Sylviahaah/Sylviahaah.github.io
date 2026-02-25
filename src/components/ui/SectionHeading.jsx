import { motion } from 'framer-motion';

/**
 * Reusable animated section heading.
 * Props: label (eyebrow text), title, subtitle (optional)
 */
export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
    const alignClass = align === 'left' ? 'text-left' : 'text-center';
    const itemsClass = align === 'left' ? 'items-start' : 'items-center';

    return (
        <motion.div
            className={`flex flex-col ${itemsClass} gap-3 mb-12`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {label && (
                <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: '#8B5CF6',
                }}>
                    <span style={{ width: 24, height: 1, background: '#8B5CF6', display: 'inline-block' }} />
                    {label}
                    <span style={{ width: 24, height: 1, background: '#8B5CF6', display: 'inline-block' }} />
                </span>
            )}
            <h2 className={`${alignClass}`} style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#1E293B',
                lineHeight: 1.2,
                margin: 0,
            }}>
                {title}
            </h2>
            {subtitle && (
                <p className={`${alignClass}`} style={{
                    fontSize: '1.0625rem', color: '#64748B', maxWidth: '520px',
                    lineHeight: 1.7, margin: 0,
                }}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

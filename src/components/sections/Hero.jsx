import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import HeroCanvas from '../three/HeroCanvas';

const CONTAINER = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
const ITEM = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Three.js Background */}
            <HeroCanvas />

            {/* Gradient overlay so text stays readable */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,1) 100%)',
            }} />

            {/* Content */}
            <motion.div
                variants={CONTAINER}
                initial="hidden"
                animate="show"
                style={{
                    position: 'relative', zIndex: 2,
                    maxWidth: 1200, margin: '0 auto',
                    padding: '0 1.5rem',
                    paddingTop: '5rem',
                    width: '100%',
                }}
            >
                {/* Status badge */}
                <motion.div variants={ITEM} style={{ marginBottom: '1.75rem' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.375rem 0.875rem',
                        background: '#F5F3FF', color: '#7C3AED',
                        borderRadius: 999, fontSize: '0.8125rem', fontWeight: 500,
                        border: '1px solid #DDD6FE',
                    }}>
                        <span style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: '#10B981',
                            boxShadow: '0 0 0 2px rgba(16,185,129,0.25)',
                            animation: 'pulse 2s infinite',
                        }} />
                        Open to new opportunities
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={ITEM} style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    fontWeight: 800,
                    color: '#1E293B',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    margin: '0 0 1.25rem',
                    maxWidth: 800,
                }}>
                    I build AI products
                    <br />
                    <span style={{ color: '#8B5CF6' }}>that think,</span>
                    <br />
                    not just react.
                </motion.h1>

                {/* Sub-headline */}
                <motion.p variants={ITEM} style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: '#475569',
                    lineHeight: 1.7,
                    margin: '0 0 2.5rem',
                    maxWidth: 560,
                }}>
                    AI Product Manager with 5+ years turning ML research into{' '}
                    <strong style={{ color: '#1E293B', fontWeight: 600 }}>measurable business outcomes</strong>.
                    LLMs, knowledge graphs, and cost-optimized inference.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={ITEM} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            padding: '0.875rem 2rem',
                            background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                            color: 'white', border: 'none', borderRadius: 10,
                            fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer',
                            boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(139,92,246,0.5)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,92,246,0.4)'; }}
                    >
                        See my work →
                    </button>

                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            padding: '0.875rem 2rem',
                            background: 'white', color: '#1E293B',
                            border: '1.5px solid #CBD5E1', borderRadius: 10,
                            fontSize: '0.9375rem', fontWeight: 600, cursor: 'pointer',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#8B5CF6'; e.currentTarget.style.color = '#8B5CF6'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#CBD5E1'; e.currentTarget.style.color = '#1E293B'; }}
                    >
                        Let's talk
                    </button>
                </motion.div>

                {/* Stat row */}
                <motion.div variants={ITEM} style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
                    {[
                        { value: '5+', label: 'Years in AI/ML' },
                        { value: '$2M+', label: 'Cost Savings Shipped' },
                        { value: '12', label: 'ML Products Launched' },
                    ].map(({ value, label }) => (
                        <div key={label}>
                            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1E293B', letterSpacing: '-0.03em' }}>{value}</div>
                            <div style={{ fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 500 }}>{label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
                onClick={scrollToAbout}
                aria-label="Scroll down"
                style={{
                    position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
                    zIndex: 2, background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem',
                    color: '#94A3B8',
                }}
            >
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>scroll</span>
                <ArrowDown size={18} />
            </motion.button>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
        </section>
    );
}

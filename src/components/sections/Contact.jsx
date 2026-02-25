import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const SOCIAL = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: '#1E293B' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: '#1DA1F2' },
    { icon: Mail, label: 'Email', href: 'mailto:alex@example.com', color: '#8B5CF6' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate send — replace with your API call / Formspree / EmailJS
        await new Promise((r) => setTimeout(r, 1200));
        setStatus('sent');
    };

    return (
        <section id="contact" style={{ padding: '7rem 1.5rem', background: '#FFFFFF' }}>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <SectionHeading
                    label="Contact"
                    title="Let's build something together"
                    subtitle="Open to senior PM, Head of Product, and advisory conversations. Response in 24h."
                />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {status === 'sent' ? (
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                justifyContent: 'center', gap: '1rem', padding: '3rem',
                                background: '#F0FDF4', borderRadius: 16, border: '1px solid #BBF7D0',
                                textAlign: 'center',
                            }}>
                                <CheckCircle size={48} color="#16A34A" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#15803D', margin: 0 }}>Message sent!</h3>
                                <p style={{ color: '#166534', margin: 0, lineHeight: 1.6 }}>
                                    Thanks for reaching out. I'll reply within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['name', 'email'].map((field) => (
                                    <div key={field}>
                                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#475569', marginBottom: '0.375rem', textTransform: 'capitalize' }}>
                                            {field} *
                                        </label>
                                        <input
                                            id={field}
                                            name={field}
                                            type={field === 'email' ? 'email' : 'text'}
                                            required
                                            value={form[field]}
                                            onChange={handleChange}
                                            placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                                            style={{
                                                width: '100%', padding: '0.75rem 1rem',
                                                border: '1.5px solid #E2E8F0', borderRadius: 10,
                                                fontSize: '0.9375rem', color: '#1E293B',
                                                fontFamily: 'Inter, sans-serif',
                                                outline: 'none', transition: 'border-color 0.2s',
                                                boxSizing: 'border-box',
                                            }}
                                            onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                            onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                                        />
                                    </div>
                                ))}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#475569', marginBottom: '0.375rem' }}>
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="What are you working on?"
                                        style={{
                                            width: '100%', padding: '0.75rem 1rem',
                                            border: '1.5px solid #E2E8F0', borderRadius: 10,
                                            fontSize: '0.9375rem', color: '#1E293B',
                                            fontFamily: 'Inter, sans-serif', resize: 'vertical',
                                            outline: 'none', transition: 'border-color 0.2s',
                                            boxSizing: 'border-box',
                                        }}
                                        onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                        onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%', padding: '0.875rem',
                                        background: status === 'sending'
                                            ? '#A78BFA'
                                            : 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                                        color: 'white', border: 'none', borderRadius: 10,
                                        fontSize: '0.9375rem', fontWeight: 600,
                                        cursor: status === 'sending' ? 'wait' : 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                        boxShadow: '0 4px 16px rgba(139,92,246,0.35)',
                                    }}
                                >
                                    <Send size={17} />
                                    {status === 'sending' ? 'Sending…' : 'Send message'}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Info side */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.75rem' }}>
                                Preferred for
                            </h3>
                            {[
                                '🔭  Senior IC or leadership PM roles in AI/ML',
                                '🤝  Advisory, consulting, and fractional CPO',
                                '🎙️  Speaker invitations (AI product strategy)',
                                '✍️  Content collaboration and co-authoring',
                            ].map((item) => (
                                <p key={item} style={{ fontSize: '0.875rem', color: '#475569', margin: '0 0 0.5rem', lineHeight: 1.6 }}>{item}</p>
                            ))}
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1E293B', margin: '0 0 0.75rem' }}>
                                Find me on
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                {SOCIAL.map(({ icon: Icon, label, href, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            background: '#F8FAFC', border: '1px solid #E2E8F0',
                                            borderRadius: 10, color: '#475569', textDecoration: 'none',
                                            fontSize: '0.875rem', fontWeight: 500,
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#475569'; }}
                                    >
                                        <Icon size={18} />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

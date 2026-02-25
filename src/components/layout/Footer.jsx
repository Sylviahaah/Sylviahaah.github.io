import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Zap } from 'lucide-react';

const SOCIAL_LINKS = [
    { icon: Github, href: 'https://github.com/via-sylvia', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sylviazhang', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sylvia.zhang@via.design', label: 'Email' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid #E2E8F0',
            background: '#F8FAFC',
            padding: '3rem 1.5rem 2rem',
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    {/* Brand */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: 8,
                            background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Zap size={16} color="white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.9375rem' }}>Sylvia Zhang</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>AI Product Manager & Indie Developer</div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    width: 38, height: 38, borderRadius: 8,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#64748B', border: '1px solid #E2E8F0',
                                    textDecoration: 'none', transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#8B5CF6'; e.currentTarget.style.borderColor = '#8B5CF6'; e.currentTarget.style.background = '#F5F3FF'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = '#64748B'; e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'transparent'; }}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ margin: 0, fontSize: '0.8125rem', color: '#94A3B8' }}>
                        © {year} Sylvia Zhang. Built with React + Three.js.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {['About', 'Projects', 'Contact'].map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '0.8125rem', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = '#8B5CF6'}
                                onMouseLeave={e => e.target.style.color = '#94A3B8'}>
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

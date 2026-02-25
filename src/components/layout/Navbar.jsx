import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { useActiveSection } from '../../hooks/useScrollAnimation';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const activeSection = useActiveSection(SECTION_IDS);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleAnchorClick = (e, href) => {
        if (!isHome) return; // Let router handle it
        e.preventDefault();
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                    background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                }}
            >
                <nav style={{
                    maxWidth: 1200, margin: '0 auto',
                    padding: '0 1.5rem',
                    height: 68,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: 8,
                            background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Zap size={16} color="white" strokeWidth={2.5} />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B', letterSpacing: '-0.02em' }}>
                            Via
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }}
                        className="hidden md:flex">
                        {NAV_LINKS.map(({ label, href }) => {
                            const sectionId = href.replace('#', '');
                            const isActive = isHome && activeSection === sectionId;
                            return (
                                <li key={label}>
                                    <a
                                        href={isHome ? href : `/${href}`}
                                        onClick={(e) => handleAnchorClick(e, href)}
                                        style={{
                                            display: 'inline-block', padding: '0.5rem 0.875rem',
                                            fontSize: '0.875rem', fontWeight: 500,
                                            color: isActive ? '#8B5CF6' : '#475569',
                                            textDecoration: 'none', borderRadius: 8,
                                            background: isActive ? '#F5F3FF' : 'transparent',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={e => { if (!isActive) e.target.style.color = '#1E293B'; e.target.style.background = '#F8FAFC'; }}
                                        onMouseLeave={e => { e.target.style.color = isActive ? '#8B5CF6' : '#475569'; e.target.style.background = isActive ? '#F5F3FF' : 'transparent'; }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => handleAnchorClick(e, '#contact')}
                                style={{
                                    display: 'inline-block', padding: '0.5rem 1.25rem',
                                    fontSize: '0.875rem', fontWeight: 600,
                                    color: 'white', textDecoration: 'none', borderRadius: 8,
                                    background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                                    boxShadow: '0 2px 8px rgba(139,92,246,0.35)',
                                    transition: 'all 0.2s',
                                    marginLeft: '0.5rem',
                                }}
                                onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 4px 16px rgba(139,92,246,0.45)'; }}
                                onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 2px 8px rgba(139,92,246,0.35)'; }}
                            >
                                Let's talk
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex md:hidden"
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            color: '#1E293B', padding: '0.5rem',
                        }}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
                            background: 'rgba(255,255,255,0.97)',
                            backdropFilter: 'blur(16px)',
                            borderBottom: '1px solid #E2E8F0',
                            padding: '1rem 1.5rem 1.5rem',
                        }}
                    >
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleAnchorClick(e, href)}
                                        style={{
                                            display: 'block', padding: '0.75rem 1rem',
                                            fontSize: '1rem', fontWeight: 500,
                                            color: '#1E293B', textDecoration: 'none',
                                            borderRadius: 8,
                                        }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

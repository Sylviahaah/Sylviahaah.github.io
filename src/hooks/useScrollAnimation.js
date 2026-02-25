import { useState, useEffect, useRef } from 'react';

/**
 * Fires a callback when element enters the viewport.
 * Returns a [ref, isVisible] tuple.
 */
export function useScrollAnimation(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Fire once
                }
            },
            { threshold }
        );

        const current = ref.current;
        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); };
    }, [threshold]);

    return [ref, isVisible];
}

/**
 * Tracks which section is active for Navbar highlighting.
 * Pass an array of section IDs in order.
 */
export function useActiveSection(sectionIds) {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const observers = [];
        const handleIntersect = (id) => (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(id);
            });
        };

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(handleIntersect(id), {
                rootMargin: '-40% 0px -55% 0px',
            });
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [sectionIds]);

    return activeSection;
}

/**
 * Scroll progress percentage (0–100).
 */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const total = scrollHeight - clientHeight;
            setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return progress;
}

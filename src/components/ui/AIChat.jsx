import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

// ============================================================
// AIChat — Floating chatbot powered by DeepSeek API
// Set your API key in .env as VITE_DEEPSEEK_API_KEY
// ============================================================

const SYSTEM_PROMPT = `You are an AI assistant representing Alex Chen's portfolio.
Alex is an AI Product Manager with 5+ years of experience shipping LLM platforms, knowledge graphs, and ML infrastructure products.

Answer questions about Alex's background, projects, skills, and experience based on these facts:
- Currently: Senior PM, AI Platform at Acme AI Corp (2023–present)
- Previously: PM at DataFlow Technologies, APM at Nexus Analytics
- Education: MS CS (AI) Stanford, BS Math+Stats UMich
- Key projects: LLM Performance Dashboard ($1.2M cost savings), 3D Knowledge Graph (67% query reduction), LLM Caching (71% cost cut), Prompt Flow Designer (340+ beta users)
- Skills: LLM fine-tuning, RAG, prompt engineering, Python, React, product strategy, roadmapping, A/B testing

Be concise, friendly, and professional. If asked something outside Alex's portfolio, redirect politely.`;

const SUGGESTED_QUESTIONS = [
    "What's your biggest impact project?",
    "How do you approach LLM cost optimization?",
    "What PM skills do you bring to AI teams?",
    "Are you open to new roles?",
];

function Message({ msg }) {
    const isUser = msg.role === 'user';
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                display: 'flex',
                gap: '0.625rem',
                alignItems: 'flex-start',
                flexDirection: isUser ? 'row-reverse' : 'row',
                marginBottom: '1rem',
            }}
        >
            {/* Avatar */}
            <div style={{
                width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                background: isUser
                    ? 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
                    : 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                {isUser
                    ? <User size={14} color="white" />
                    : <Bot size={14} color="white" />}
            </div>

            {/* Bubble */}
            <div style={{
                maxWidth: '78%',
                padding: '0.625rem 0.875rem',
                borderRadius: isUser ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                background: isUser ? 'linear-gradient(135deg, #8B5CF6, #7C3AED)' : '#F8FAFC',
                border: isUser ? 'none' : '1px solid #E2E8F0',
                color: isUser ? 'white' : '#1E293B',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
            }}>
                {msg.content}
            </div>
        </motion.div>
    );
}

function TypingIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', marginBottom: '1rem' }}
        >
            <div style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
                <Bot size={14} color="white" />
            </div>
            <div style={{
                padding: '0.625rem 1rem', background: '#F8FAFC',
                border: '1px solid #E2E8F0', borderRadius: '4px 14px 14px 14px',
                display: 'flex', gap: '0.375rem', alignItems: 'center',
            }}>
                {[0, 1, 2].map((i) => (
                    <motion.div key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        style={{ width: 6, height: 6, borderRadius: '50%', background: '#94A3B8' }}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default function AIChat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Alex's AI assistant. Ask me anything about his projects, experience, or PM philosophy. 👋",
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    // Focus input when chat opens
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    const sendMessage = async (text) => {
        const userText = text || input.trim();
        if (!userText || loading) return;

        setInput('');
        setError(null);
        const newMessages = [...messages, { role: 'user', content: userText }];
        setMessages(newMessages);
        setLoading(true);

        try {
            const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;

            if (!apiKey) {
                // Demo mode — simulate a thoughtful response
                await new Promise((r) => setTimeout(r, 1200));
                setMessages([...newMessages, {
                    role: 'assistant',
                    content: "🔑 To enable live AI responses, add your DeepSeek API key to `.env` as `VITE_DEEPSEEK_API_KEY=your_key_here`.\n\nFor now: Alex's biggest impact project was the LLM Caching Strategy — it cut API costs by 71% ($199K/month savings) through semantic similarity caching with a 68% hit rate.",
                }]);
                return;
            }

            const response = await fetch('https://api.deepseek.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...newMessages.map(({ role, content }) => ({ role, content })),
                    ],
                    max_tokens: 300,
                    temperature: 0.7,
                    stream: false,
                }),
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                throw new Error(err?.error?.message || `API error ${response.status}`);
            }

            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content || 'Sorry, no response received.';
            setMessages([...newMessages, { role: 'assistant', content: reply }]);
        } catch (err) {
            setError(err.message);
            setMessages([...newMessages, {
                role: 'assistant',
                content: `⚠️ Couldn't reach the AI: ${err.message}. You can still browse the portfolio manually!`,
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Chat window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                            position: 'fixed', bottom: '5.5rem', right: '1.5rem', zIndex: 200,
                            width: 360, height: 520,
                            background: 'white',
                            borderRadius: 20, overflow: 'hidden',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)',
                            display: 'flex', flexDirection: 'column',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1rem 1.25rem',
                            background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                <div style={{
                                    width: 34, height: 34, borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Sparkles size={18} color="white" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9375rem' }}>Alex's AI</div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
                                        Powered by DeepSeek
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: 8, padding: '0.375rem', cursor: 'pointer', color: 'white', display: 'flex' }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1rem 0.5rem' }}>
                            {messages.map((msg, i) => (
                                <Message key={i} msg={msg} />
                            ))}
                            {loading && <TypingIndicator />}
                            <div ref={bottomRef} />
                        </div>

                        {/* Suggested questions — only if 1 message (intro) */}
                        {messages.length === 1 && (
                            <div style={{ padding: '0 1rem 0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                                {SUGGESTED_QUESTIONS.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => sendMessage(q)}
                                        style={{
                                            padding: '0.3rem 0.625rem',
                                            background: '#F5F3FF', border: '1px solid #DDD6FE',
                                            borderRadius: 999, fontSize: '0.71rem', color: '#7C3AED',
                                            cursor: 'pointer', fontWeight: 500, fontFamily: 'Inter, sans-serif',
                                            transition: 'all 0.15s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.background = '#EDE9FE'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = '#F5F3FF'; }}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div style={{
                            padding: '0.75rem 1rem',
                            borderTop: '1px solid #E2E8F0',
                            display: 'flex', gap: '0.5rem', alignItems: 'flex-end',
                        }}>
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything…"
                                rows={1}
                                style={{
                                    flex: 1, padding: '0.625rem 0.875rem',
                                    border: '1.5px solid #E2E8F0', borderRadius: 12,
                                    fontSize: '0.8125rem', fontFamily: 'Inter, sans-serif',
                                    color: '#1E293B', resize: 'none', outline: 'none',
                                    transition: 'border-color 0.2s', lineHeight: 1.5,
                                    maxHeight: 100, overflowY: 'auto',
                                }}
                                onFocus={e => e.target.style.borderColor = '#8B5CF6'}
                                onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                            />
                            <button
                                onClick={() => sendMessage()}
                                disabled={!input.trim() || loading}
                                style={{
                                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                                    background: input.trim() && !loading
                                        ? 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
                                        : '#E2E8F0',
                                    border: 'none', cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: input.trim() && !loading ? 'white' : '#94A3B8',
                                    transition: 'all 0.2s',
                                }}
                            >
                                {loading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={16} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB toggle button */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Open AI chat"
                style={{
                    position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 201,
                    width: 56, height: 56, borderRadius: '50%',
                    background: open
                        ? '#1E293B'
                        : 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(139,92,246,0.5)',
                    color: 'white',
                    transition: 'background 0.2s',
                }}
            >
                <AnimatePresence mode="wait">
                    {open
                        ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.div>
                        : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageSquare size={22} /></motion.div>
                    }
                </AnimatePresence>
            </motion.button>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </>
    );
}

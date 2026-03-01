'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
    id: number;
    role: 'assistant' | 'user';
    text: string;
    typing?: boolean;
}

const botReplies: Record<string, string> = {
    default: "Thank you for reaching out. I can help you learn about our services, competencies, industry expertise, and how we engage with enterprise clients. What would you like to explore?",
    services: "Nous offers four core service lines: Digital Product Engineering, Digital Application Services, Quality Engineering (through our Testree brand), and Infrastructure Management. Each is structured to address enterprise scale and complexity. Which area is most relevant to your need?",
    ai: "Our AI & Automation competency covers Generative AI, Agentic AI, Intelligent Automation, and ML & Data Science. We help enterprises build AI capabilities with the right data foundation, governance frameworks, and integration architecture. Shall I connect you with a specialist?",
    cloud: "We deliver cloud transformation across Azure, AWS, Google Cloud, and Salesforce — including cloud-native development, migration, FinOps optimization, and managed services. What's your current cloud posture?",
    banking: "Banking & Financial Services is one of our deepest verticals — with over 200 applications delivered for Tier-1 and Tier-2 banks globally. We specialize in core banking modernization, real-time payments, and regulatory compliance engineering.",
    insurance: "We've worked with global insurers across policy administration modernization, claims automation, and InsurTech platform development. Our teams understand both the technical and regulatory dimensions of insurance transformation.",
    healthcare: "Our healthcare practice delivers HIPAA-compliant platforms, EHR integrations, and clinical decision support systems. We build with regulatory precision as a first principle, not an afterthought.",
    cmmi: "Nous is appraised at CMMI Level 5 (v3.0) — the highest level of process maturity, evaluated across Services, Security, People, and Suppliers domains. This reflects the organizational discipline behind every engagement we run.",
    contact: "I'd recommend starting with a brief discovery call with our engineering leadership team. They'll assess your landscape and propose the right engagement model. Would you like me to help you schedule a conversation?",
    pricing: "Our engagements are structured around value delivery, not T&M vendor models. We typically work on managed outcomes, dedicated pods, or platform partnerships. Our commercial team can provide an indicative model after a brief scoping conversation.",
    careers: "We're actively hiring across engineering, AI, cloud, and quality engineering disciplines. Our teams operate from delivery centers in India, the US, UK, Germany, Canada, and Serbia. Visit our Careers page or ask me about specific roles.",
};

function getReply(msg: string): string {
    const lower = msg.toLowerCase();
    if (lower.includes('service') || lower.includes('what do you do') || lower.includes('offer')) return botReplies.services;
    if (lower.includes('ai') || lower.includes('automation') || lower.includes('generative') || lower.includes('machine learning')) return botReplies.ai;
    if (lower.includes('cloud') || lower.includes('azure') || lower.includes('aws') || lower.includes('google')) return botReplies.cloud;
    if (lower.includes('bank') || lower.includes('financial') || lower.includes('fintech')) return botReplies.banking;
    if (lower.includes('insurance') || lower.includes('insurer') || lower.includes('claims')) return botReplies.insurance;
    if (lower.includes('health') || lower.includes('hospital') || lower.includes('hipaa') || lower.includes('clinical')) return botReplies.healthcare;
    if (lower.includes('cmmi') || lower.includes('iso') || lower.includes('certif') || lower.includes('compliance')) return botReplies.cmmi;
    if (lower.includes('contact') || lower.includes('meet') || lower.includes('call') || lower.includes('schedule') || lower.includes('talk')) return botReplies.contact;
    if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('pricing')) return botReplies.pricing;
    if (lower.includes('career') || lower.includes('job') || lower.includes('hire') || lower.includes('work')) return botReplies.careers;
    return botReplies.default;
}

const suggestedPrompts = [
    'What services does Nous offer?',
    'Tell me about your AI capabilities',
    'CMMI Level 5 certification',
    'Healthcare expertise',
    'Schedule a consultation',
];

export default function AIAssistant() {
    const [open, setOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            role: 'assistant',
            text: "Hello. I'm the Nous Virtual Assistant — here to help you understand our capabilities, services, and how we engage with enterprise clients. How can I assist you today?",
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    useEffect(() => {
        if (open && !minimized) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open, minimized]);

    const sendMessage = (text: string) => {
        if (!text.trim()) return;
        const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim() };
        setMessages((m) => [...m, userMsg]);
        setInput('');
        setIsTyping(true);
        setTimeout(() => {
            const reply = getReply(text);
            setIsTyping(false);
            setMessages((m) => [...m, { id: Date.now() + 1, role: 'assistant', text: reply }]);
        }, 1000 + Math.random() * 600);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <>
            {/* Floating Button */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0F2D5E, #1A56DB)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 32px rgba(26,86,219,0.45)',
                        zIndex: 999,
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,86,219,0.55)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,86,219,0.45)';
                    }}
                    aria-label="Open Nous Virtual Assistant"
                >
                    <MessageSquare size={26} color="white" />
                    <div style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '12px',
                        height: '12px',
                        background: '#10B981',
                        borderRadius: '50%',
                        border: '2px solid white',
                    }} />
                </button>
            )}

            {/* Chat Panel */}
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '400px',
                        maxWidth: 'calc(100vw - 2rem)',
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.08)',
                        zIndex: 999,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        animation: 'fadeInUp 0.3s ease',
                        maxHeight: minimized ? 'auto' : '600px',
                    }}
                >
                    {/* Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0A1628, #0F2D5E)',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(26,86,219,0.3)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}>
                            <Bot size={20} color="#60A5FA" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'white' }}>Nous Virtual Assistant</div>
                            <div style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <div style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%' }} />
                                Available now
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={() => setMinimized(!minimized)}
                                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                {minimized ? <Maximize2 size={14} color="white" /> : <Minimize2 size={14} color="white" />}
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <X size={14} color="white" />
                            </button>
                        </div>
                    </div>

                    {!minimized && (
                        <>
                            {/* Messages */}
                            <div style={{
                                flex: 1,
                                overflowY: 'auto',
                                padding: '1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                minHeight: '300px',
                                maxHeight: '380px',
                            }}>
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        style={{
                                            display: 'flex',
                                            flexDirection: msg.role === 'assistant' ? 'row' : 'row-reverse',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            animation: 'fadeInUp 0.25s ease',
                                        }}
                                    >
                                        <div style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '8px',
                                            background: msg.role === 'assistant' ? 'linear-gradient(135deg, #0F2D5E, #1A56DB)' : '#F1F5F9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            {msg.role === 'assistant'
                                                ? <Bot size={15} color="white" />
                                                : <User size={15} color="#64748B" />
                                            }
                                        </div>
                                        <div style={{
                                            maxWidth: '80%',
                                            background: msg.role === 'assistant' ? '#F8FAFC' : '#0F2D5E',
                                            color: msg.role === 'assistant' ? '#0A1628' : 'white',
                                            borderRadius: msg.role === 'assistant' ? '4px 12px 12px 12px' : '12px 4px 12px 12px',
                                            padding: '0.75rem 1rem',
                                            fontSize: '0.9rem',
                                            lineHeight: 1.65,
                                            border: msg.role === 'assistant' ? '1px solid #E2E8F0' : 'none',
                                        }}>
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', animation: 'fadeIn 0.2s ease' }}>
                                        <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #0F2D5E, #1A56DB)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Bot size={15} color="white" />
                                        </div>
                                        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px 12px 12px 12px', padding: '0.875rem 1.125rem', display: 'flex', gap: '5px', alignItems: 'center' }}>
                                            {[0, 1, 2].map((n) => (
                                                <div key={n} style={{
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: '#94A3B8',
                                                    animation: `bounce 1.2s ease ${n * 0.2}s infinite`,
                                                }} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div ref={bottomRef} />
                            </div>

                            {/* Suggestions */}
                            {messages.length <= 1 && (
                                <div style={{ padding: '0 1.25rem 0.875rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {suggestedPrompts.map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => sendMessage(p)}
                                            style={{
                                                background: 'rgba(26,86,219,0.06)',
                                                border: '1px solid rgba(26,86,219,0.15)',
                                                borderRadius: '100px',
                                                padding: '0.4rem 0.875rem',
                                                fontSize: '0.8rem',
                                                color: '#1A56DB',
                                                cursor: 'pointer',
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 500,
                                                transition: 'all 0.15s',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(26,86,219,0.12)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(26,86,219,0.06)';
                                            }}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Input */}
                            <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid #F1F5F9', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about our services, industries, or team..."
                                    style={{
                                        flex: 1,
                                        border: '1px solid #E2E8F0',
                                        borderRadius: '8px',
                                        padding: '0.625rem 1rem',
                                        fontSize: '0.9rem',
                                        fontFamily: 'Inter, sans-serif',
                                        color: '#0A1628',
                                        outline: 'none',
                                        background: '#F8FAFC',
                                        transition: 'border-color 0.15s',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#1A56DB'}
                                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                                />
                                <button
                                    onClick={() => sendMessage(input)}
                                    disabled={!input.trim()}
                                    style={{
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '8px',
                                        background: input.trim() ? '#1A56DB' : '#E2E8F0',
                                        border: 'none',
                                        cursor: input.trim() ? 'pointer' : 'default',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    <Send size={16} color={input.trim() ? 'white' : '#94A3B8'} />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}

            <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
        </>
    );
}

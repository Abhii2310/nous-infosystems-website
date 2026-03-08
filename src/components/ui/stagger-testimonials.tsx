"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    { tempId: 0, testimonial: "Nous shipped what would have taken us 18 months — inside 8 weeks. Extraordinary engineers, extraordinary outcomes.", by: "Sarah Chen, CTO · NovaBanking UK", imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" },
    { tempId: 1, testimonial: "Claims processing went from 14 days to 3 hours. Not incremental improvement — total transformation.", by: "James Okafor, Head of Ops · Global Insurer", imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { tempId: 2, testimonial: "Apple-level engineering quality. Our MLOps infrastructure is now exquisitely scalable for 200+ concurrent models.", by: "Priya Sharma, VP Engineering · HealthUnity", imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
    { tempId: 3, testimonial: "We didn't get generic AI consulting. Nous redesigned our competitive moat. Worth every penny.", by: "Marcus Williams, CEO · RetailIQ", imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { tempId: 4, testimonial: "The agentic workflows Nous built saved us $4M in operational costs in the first quarter alone.", by: "Elena Vasquez, COO · FinServe Group", imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { tempId: 5, testimonial: "10x faster model deployment. Nous turned our AI vision into production reality in weeks not years.", by: "Raj Patel, CTO · SupplyAI", imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { tempId: 6, testimonial: "The data lakehouse Nous architected for us processes 50TB daily with sub-second query latency.", by: "Aisha Mohammed, Data Lead · TelecomGiant", imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
    { tempId: 7, testimonial: "Best AI engineering partner in the market. Period. Nothing else comes close to the output quality.", by: "Thomas Berg, CEO · Nordic Digital", imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
    const isCenter = position === 0;
    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 border-violet-500"
                    : "z-0 bg-white/5 border-white/20 hover:border-violet-400/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                background: isCenter ? 'linear-gradient(135deg, #7c3aed, #2563eb)' : undefined,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px rgba(124,58,237,0.4)" : "0px 0px 0px 0px transparent"
            }}
        >
            <span className="absolute block origin-top-right rotate-45 bg-violet-500/40"
                style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }} />
            <img src={testimonial.imgSrc} alt={testimonial.by.split(',')[0]}
                className="mb-4 h-14 w-12 object-cover object-top rounded"
                style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.3)" }} />
            <h3 className={cn("text-base sm:text-lg font-medium leading-snug", isCenter ? "text-white" : "text-white/80")}>
                &ldquo;{testimonial.testimonial}&rdquo;
            </h3>
            <p className={cn("absolute bottom-8 left-8 right-8 text-sm italic", isCenter ? "text-white/80" : "text-white/50")}>
                — {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [list, setList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...list];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setList(newList);
    };

    useEffect(() => {
        const update = () => setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <div className="relative w-full overflow-hidden" style={{ height: 580, background: 'transparent' }}>
            {list.map((t, index) => {
                const position = list.length % 2
                    ? index - (list.length + 1) / 2
                    : index - list.length / 2;
                return (
                    <TestimonialCard key={t.tempId} testimonial={t} handleMove={handleMove}
                        position={position} cardSize={cardSize} />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button onClick={() => handleMove(-1)}
                    className="flex h-14 w-14 items-center justify-center text-2xl border-2 border-white/20 bg-black/50 hover:bg-violet-600 hover:border-violet-400 text-white transition-colors">
                    <ChevronLeft />
                </button>
                <button onClick={() => handleMove(1)}
                    className="flex h-14 w-14 items-center justify-center text-2xl border-2 border-white/20 bg-black/50 hover:bg-violet-600 hover:border-violet-400 text-white transition-colors">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

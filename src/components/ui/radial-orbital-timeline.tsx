"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap, Bot, Database, GitMerge, ShieldCheck, Cloud, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
    icon: React.ElementType;
    relatedIds: number[];
    status: "completed" | "in-progress" | "pending";
    energy: number;
}

interface RadialOrbitalTimelineProps {
    timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
    const [rotationAngle, setRotationAngle] = useState<number>(0);
    const [autoRotate, setAutoRotate] = useState<boolean>(true);
    const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
    const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const toggleItem = (id: number) => {
        setExpandedItems((prev) => {
            const newState: Record<number, boolean> = {};
            Object.keys(prev).forEach((key) => { newState[parseInt(key)] = false; });
            newState[id] = !prev[id];
            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);
                const relatedItems = getRelatedItems(id);
                const newPulse: Record<number, boolean> = {};
                relatedItems.forEach((rid) => { newPulse[rid] = true; });
                setPulseEffect(newPulse);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }
            return newState;
        });
    };

    useEffect(() => {
        if (!autoRotate) return;
        const t = setInterval(() => {
            setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
        }, 50);
        return () => clearInterval(t);
    }, [autoRotate]);

    const calculateNodePosition = (index: number, total: number) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const radius = 200;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);
        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
        return { x, y, angle, zIndex, opacity };
    };

    const getRelatedItems = (itemId: number): number[] => {
        const item = timelineData.find((i) => i.id === itemId);
        return item ? item.relatedIds : [];
    };

    const isRelatedToActive = (itemId: number): boolean => {
        if (!activeNodeId) return false;
        return getRelatedItems(activeNodeId).includes(itemId);
    };

    const getStatusStyles = (status: TimelineItem["status"]): string => {
        switch (status) {
            case "completed": return "text-white bg-black border-white";
            case "in-progress": return "text-black bg-white border-black";
            default: return "text-white bg-black/40 border-white/50";
        }
    };

    return (
        <div
            className="w-full flex flex-col items-center justify-center overflow-hidden"
            style={{ height: 560, background: 'transparent' }}
            ref={containerRef}
            onClick={handleContainerClick}
        >
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <div className="absolute w-full h-full flex items-center justify-center" ref={orbitRef}
                    style={{ perspective: "1000px" }}>
                    {/* Central pulsing core */}
                    <div className="absolute w-16 h-16 rounded-full flex items-center justify-center z-10"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb, #0891b2)', animation: 'pulse 2s infinite' }}>
                        <div className="absolute w-20 h-20 rounded-full border border-white/20" style={{ animation: 'ping 1s infinite' }} />
                        <div className="absolute w-24 h-24 rounded-full border border-white/10" style={{ animation: 'ping 1s 0.5s infinite' }} />
                        <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur" />
                    </div>

                    {/* Orbit ring */}
                    <div className="absolute w-96 h-96 rounded-full border border-white/10" />

                    {timelineData.map((item, index) => {
                        const position = calculateNodePosition(index, timelineData.length);
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                ref={(el) => { nodeRefs.current[item.id] = el; }}
                                className="absolute transition-all duration-700 cursor-pointer"
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px)`,
                                    zIndex: isExpanded ? 200 : position.zIndex,
                                    opacity: isExpanded ? 1 : position.opacity,
                                }}
                                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                            >
                                {/* Glow halo */}
                                <div className={`absolute rounded-full ${isPulsing ? 'animate-pulse' : ''}`}
                                    style={{
                                        background: `radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)`,
                                        width: `${item.energy * 0.5 + 40}px`,
                                        height: `${item.energy * 0.5 + 40}px`,
                                        left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                        top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                    }} />
                                {/* Node circle */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isExpanded ? 'scale-150 bg-white text-black border-white shadow-lg shadow-white/30'
                                        : isRelated ? 'bg-violet-500/50 text-white border-violet-400 animate-pulse'
                                            : 'bg-black/80 text-white border-white/40'}`}>
                                    <Icon size={16} />
                                </div>
                                {/* Label */}
                                <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? 'text-white scale-125' : 'text-white/70'}`}>
                                    {item.title}
                                </div>
                                {/* Expanded card */}
                                {isExpanded && (
                                    <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/20 shadow-xl overflow-visible">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-center">
                                                <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                                                    {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                                                </Badge>
                                                <span className="text-xs font-mono text-white/50">{item.date}</span>
                                            </div>
                                            <CardTitle className="text-sm mt-2 text-white">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-xs text-white/80">
                                            <p>{item.content}</p>
                                            <div className="mt-4 pt-3 border-t border-white/10">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="flex items-center gap-1"><Zap size={10} />Maturity</span>
                                                    <span className="font-mono">{item.energy}%</span>
                                                </div>
                                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full rounded-full" style={{ width: `${item.energy}%`, background: 'linear-gradient(to right, #7c3aed, #2563eb)' }} />
                                                </div>
                                            </div>
                                            {item.relatedIds.length > 0 && (
                                                <div className="mt-4 pt-3 border-t border-white/10">
                                                    <div className="flex items-center mb-2 gap-1">
                                                        <LinkIcon size={10} className="text-white/70" />
                                                        <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">Connected</h4>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1">
                                                        {item.relatedIds.map((rid) => {
                                                            const rel = timelineData.find((i) => i.id === rid);
                                                            return (
                                                                <Button key={rid} variant="outline" size="sm"
                                                                    className="h-6 px-2 py-0 text-xs border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                                                                    onClick={(e) => { e.stopPropagation(); toggleItem(rid); }}>
                                                                    {rel?.title} <ArrowRight size={8} className="ml-1" />
                                                                </Button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Pre-wired Nous data
export function NousOrbitalTimeline() {
    const data: TimelineItem[] = [
        { id: 1, title: "AI Product Eng", date: "Pillar 01", content: "LLM integration, RAG pipelines, AI-native UX and copilot development at enterprise speed.", category: "Product", icon: Bot, relatedIds: [2, 3], status: "completed", energy: 98 },
        { id: 2, title: "Data Engineering", date: "Pillar 02", content: "Lakehouse architectures, real-time pipelines, feature stores, and vector database infrastructure.", category: "Data", icon: Database, relatedIds: [1, 3], status: "completed", energy: 94 },
        { id: 3, title: "Agentic Automation", date: "Pillar 03", content: "Autonomous multi-agent systems that orchestrate end-to-end business workflows 24/7.", category: "Automation", icon: GitMerge, relatedIds: [1, 2, 4], status: "in-progress", energy: 87 },
        { id: 4, title: "Quality Engineering", date: "Pillar 04", content: "AI-driven test generation, shift-left QA, and zero-defect CI/CD pipelines at scale.", category: "QA", icon: ShieldCheck, relatedIds: [3, 5], status: "in-progress", energy: 91 },
        { id: 5, title: "Cloud Infrastructure", date: "Pillar 05", content: "MLOps platforms, GPU cluster orchestration, and multi-cloud AI infrastructure.", category: "Cloud", icon: Cloud, relatedIds: [4, 1], status: "completed", energy: 96 },
    ];
    return <RadialOrbitalTimeline timelineData={data} />;
}

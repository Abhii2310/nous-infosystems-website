"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate }}
            transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ width, height }}
                className="relative"
            >
                <div className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-gradient-to-r to-transparent",
                    gradient,
                    "backdrop-blur-[2px] border-2 border-white/[0.15]",
                    "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                    "after:absolute after:inset-0 after:rounded-full",
                    "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                )} />
            </motion.div>
        </motion.div>
    );
}

export function HeroShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <ElegantShape delay={0.3} width={700} height={160} rotate={12}
                gradient="from-violet-500/[0.12]"
                className="left-[-8%] top-[18%]" />
            <ElegantShape delay={0.5} width={550} height={130} rotate={-15}
                gradient="from-cyan-500/[0.10]"
                className="right-[-4%] top-[68%]" />
            <ElegantShape delay={0.4} width={320} height={90} rotate={-8}
                gradient="from-fuchsia-500/[0.12]"
                className="left-[8%] bottom-[12%]" />
            <ElegantShape delay={0.6} width={220} height={65} rotate={22}
                gradient="from-amber-500/[0.10]"
                className="right-[18%] top-[12%]" />
            <ElegantShape delay={0.7} width={160} height={45} rotate={-28}
                gradient="from-emerald-500/[0.10]"
                className="left-[22%] top-[6%]" />
        </div>
    );
}

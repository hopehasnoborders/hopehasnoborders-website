'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, Heart, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

// Transit map SVG paths - represents connection and networks
function TransitLines() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
        >
            {/* Line 1 - Main route */}
            <motion.path
                d="M -100 300 Q 200 350 400 300 T 700 320 T 1000 280 T 1300 350"
                stroke="var(--yarrow)"
                strokeWidth="2"
                fill="none"
                opacity={0.15}
                strokeDasharray="8 12"
                animate={{
                    strokeDashoffset: [0, -100],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Line 2 - Secondary route */}
            <motion.path
                d="M -50 500 Q 150 450 350 480 T 650 450 T 950 500 T 1250 420"
                stroke="var(--sky)"
                strokeWidth="1.5"
                fill="none"
                opacity={0.12}
                strokeDasharray="6 10"
                animate={{
                    strokeDashoffset: [0, -80],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Line 3 - Accent route */}
            <motion.path
                d="M -80 650 Q 200 600 400 640 T 800 600 T 1100 660 T 1300 580"
                stroke="var(--forrest)"
                strokeWidth="1"
                fill="none"
                opacity={0.08}
                strokeDasharray="4 8"
                animate={{
                    strokeDashoffset: [0, -60],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Connection nodes */}
            <motion.circle
                cx="400"
                cy="300"
                r="4"
                fill="var(--yarrow)"
                opacity={0.2}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.circle
                cx="700"
                cy="320"
                r="3"
                fill="var(--yarrow)"
                opacity={0.15}
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
            <motion.circle
                cx="350"
                cy="480"
                r="3"
                fill="var(--sky)"
                opacity={0.15}
                animate={{ opacity: [0.08, 0.2, 0.08] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
        </svg>
    )
}

// Horizon parallax gradient layers
function HorizonGradient() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Layer 1 - Slowest, furthest */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'linear-gradient(135deg, var(--bone) 0%, transparent 40%, var(--sky) 100%)',
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Layer 2 - Medium */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    background: 'linear-gradient(45deg, transparent 30%, var(--yarrow) 70%, transparent 100%)',
                }}
                animate={{
                    x: [0, -20, 0],
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Layer 3 - Closest, subtle */}
            <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                    background: 'radial-gradient(ellipse at 30% 70%, var(--forrest) 0%, transparent 50%)',
                }}
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    )
}

// Warm pulse shader for CTA button
function WarmPulseCTA({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link href={href} className="relative inline-block group">
            {/* Pulsing glow behind button */}
            <motion.div
                className="absolute inset-0 -m-4 rounded-2xl"
                style={{
                    background: 'radial-gradient(circle, var(--yarrow) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.08, 0.18, 0.08],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Button */}
            <span className="relative inline-flex items-center gap-3 bg-[var(--forrest)] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[var(--yarrow)] hover:text-black transition-all duration-300 z-10">
                {children}
            </span>
        </Link>
    )
}

// Sparse guiding particles
function GuidingParticles() {
    const particles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 15 + 20,
        delay: Math.random() * 10,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.startX}%`,
                        top: `${p.startY}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: 'var(--yarrow)',
                    }}
                    animate={{
                        x: [0, 50, 100],
                        y: [0, -30, -60],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

export default function NotFound() {
    const { lang } = useLanguage()

    return (
        <div className="min-h-screen bg-[var(--bone)] flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            {/* Background Effects */}
            <HorizonGradient />
            <TransitLines />
            <GuidingParticles />

            {/* Content */}
            <div className="max-w-2xl mx-auto text-center relative z-10">
                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-[120px] md:text-[160px] font-serif text-[var(--forrest)] leading-none select-none opacity-90">
                        4
                        <motion.span
                            animate={{
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block text-[var(--yarrow)]"
                        >
                            0
                        </motion.span>
                        4
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h2 className="text-2xl md:text-3xl font-serif text-[var(--forrest)] mb-4">
                        {lang === 'es' ? 'Estás en el camino correcto' : "You're on the right path"}
                    </h2>
                    <p className="text-neutral-600 font-light text-lg mb-10 max-w-md mx-auto">
                        {lang === 'es'
                            ? 'Esta página no existe, pero hay muchas maneras en que podemos ayudarte.'
                            : "This page doesn't exist, but there are many ways we can help."
                        }
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="grid sm:grid-cols-3 gap-4 mb-10"
                >
                    <Link
                        href="/"
                        className="group bg-white/80 backdrop-blur-sm border border-[var(--forrest)]/10 rounded-xl p-6 hover:border-[var(--yarrow)] hover:shadow-lg transition-all duration-500"
                    >
                        <Home className="w-7 h-7 text-[var(--yarrow)] mx-auto mb-3" />
                        <span className="block text-[var(--forrest)] font-semibold text-sm">
                            {lang === 'es' ? 'Inicio' : 'Home'}
                        </span>
                    </Link>
                    <Link
                        href="/resources"
                        className="group bg-white/80 backdrop-blur-sm border border-[var(--forrest)]/10 rounded-xl p-6 hover:border-[var(--yarrow)] hover:shadow-lg transition-all duration-500"
                    >
                        <Search className="w-7 h-7 text-[var(--yarrow)] mx-auto mb-3" />
                        <span className="block text-[var(--forrest)] font-semibold text-sm">
                            {lang === 'es' ? 'Recursos' : 'Resources'}
                        </span>
                    </Link>
                    <Link
                        href="/donate"
                        className="group bg-white/80 backdrop-blur-sm border border-[var(--forrest)]/10 rounded-xl p-6 hover:border-[var(--yarrow)] hover:shadow-lg transition-all duration-500"
                    >
                        <Heart className="w-7 h-7 text-[var(--yarrow)] mx-auto mb-3" />
                        <span className="block text-[var(--forrest)] font-semibold text-sm">
                            {lang === 'es' ? 'Donar' : 'Donate'}
                        </span>
                    </Link>
                </motion.div>

                {/* Primary CTA with warm pulse */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <WarmPulseCTA href="/">
                        <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
                        <ArrowRight className="w-5 h-5" />
                    </WarmPulseCTA>
                </motion.div>

                {/* Contact line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-16 text-neutral-500 text-sm"
                >
                    {lang === 'es'
                        ? '¿Necesitas ayuda? '
                        : 'Need help? '
                    }
                    <a
                        href="mailto:hopehasnoborders@gmail.com"
                        className="text-[var(--forrest)] hover:text-[var(--yarrow)] transition-colors duration-300"
                    >
                        hopehasnoborders@gmail.com
                    </a>
                </motion.p>
            </div>
        </div>
    )
}

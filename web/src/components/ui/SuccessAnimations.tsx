'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
    id: number
    x: number
    y: number
    size: number
    color: string
    rotation: number
    velocityX: number
    velocityY: number
}

const COLORS = [
    '#C7D400', // Yarrow
    '#75A3D6', // Sky
    '#19381E', // Forrest
    '#FFF3EA', // Bone
    '#FFD700', // Gold
    '#FF6B6B', // Coral
]

interface ConfettiProps {
    trigger: boolean
    duration?: number
    particleCount?: number
}

export function Confetti({ trigger, duration = 3000, particleCount = 50 }: ConfettiProps) {
    const [particles, setParticles] = useState<Particle[]>([])
    const [isActive, setIsActive] = useState(false)

    const createParticles = useCallback(() => {
        const newParticles: Particle[] = []
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: -10,
                size: Math.random() * 10 + 5,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                rotation: Math.random() * 360,
                velocityX: (Math.random() - 0.5) * 4,
                velocityY: Math.random() * 3 + 2,
            })
        }
        return newParticles
    }, [particleCount])

    useEffect(() => {
        if (trigger && !isActive) {
            setIsActive(true)
            setParticles(createParticles())

            const timeout = setTimeout(() => {
                setIsActive(false)
                setParticles([])
            }, duration)

            return () => clearTimeout(timeout)
        }
    }, [trigger, isActive, createParticles, duration])

    if (!isActive) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{
                            x: `${particle.x}vw`,
                            y: -20,
                            rotate: particle.rotation,
                            opacity: 1,
                        }}
                        animate={{
                            y: '110vh',
                            x: `${particle.x + particle.velocityX * 20}vw`,
                            rotate: particle.rotation + 720,
                            opacity: [1, 1, 0],
                        }}
                        transition={{
                            duration: duration / 1000,
                            ease: 'linear',
                        }}
                        style={{
                            position: 'absolute',
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0',
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

// Success checkmark animation
export function SuccessCheckmark({ show }: { show: boolean }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto"
                >
                    <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Celebration burst animation
export function CelebrationBurst({ show }: { show: boolean }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 0] }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                x: Math.cos((i * Math.PI * 2) / 8) * 100,
                                y: Math.sin((i * Math.PI * 2) / 8) * 100,
                            }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{ backgroundColor: COLORS[i % COLORS.length] }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

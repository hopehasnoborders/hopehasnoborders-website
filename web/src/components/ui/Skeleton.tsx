'use client'

import { motion } from 'framer-motion'

// Basic skeleton pulse animation
const pulseAnimation = {
    animate: {
        opacity: [0.5, 1, 0.5],
    },
    transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
    }
}

// Generic skeleton block
export function Skeleton({ className = '' }: { className?: string }) {
    return (
        <motion.div
            className={`bg-neutral-200 rounded ${className}`}
            animate={pulseAnimation.animate}
            transition={pulseAnimation.transition}
        />
    )
}

// Hero section skeleton
export function HeroSkeleton() {
    return (
        <div className="min-h-[90vh] bg-[var(--forrest)] flex items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
                <Skeleton className="h-6 w-32 mx-auto mb-6 bg-white/20" />
                <Skeleton className="h-16 md:h-20 w-full max-w-2xl mx-auto mb-4 bg-white/20" />
                <Skeleton className="h-16 md:h-20 w-3/4 mx-auto mb-8 bg-white/20" />
                <Skeleton className="h-6 w-2/3 mx-auto mb-12 bg-white/20" />
                <div className="flex gap-4 justify-center">
                    <Skeleton className="h-14 w-48 bg-white/20" />
                    <Skeleton className="h-14 w-48 bg-white/20" />
                </div>
            </div>
        </div>
    )
}

// Card grid skeleton
export function CardGridSkeleton({ count = 3 }: { count?: number }) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-neutral-100">
                    <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            ))}
        </div>
    )
}

// Resource card skeleton
export function ResourceCardSkeleton() {
    return (
        <div className="bg-white rounded-xl p-6 border border-neutral-100">
            <div className="flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                <div className="flex-grow">
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
        </div>
    )
}

// Text block skeleton
export function TextBlockSkeleton() {
    return (
        <div className="space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </div>
    )
}

// Team member skeleton
export function TeamMemberSkeleton() {
    return (
        <div className="text-center">
            <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
            <Skeleton className="h-5 w-24 mx-auto mb-2" />
            <Skeleton className="h-4 w-20 mx-auto" />
        </div>
    )
}

// Impact metrics skeleton
export function ImpactMetricsSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="text-center p-6 bg-white/5 rounded-xl">
                    <Skeleton className="h-12 w-24 mx-auto mb-2 bg-white/20" />
                    <Skeleton className="h-4 w-20 mx-auto bg-white/20" />
                </div>
            ))}
        </div>
    )
}

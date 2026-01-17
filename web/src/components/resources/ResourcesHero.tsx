'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function ResourcesHero() {
    const { t } = useLanguage()

    return (
        <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-900">
            {/* Background Pattern/Image */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
                    alt="Community Support"
                    fill
                    className="object-cover grayscale"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900 z-10" />

            <div className="container mx-auto px-6 relative z-20 text-center">
                <span className="text-[var(--yarrow)] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                    {t({ en: "Resources & Guides", es: "Recursos y Guías" })}
                </span>

                <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight max-w-4xl mx-auto drop-shadow-xl">
                    {t({
                        en: "Resources to Support Families, Communities, and Advocates",
                        es: "Recursos para Apoyar a Familias, Comunidades y Defensores"
                    })}
                </h1>

                <p className="text-lg md:text-xl text-neutral-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    {t({
                        en: "A curated list of organizations and guides designed to assist immigrants navigating life in America.",
                        es: "Una lista seleccionada de organizaciones y guías diseñadas para ayudar a los inmigrantes a navegar la vida en América."
                    })}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => document.getElementById('intent-tiles')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[var(--yarrow)] text-black px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg hover:-translate-y-1"
                    >
                        {t({ en: "Browse Categories", es: "Explorar Categorías" })}
                    </button>
                    <button
                        onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg hover:-translate-y-1"
                    >
                        {t({ en: "Find Immediate Help", es: "Buscar Ayuda Inmediata" })}
                    </button>
                </div>
            </div>
        </div>
    )
}

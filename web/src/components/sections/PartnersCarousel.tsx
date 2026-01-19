'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { Handshake } from 'lucide-react'

interface Partner {
    name: string
    url: string
}

const PARTNERS: Partner[] = [
    { name: 'Rose Foundation', url: 'https://rosefdn.org/' },
    { name: 'Colorado Gives', url: 'https://www.coloradogives.org/' },
    { name: 'The Denver Foundation', url: 'https://denverfoundation.org/' },
    { name: 'Rooted with Roofs', url: 'https://www.rootedwithroofs.org/' },
    { name: 'Denver Friends Church', url: 'https://www.denverfriendschurch.com/' },
    { name: 'Holy Family Catholic Church', url: 'https://holyfamilydenver.com/' },
    { name: 'Seeds of Exchange', url: 'https://seedsofexchange.org/' },
    { name: 'I Support the Girls', url: 'https://isupportthegirls.org/' },
    { name: '211 Colorado', url: 'https://www.211colorado.org/' },
]

export function PartnersCarousel() {
    const { lang } = useLanguage()

    // Double the partners array for seamless infinite scroll
    const doubledPartners = [...PARTNERS, ...PARTNERS]

    return (
        <section className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 bg-[var(--forrest)] text-white px-4 py-2 rounded-full mb-6">
                        <Handshake className="w-4 h-4" />
                        <span className="font-bold tracking-wide text-xs uppercase">
                            {lang === 'es' ? 'Nuestros Socios' : 'Our Partners'}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
                        {lang === 'es' ? 'Trabajando Juntos' : 'Working Together'}
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                        {lang === 'es'
                            ? 'Estamos agradecidos por las organizaciones que apoyan nuestra misión.'
                            : "We're grateful for the organizations that support our mission."
                        }
                    </p>
                </motion.div>
            </div>

            {/* Infinite Scrolling Marquee */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div className="flex animate-marquee hover:[animation-play-state:paused]">
                    {doubledPartners.map((partner, i) => (
                        <a
                            key={`${partner.name}-${i}`}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 px-6 md:px-10 py-4 group"
                        >
                            <div className="bg-white border border-neutral-200 rounded-xl px-6 md:px-8 py-4 md:py-5 shadow-sm hover:shadow-lg hover:border-[var(--yarrow)] transition-all duration-300 hover:-translate-y-1">
                                <span className="text-lg md:text-xl font-serif text-neutral-800 group-hover:text-[var(--forrest)] transition-colors whitespace-nowrap">
                                    {partner.name}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Custom CSS for marquee animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    )
}

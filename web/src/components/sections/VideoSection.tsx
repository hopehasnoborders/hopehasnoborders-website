'use client'

import { useLanguage } from '@/lib/LanguageContext'

interface VideoSectionProps {
    video: {
        label: { en: string; es: string }
        title: { en: string; es: string }
        videoUrl: string
        donateText: { en: string; es: string }
    } | null
}

import { LiteYouTube } from '@/components/ui/LiteYouTube'

interface VideoSectionProps {
    video: {
        label: { en: string; es: string }
        title: { en: string; es: string }
        videoUrl: string
        donateText: { en: string; es: string }
    } | null
}

function getYoutubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
}

export function VideoSection({ video }: VideoSectionProps) {
    const { t } = useLanguage()

    if (!video) return null

    const videoId = getYoutubeId(video.videoUrl) || 'dQw4w9WgXcQ' // Fallback just in case

    return (
        <section className="py-32 bg-black text-white text-center border-t border-neutral-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <span className="text-[#FFB81C] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                    {t(video.label)}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight antialiased">
                    {t(video.title)}
                </h2>

                <div className="mb-12 rounded-sm shadow-2xl border border-neutral-800">
                    <LiteYouTube
                        embedId={videoId}
                        title="Hope Has No Borders Mission Video"
                    />
                </div>

                <button className="inline-block bg-[#FFB81C] text-black px-12 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                    {t(video.donateText)}
                </button>
            </div>
        </section>
    )
}

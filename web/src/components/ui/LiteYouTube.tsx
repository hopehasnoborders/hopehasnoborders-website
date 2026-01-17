'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface LiteYouTubeProps {
    embedId: string
    title: string
    thumbnailQual?: 'maxresdefault' | 'sddefault' | 'hqdefault'
}

export function LiteYouTube({ embedId, title, thumbnailQual = 'maxresdefault' }: LiteYouTubeProps) {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false)

    // Construct the thumbnail URL
    const posterUrl = `https://img.youtube.com/vi/${embedId}/${thumbnailQual}.jpg`

    // Construct the video URL with autoplay=1 so it plays immediately after click
    const videoUrl = `https://www.youtube.com/embed/${embedId}?autoplay=1`

    return (
        <div
            className="relative w-full aspect-video bg-neutral-900 overflow-hidden group cursor-pointer"
            onClick={() => setIsIframeLoaded(true)}
        >
            {!isIframeLoaded ? (
                <>
                    <Image
                        src={posterUrl}
                        alt={title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#FFB81C] group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/20">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                </>
            ) : (
                <iframe
                    className="w-full h-full"
                    src={videoUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    )
}

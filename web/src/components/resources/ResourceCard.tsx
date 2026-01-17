'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { ExternalLink, Phone, MapPin } from 'lucide-react'
import { Resource } from '@/data/resources'

export function ResourceCard({ resource }: { resource: Resource }) {
    const { t } = useLanguage()

    return (
        <div className="p-6 border border-neutral-100 rounded-sm hover:border-[var(--yarrow)] hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full">
            <h4 className="text-lg font-bold text-neutral-900 mb-3">{t(resource.title)}</h4>
            <p className="text-neutral-500 text-sm font-light mb-6 flex-1 leading-relaxed">
                {t(resource.description)}
            </p>

            <div className="space-y-3 mt-auto">
                {resource.phone && (
                    <div className="flex items-center gap-2 text-neutral-600 text-sm">
                        <Phone size={14} className="text-[var(--yarrow)]" />
                        <a href={`tel:${resource.phone}`} className="hover:underline">{resource.phone}</a>
                    </div>
                )}
                {resource.address && (
                    <div className="flex items-center gap-2 text-neutral-600 text-sm">
                        <MapPin size={14} className="text-[var(--yarrow)]" />
                        <span>{resource.address}</span>
                    </div>
                )}

                {resource.link && (
                    <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--yarrow)] hover:text-black transition-colors mt-2"
                    >
                        {t(resource.action || { en: "Visit Resource", es: "Visitar Recurso" })} <ExternalLink size={12} />
                    </a>
                )}

                {resource.phone && !resource.link && resource.action && (
                    <a
                        href={`tel:${resource.phone}`}
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--yarrow)] hover:text-black transition-colors mt-2"
                    >
                        {t(resource.action)} <Phone size={12} />
                    </a>
                )}
            </div>
        </div>
    )
}

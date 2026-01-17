'use client'

import { Search } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

interface ResourceSearchProps {
    searchQuery: string
    setSearchQuery: (q: string) => void
}

export function ResourceSearch({ searchQuery, setSearchQuery }: ResourceSearchProps) {
    const { t } = useLanguage()

    return (
        <div id="search" className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                    type="text"
                    placeholder={t({ en: "Search for resources, services, or organizations...", es: "Buscar recursos, servicios u organizaciones..." })}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md focus:shadow-lg focus:border-[var(--yarrow)] focus:outline-none transition-all duration-300 placeholder:font-light"
                />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs text-neutral-500 font-light">
                <span>{t({ en: "Popular:", es: "Popular:" })}</span>
                <button onClick={() => setSearchQuery('Legal')} className="hover:text-[var(--yarrow)] hover:underline">Legal</button>
                <button onClick={() => setSearchQuery('Food')} className="hover:text-[var(--yarrow)] hover:underline">{t({ en: "Food", es: "Comida" })}</button>
                <button onClick={() => setSearchQuery('Housing')} className="hover:text-[var(--yarrow)] hover:underline">{t({ en: "Housing", es: "Vivienda" })}</button>
            </div>
        </div>
    )
}

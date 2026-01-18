'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
    lang: Language
    setLang: (lang: Language) => void
    t: (obj: { en?: string; es?: string } | undefined) => string
    bannerDismissed: boolean
    dismissBanner: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>('en')
    const [bannerDismissed, setBannerDismissed] = useState(true) // Start true to prevent flash

    useEffect(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('hhnb-lang') as Language
        if (saved === 'en' || saved === 'es') {
            setLangState(saved)
        }

        // Check if banner was dismissed
        const bannerState = localStorage.getItem('hhnb-lang-banner-dismissed')
        setBannerDismissed(bannerState === 'true')
    }, [])

    const setLang = (newLang: Language) => {
        setLangState(newLang)
        localStorage.setItem('hhnb-lang', newLang)
    }

    const dismissBanner = () => {
        setBannerDismissed(true)
        localStorage.setItem('hhnb-lang-banner-dismissed', 'true')
    }

    // Translation helper - gets the right language or falls back
    const t = (obj: { en?: string; es?: string } | undefined): string => {
        if (!obj) return ''
        return obj[lang] || obj.en || ''
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, bannerDismissed, dismissBanner }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}


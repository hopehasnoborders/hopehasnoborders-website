'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { Globe } from 'lucide-react'

export function LanguageBanner() {
    const { setLang, bannerDismissed, dismissBanner } = useLanguage()

    // Don't show if language was already selected
    if (bannerDismissed) {
        return null
    }

    const handleSelectLanguage = (selectedLang: 'en' | 'es') => {
        setLang(selectedLang)
        dismissBanner()
    }

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-title"
        >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-md" />

            {/* Content card */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10 text-center">
                {/* Globe icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C7D400] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                </div>

                {/* Title - both languages */}
                <h2
                    id="language-title"
                    className="text-xl md:text-2xl font-bold text-neutral-900 mb-2"
                >
                    Choose Your Language
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 mb-8">
                    Elija su idioma
                </p>

                {/* Language buttons */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => handleSelectLanguage('en')}
                        className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl text-lg md:text-xl font-bold min-h-[56px] hover:bg-neutral-800 active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-[#C7D400]"
                        aria-label="Continue in English"
                    >
                        🇺🇸 English
                    </button>

                    <button
                        onClick={() => handleSelectLanguage('es')}
                        className="w-full bg-[#C7D400] text-neutral-900 py-4 px-6 rounded-xl text-lg md:text-xl font-bold min-h-[56px] hover:bg-[#d8e600] active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-neutral-900"
                        aria-label="Continuar en Español"
                    >
                        🇲🇽 Español
                    </button>
                </div>

                {/* Accessibility note */}
                <p className="text-xs text-neutral-400 mt-6">
                    You can change this later in the menu
                    <span className="mx-2">•</span>
                    Puede cambiar esto más tarde
                </p>
            </div>
        </div>
    )
}

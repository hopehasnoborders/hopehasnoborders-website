'use client'

import { useLanguage } from '@/lib/LanguageContext'

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-neutral-900 text-white py-20 border-t border-neutral-800">
            <div className="container mx-auto px-6 text-center">
                <div className="font-serif font-bold text-3xl tracking-widest mb-8">HHNB</div>
                <div className="flex justify-center gap-8 mb-12">
                    <a
                        href="https://www.instagram.com/hopehasnoborders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.facebook.com/hopehasnobordersdenver"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
                    >
                        Facebook
                    </a>
                    <a
                        href="mailto:hopehasnoborders@gmail.com"
                        className="text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
                    >
                        Email
                    </a>
                </div>
                <p className="text-neutral-600 text-xs tracking-wide">
                    © 2024 Hope Has No Borders. {t({ en: 'All rights reserved.', es: 'Todos los derechos reservados.' })}
                </p>
            </div>
        </footer>
    )
}

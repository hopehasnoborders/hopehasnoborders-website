'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { Users, Heart, Mail } from 'lucide-react'
import Link from 'next/link'

interface TeamMember {
    name: string
    role: { en: string; es: string }
    bio: { en: string; es: string }
    image: string
    category: 'leadership' | 'board' | 'contractor'
    serviceLength?: string
}

const teamMembers: TeamMember[] = [
    // Leadership
    {
        name: 'Jenifer Kettering',
        role: { en: 'Executive Director & Founder, Board Member', es: 'Directora Ejecutiva y Fundadora, Miembro de la Junta' },
        bio: {
            en: 'Jenifer Kettering brings more than 20 years of experience serving individuals and families in need through roles in mental health, foster care, therapeutic recreation, crisis counseling, and education. Her work has always centered on helping people find stability, dignity, and connection during life\'s most challenging times.',
            es: 'Jenifer Kettering aporta más de 20 años de experiencia sirviendo a individuos y familias necesitadas a través de roles en salud mental, cuidado de crianza, recreación terapéutica, consejería de crisis y educación.'
        },
        image: '/img/jenifer-kettering.jpg',
        category: 'leadership'
    },
    {
        name: 'Andrea Ryall',
        role: { en: 'Executive Director & Founder, Board Member', es: 'Directora Ejecutiva y Fundadora, Miembro de la Junta' },
        bio: {
            en: 'Andrea Ryall is a mother of three and a passionate community builder based in Denver, Colorado. Inspired by the belief that everyone deserves dignity, meaningful work, and the ability to provide for their family, Andrea founded Hope Has No Borders to bring humanitarian relief and community support to people moving from crisis to hope.',
            es: 'Andrea Ryall es madre de tres hijos y una apasionada constructora de comunidades con sede en Denver, Colorado. Inspirada por la creencia de que todos merecen dignidad, trabajo significativo y la capacidad de proveer para su familia.'
        },
        image: '/img/andrea-ryall.png',
        category: 'leadership'
    },
    // Board of Directors
    {
        name: 'Kasey Fox',
        role: { en: 'Board Member', es: 'Miembro de la Junta' },
        bio: {
            en: 'Kasey Fox is the Senior Director of 211 and Disaster Response at Mile High United Way, where she leads statewide efforts to strengthen community resilience. A former U.S. Peace Corps volunteer in Panama\'s Darién Gap, she brings more than a decade of experience in community development, disaster response, and volunteer management.',
            es: 'Kasey Fox es la Directora Senior de 211 y Respuesta a Desastres en Mile High United Way, donde lidera esfuerzos estatales para fortalecer la resiliencia comunitaria.'
        },
        image: '/img/webportrait_kasey.png',
        category: 'board'
    },
    {
        name: 'Matt Tebo',
        role: { en: 'Board Member', es: 'Miembro de la Junta' },
        bio: {
            en: 'Matt Tebo is a product and program development professional with more than nine years of nonprofit experience in workforce development and social enterprise. He has launched innovative, revenue-positive programs for organizations including the Denver Metro Chamber Leadership Foundation and Impact on Education.',
            es: 'Matt Tebo es un profesional de desarrollo de productos y programas con más de nueve años de experiencia sin fines de lucro en desarrollo de fuerza laboral y empresa social.'
        },
        image: '/img/webportrait_matt.png',
        category: 'board'
    },
    {
        name: 'Emma Hudson',
        role: { en: 'Board Member', es: 'Miembro de la Junta' },
        bio: {
            en: 'Emma Hudson brings more than a decade of experience in lobbying, government relations, policy analysis, and advocacy with a focus on state budgets and vulnerable populations. A skilled communicator and public speaker, she specializes in politics, interpersonal communication, and conflict resolution.',
            es: 'Emma Hudson aporta más de una década de experiencia en cabildeo, relaciones gubernamentales, análisis de políticas y defensa con enfoque en presupuestos estatales y poblaciones vulnerables.'
        },
        image: '/img/webportrait_emma.png',
        category: 'board'
    },
    {
        name: 'Keith Reeser',
        role: { en: 'Board Member', es: 'Miembro de la Junta' },
        bio: {
            en: 'Keith Reeser is a husband, father, and pastor who is passionate about extending kindness, grace, and compassion to everyone he meets. Serving with Hope Has No Borders reminded him that while one person may not help thousands, each act of care has profound value.',
            es: 'Keith Reeser es esposo, padre y pastor apasionado por extender bondad, gracia y compasión a todos los que conoce.'
        },
        image: '/img/webportrait_keith.png',
        category: 'board'
    },
    {
        name: 'Heather Carlson',
        role: { en: 'Board Member', es: 'Miembro de la Junta' },
        bio: {
            en: 'Heather Carlson is a seasoned professional with a 20-year career at Albertsons Companies and a dedicated advocate for community support. She has served for many years on the Denver Friends Church leadership team, contributing to children\'s programs, outreach, and immigrant integration.',
            es: 'Heather Carlson es una profesional experimentada con una carrera de 20 años en Albertsons Companies y una dedicada defensora del apoyo comunitario.'
        },
        image: '/img/webportrait_heather.png',
        category: 'board'
    },
    // Contractors
    {
        name: 'Jill Roth',
        role: { en: 'Bilingual Contractor', es: 'Contratista Bilingüe' },
        bio: {
            en: 'Jill Roth has over a decade of experience in the nonprofit sector, with a strong focus on community engagement and cross-cultural collaboration. Since 2024, Jill has supported immigrant and refugee communities in the Denver area.',
            es: 'Jill Roth tiene más de una década de experiencia en el sector sin fines de lucro, con un fuerte enfoque en el compromiso comunitario y la colaboración intercultural.'
        },
        image: '/img/webportrait_jill.png',
        category: 'contractor',
        serviceLength: 'Since September 2024'
    },
    {
        name: 'Cassandra "Cassi" Coleman',
        role: { en: 'Bilingual Contractor', es: 'Contratista Bilingüe' },
        bio: {
            en: 'Cassandra "Cassi" Coleman is a licensed practical nurse with more than 16 years of experience in healthcare and a deep passion for serving immigrant and asylum-seeking communities. Bilingual in Spanish and English and certified as an American Red Cross trainer.',
            es: 'Cassandra "Cassi" Coleman es una enfermera práctica licenciada con más de 16 años de experiencia en atención médica y una profunda pasión por servir a las comunidades inmigrantes y solicitantes de asilo.'
        },
        image: '/img/webportrait_cassandra.png',
        category: 'contractor',
        serviceLength: 'Since June 2024'
    },
    {
        name: 'Amanda Burr',
        role: { en: 'Bilingual Contractor', es: 'Contratista Bilingüe' },
        bio: {
            en: 'Amanda Burr is an immigration advocate dedicated to empowering immigrant communities through mentorship, language access, and navigation support. After a 25-year career in marketing, she now channels her skills and empathy into helping immigrants thrive.',
            es: 'Amanda Burr es una defensora de la inmigración dedicada a empoderar a las comunidades inmigrantes a través de mentoría, acceso al idioma y apoyo de navegación.'
        },
        image: '/img/webportrait_amanda.png',
        category: 'contractor',
        serviceLength: 'Since June 2024'
    },
]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
    const { t } = useLanguage()
    const [expanded, setExpanded] = useState(false)
    const [isOverflowing, setIsOverflowing] = useState(false)
    const bioRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const checkOverflow = () => {
            if (bioRef.current) {
                setIsOverflowing(bioRef.current.scrollHeight > bioRef.current.clientHeight)
            }
        }
        checkOverflow()
        window.addEventListener('resize', checkOverflow)
        return () => window.removeEventListener('resize', checkOverflow)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Photo - slightly smaller on mobile */}
            <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Content - better mobile padding */}
            <div className="p-5 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-[#FFB81C] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                    {t(member.role)}
                </p>
                <p
                    ref={bioRef}
                    className={`text-neutral-600 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}
                >
                    {t(member.bio)}
                </p>
                {(isOverflowing || expanded) && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-[#FFB81C] hover:text-[#E5A519] text-sm font-semibold mt-2 py-1 transition-colors touch-manipulation"
                    >
                        {expanded
                            ? t({ en: 'Show less', es: 'Ver menos' })
                            : t({ en: 'Read more', es: 'Leer más' })
                        }
                    </button>
                )}
                {member.serviceLength && (
                    <p className="text-neutral-400 text-xs mt-3 italic">{member.serviceLength}</p>
                )}
            </div>
        </motion.div>
    )
}

export default function TeamPage() {
    const { t } = useLanguage()

    const leadership = teamMembers.filter(m => m.category === 'leadership')
    const board = teamMembers.filter(m => m.category === 'board')
    const contractors = teamMembers.filter(m => m.category === 'contractor')

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="bg-neutral-900 pt-32 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Users className="w-12 h-12 text-[#FFB81C] mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                            {t({ en: 'Who We Are', es: 'Quiénes Somos' })}
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                            {t({
                                en: 'Meet the passionate individuals dedicated to bridging the gap from crisis to stability.',
                                es: 'Conoce a las personas apasionadas dedicadas a cerrar la brecha de la crisis a la estabilidad.'
                            })}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-[#FFB81C] font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            {t({ en: 'Founders', es: 'Fundadoras' })}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                            {t({ en: 'Leadership', es: 'Liderazgo' })}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {leadership.map((member, index) => (
                            <TeamCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Board Section */}
            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-[#FFB81C] font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            {t({ en: 'Governance', es: 'Gobernanza' })}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                            {t({ en: 'Board of Directors', es: 'Junta Directiva' })}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {board.map((member, index) => (
                            <TeamCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contractors Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-[#FFB81C] font-bold tracking-[0.3em] text-xs uppercase mb-4">
                            {t({ en: 'Our Team', es: 'Nuestro Equipo' })}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">
                            {t({ en: 'Contractors', es: 'Contratistas' })}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {contractors.map((member, index) => (
                            <TeamCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-neutral-50 border-t border-neutral-200">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <Heart className="w-8 h-8 text-[#FFB81C] mx-auto mb-4" />
                            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6">
                                {t({ en: 'Our Story', es: 'Nuestra Historia' })}
                            </h2>
                        </div>
                        <div className="prose prose-lg mx-auto text-neutral-600 font-light leading-relaxed space-y-6">
                            <p>
                                {t({
                                    en: "Hope Has No Borders blossomed from Denver's grassroots movement, ignited by compassionate moms and neighbors. Our journey sparked from a heartfelt commitment to addressing a humanitarian crisis as thousands of migrants were bussed into our city. Faced with urgent needs, like housing for children and individuals living on our streets, feeding hungry people, and ensuring newcomers arriving in sandals had winter clothing, we swiftly mobilized.",
                                    es: "Hope Has No Borders surgió del movimiento popular de Denver, iniciado por madres y vecinos compasivos. Nuestro viaje comenzó con un compromiso sincero de abordar una crisis humanitaria mientras miles de migrantes eran transportados en autobús a nuestra ciudad. Ante necesidades urgentes, como vivienda para niños y personas que viven en nuestras calles, alimentación para personas hambrientas y asegurar que los recién llegados que llegaban en sandalias tuvieran ropa de invierno, nos movilizamos rápidamente."
                                })}
                            </p>
                            <p>
                                {t({
                                    en: "Within four days in early November 2023, 1000 moms and neighbors were mobilized, and in 12 weeks, our grassroots movement grew to over 6000 in the metro area. Today, we stand strong with over 8k (and counting) committed individuals dedicated to meeting needs and bringing hope to our city. As our grassroots movement expanded, we recognized the crucial need for stable housing and employment.",
                                    es: "En cuatro días a principios de noviembre de 2023, se movilizaron 1000 madres y vecinos, y en 12 semanas, nuestro movimiento de base creció a más de 6000 en el área metropolitana. Hoy, nos mantenemos firmes con más de 8k (y contando) personas comprometidas dedicadas a satisfacer las necesidades y traer esperanza a nuestra ciudad. A medida que nuestro movimiento de base se expandió, reconocimos la necesidad crucial de vivienda estable y empleo."
                                })}
                            </p>
                            <p>
                                {t({
                                    en: "Witnessing the generosity of hundreds of volunteers opening their hearts and homes, we structured our official Host Home Program. This initiative connects community members with spare space to migrants in need of transitional housing. Additionally, we heard the resounding desire for work, not handouts. Migrants volunteered to help one another in a vast distribution closet formed by our grassroots movement. In a similar fashion our community service program is designed to empower newcomers to engage in various volunteer service projects, showcasing their value and work ethic while providing opportunities for skill development, reference-building, and financial support through gifted donations.",
                                    es: "Al presenciar la generosidad de cientos de voluntarios que abrieron sus corazones y hogares, estructuramos nuestro Programa oficial de Hogares de Acogida. Esta iniciativa conecta a los miembros de la comunidad con espacio libre con migrantes que necesitan vivienda de transición. Además, escuchamos el deseo rotundo de trabajar, no de recibir limosnas. Los migrantes se ofrecieron como voluntarios para ayudarse mutuamente en un vasto armario de distribución formado por nuestro movimiento de base. De manera similar, nuestro programa de servicio comunitario está diseñado para empoderar a los recién llegados para que participen en varios proyectos de servicio voluntario, mostrando su valor y ética de trabajo mientras brindan oportunidades para el desarrollo de habilidades, la creación de referencias y el apoyo financiero a través de donaciones."
                                })}
                            </p>
                            <p>
                                {t({
                                    en: "Anchored in our grassroots origins in Denver, our aim is to nurture a supportive environment fostering integration, cultural connections, and meaningful contributions to our vibrant community. Together, we are replacing crisis with HOPE.",
                                    es: "Anclados en nuestros orígenes de base en Denver, nuestro objetivo es fomentar un entorno de apoyo que fomente la integración, las conexiones culturales y las contribuciones significativas a nuestra vibrante comunidad. Juntos, estamos reemplazando la crisis con ESPERANZA."
                                })}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Press Section */}
            <section className="py-20 bg-white border-t border-neutral-200">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-12 text-center">
                            {t({ en: 'In The News', es: 'En Las Noticias' })}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <a href="https://www.9news.com/article/news/politics/clinic-immigration-challenges-venezuelans/73-e8c5b57a-9608-4b78-86bf-7fdfc09266fa" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">9 News</h3>
                                    <p className="text-neutral-600 font-serif">Clinic offers hope amid complex immigration challenges for Venezuelan families</p>
                                </div>
                            </a>

                            <a href="https://www.denver7.com/news/local-news/new-denver-program-aims-to-help-match-host-homes-with-newly-arrived-immigrant-families" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">Denver 7</h3>
                                    <p className="text-neutral-600 font-serif">New Denver program aims to help match host homes with newly arrived immigrant families</p>
                                </div>
                            </a>

                            <a href="https://www.nytimes.com/2024/02/12/us/denver-colorado-migrants.html" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">The New York Times</h3>
                                    <p className="text-neutral-600 font-serif">Big Burden of Migrant Influx Strains Denver</p>
                                </div>
                            </a>

                            <a href="https://denverite.com/2024/04/28/host-a-new-immigrant-family-denver-mile-high-united-way/" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">Denverite</h3>
                                    <p className="text-neutral-600 font-serif">Want to host a new immigrant family? There’s an official program for that</p>
                                </div>
                            </a>

                            <a href="https://www.axios.com/local/denver/2024/05/08/immigrant-housing-211-program-new-shelter" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">AXIOS Denver</h3>
                                    <p className="text-neutral-600 font-serif">Denver wants families to host migrants through 211 program</p>
                                </div>
                            </a>

                            <a href="https://www.9news.com/article/news/local/next/next-with-kyle-clark/400-migrant-families-housed-highlands-moms-and-neighbors/73-9c6c46a5-1ed8-413f-a270-31d7589801eb" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">9 News</h3>
                                    <p className="text-neutral-600 font-serif">Over 400 migrant families now being housed by Highlands Moms and Neighbors</p>
                                </div>
                            </a>

                            <a href="https://denverite.com/2024/01/09/denver-migrants-mutual-aid-moms-helping/" target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border-l-4 border-[var(--yarrow)] pl-6 py-2 group-hover:bg-neutral-50 transition-colors">
                                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[var(--forrest)] transition-colors mb-2">Denverite</h3>
                                    <p className="text-neutral-600 font-serif">How a Facebook community of Denver moms are meeting the needs of new migrant arrivals</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tax Info Section */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-neutral-600 mb-2">
                        <strong>{t({ en: 'Tax ID / EIN:', es: 'ID Fiscal / EIN:' })}</strong> 99-1897287
                    </p>
                    <Link
                        href="https://drive.google.com/file/d/1cMcmtmKotyWMHRVMY4WjgeywceAvGJVX/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFB81C] hover:underline font-semibold"
                    >
                        {t({ en: 'View 990 Tax Form (2024)', es: 'Ver Formulario 990 (2024)' })}
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-neutral-900">
                <div className="container mx-auto px-6 text-center">
                    <Heart className="w-10 h-10 text-[#FFB81C] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        {t({ en: 'Join Our Mission', es: 'Únete a Nuestra Misión' })}
                    </h2>
                    <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
                        {t({
                            en: 'We\'re always looking for passionate volunteers and supporters to help us make a difference.',
                            es: 'Siempre buscamos voluntarios y colaboradores apasionados para ayudarnos a hacer la diferencia.'
                        })}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/volunteer"
                            className="bg-white hover:bg-[#FFB81C] text-neutral-900 hover:text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors"
                        >
                            {t({ en: 'Volunteer', es: 'Voluntariado' })}
                        </Link>
                        <Link
                            href="mailto:hopehasnoborders@gmail.com"
                            className="border border-white/30 text-white hover:bg-white hover:text-neutral-900 px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            {t({ en: 'Contact Us', es: 'Contáctanos' })}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

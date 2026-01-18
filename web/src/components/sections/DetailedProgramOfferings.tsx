'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { ArrowUpRight, Heart, Home, Users, BookOpen } from 'lucide-react'

// Scraped data for the programs
const programs = [
    {
        id: 'crisis-fund',
        title: {
            en: 'Crisis to HOPE Fund',
            es: 'Fondo de Crisis a ESPERANZA'
        },
        subtitle: {
            en: 'Emergency Stabilization Fund',
            es: 'Fondo de Estabilización de Emergencia'
        },
        icon: Heart,
        description: {
            en: 'HHNB developed the Crisis to HOPE Fund to provide one-time, immediate, and urgent financial assistance to individuals facing critical needs that cannot be met by other organizations or social connections. The focus of these funds is to allow a flexible and immediate response to individuals in order for them to maintain stability in essential areas of life such as work, shelter, medical care, and transportation. If applicable, up to 6 hours of dedicated case management support will be approved along with award. The CHF program is modeled after the incredible impact of local grassroots strategies- which proved that individualized, responsive, and preventative work can infuse HOPE in times of crisis.',
            es: 'HHNB desarrolló el Fondo de Crisis a ESPERANZA para brindar asistencia financiera única, inmediata y urgente a personas que enfrentan necesidades críticas. El enfoque es permitir una respuesta flexible e inmediata para mantener la estabilidad en áreas esenciales como trabajo, vivienda, atención médica y transporte.'
        },
        links: [
            {
                text: { en: 'Apply for CHF Help Here', es: 'Solicitar Ayuda CHF Aquí' },
                url: 'https://forms.gle/XfwWMMsSF6j3F8wr5',
                primary: true
            }
        ]
    },
    {
        id: 'pathways',
        title: {
            en: 'Pathways to HOPE Sessions',
            es: 'Sesiones de Caminos a la ESPERANZA'
        },
        subtitle: {
            en: 'Pro Se Asylum, Court Letters, EAD Support & Family Protection Plans',
            es: 'Asilo Pro Se, Cartas Judiciales, Apoyo EAD y Planes de Protección Familiar'
        },
        icon: BookOpen,
        description: {
            en: 'HHNB provides ongoing virtual and in-person (Denver area) pro se asylum support for Spanish-speakers across the United States. While we do not provide legal advice, we assist individuals in completing their pro se asylum application at no cost. We believe no one should be denied the opportunity to file for asylum due to poverty or limited access to formal legal aid. We offer a virtual-only work permit application service for individuals who have 150 days or more on an active asylum clock, along with translation support for court letters, & Family Preparedness Plans.',
            es: 'HHNB brinda apoyo de asilo pro se virtual y en persona (área de Denver) para hispanohablantes en todo Estados Unidos. Ayudamos a completar solicitudes de asilo pro se sin costo. También ofrecemos servicio de solicitud de permiso de trabajo virtual y traducción para cartas judiciales.'
        },
        links: [
            {
                text: { en: 'Work Permit Help (EAD)', es: 'Ayuda Permiso de Trabajo (EAD)' },
                url: 'https://forms.gle/e9WAUpuS9num9uoF8',
                primary: true
            },
            {
                text: { en: 'Court Letters & Asylum Fee Payments', es: 'Cartas Judiciales y Pagos' },
                url: 'https://forms.gle/kmb5kHgfFxyyLprz6',
                primary: false
            },
            {
                text: { en: 'Pro Se Asylum Support', es: 'Apoyo de Asilo Pro Se' },
                url: 'https://forms.gle/3Y4gFuCpWBEsteAu6',
                primary: false
            },
            {
                text: { en: 'Family Protection Plan', es: 'Plan de Protección Familiar' },
                url: 'https://forms.gle/67VwXwszkd8pJ9qh9',
                primary: false
            },
            {
                text: { en: 'Asylum Evidence Translation', es: 'Traducción de Evidencia de Asilo' },
                url: 'https://forms.gle/oZfDCb3VDMBiec7a7',
                primary: false
            }
        ]
    },
    {
        id: 'community',
        title: {
            en: 'HOPE Community Services',
            es: 'Servicios Comunitarios HOPE'
        },
        subtitle: {
            en: 'Community Service Partnerships',
            es: 'Asociaciones de Servicio Comunitario'
        },
        icon: Users,
        description: {
            en: 'HHNB is dedicated to empowering & integrating immigrants in Colorado through community service projects. This program not only provides donation-based gifts as a token of appreciation for volunteerism, but also offers valuable real-life experience, education around cultural expectations, and enhances resumes and work readiness. By fostering local partnerships, we connect asylum-seekers with renowned organizations like WeeCycle and The Jeffco Action Center. Participants also gain workforce readiness through skill-based certifications and workshops.',
            es: 'HHNB se dedica a empoderar e integrar a los inmigrantes en Colorado a través de proyectos de servicio comunitario. Este programa ofrece experiencia valiosa, educación sobre expectativas culturales y mejora la preparación laboral mediante asociaciones locales.'
        },
        links: [
            {
                text: { en: 'Join a Community Service Team', es: 'Unirse a un Equipo de Servicio' },
                url: 'https://forms.gle/TVKdRoyfpawaPr298',
                primary: true
            },
            {
                text: { en: 'CPR & First Aid Workshop waitlist', es: 'Lista de espera Taller CPR' },
                url: 'https://forms.gle/k6peoBGvNJ2DwXNd8',
                primary: false
            },
            {
                text: { en: 'Professional Housecleaning Workshop', es: 'Taller de Limpieza Profesional' },
                url: 'https://forms.gle/nbkRvEGhnwpAmCm97',
                primary: false
            }
        ]
    },
    {
        id: 'host-homes',
        title: {
            en: 'HOPE Host Home Program',
            es: 'Programa de Hogares de Acogida HOPE'
        },
        subtitle: {
            en: 'Community Transitional Housing',
            es: 'Vivienda de Transición Comunitaria'
        },
        icon: Home,
        description: {
            en: 'The HOPE Host Home program connects compassionate community members who have extra space with individuals or families in need of transitional housing for up to 90 days. Providing hosts with a stipend for financial support & dedicated case management for guests, the program ensures a safe and supportive environment for asylum seekers as they navigate life in America. Cultivating cultural connections, providing wrap-around services and resource navigation, this program facilitates integration.',
            es: 'El programa HOPE Host Home conecta a miembros de la comunidad con espacio extra con personas que necesitan vivienda de transición por hasta 90 días. Brinda un estipendio a los anfitriones y gestión de casos dedicada para los huéspedes.'
        },
        links: [
            {
                text: { en: 'FAQs', es: 'Preguntas Frecuentes' },
                url: 'https://www.hopehasnoborders.org/hosthomes', // Keeping original link as it might be an external page or PDF
                primary: false
            },
            {
                text: { en: 'Offer your space as a HOST', es: 'Ofrece tu espacio como ANFITRIÓN' },
                url: 'https://forms.gle/2NnFicQdecde4fkQA',
                primary: true
            }
        ]
    }
]

export default function DetailedProgramOfferings() {
    const { t } = useLanguage()

    return (
        <section className="py-20 bg-neutral-50" id="detailed-programs">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6"
                    >
                        {t({ en: 'Our Programs', es: 'Nuestros Programas' })}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '100px' }}
                        viewport={{ once: true }}
                        className="h-1 bg-[#FFB81C] mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col h-full bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#FFB81C]"
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <div className="bg-[#FFF5D9] w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#FFB81C]">
                                    <program.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-serif text-neutral-900 mb-2 leading-tight">
                                    {t(program.title)}
                                </h3>
                                <p className="text-[#B38B3F] text-sm font-medium uppercase tracking-wider">
                                    {t(program.subtitle)}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="prose prose-sm text-neutral-600 mb-8 flex-grow">
                                <p className="leading-relaxed text-sm">
                                    {t(program.description)}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="space-y-3 mt-auto">
                                {program.links.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-all rounded-sm group
                                            ${link.primary
                                                ? 'bg-neutral-900 text-white hover:bg-[#FFB81C] hover:text-white'
                                                : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'}
                                        `}
                                    >
                                        <span className="truncate mr-2">{t(link.text)}</span>
                                        <ArrowUpRight className={`w-4 h-4 flex-shrink-0 ${link.primary ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-900'}`} />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

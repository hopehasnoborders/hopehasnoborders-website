export interface Resource {
    title: { en: string; es: string }
    description: { en: string; es: string }
    link?: string
    phone?: string
    address?: string
    tags?: string[]
    action?: { en: string; es: string }
}

export interface ResourceCategory {
    id: string
    title: { en: string; es: string }
    icon: 'home' | 'scale' | 'users' | 'heart' | 'book' | 'briefcase' | 'car' | 'med' | 'brain' | 'grad'
    resources: Resource[]
}

export const resourceCategories: ResourceCategory[] = [
    {
        id: 'general',
        title: { en: 'General Needs', es: 'Necesidades Generales' },
        icon: 'heart',
        resources: [
            {
                title: { en: "Mile High United Way's 211", es: "211 de Mile High United Way" },
                description: {
                    en: "A FREE, multilingual, and confidential call center connecting individuals to community resources. Available Monday to Friday, 8 a.m. to 5 p.m.",
                    es: "Centro de llamadas GRATIS, multilingüe y confidencial que conecta a las personas con recursos comunitarios. Disponible de lunes a viernes, de 8 a.m. a 5 p.m."
                },
                phone: "2-1-1",
                action: { en: "Call 2-1-1", es: "Llame al 2-1-1" },
                tags: ["help", "support", "emergency", "crisis", "connect", "phone"]
            }
        ]
    },
    {
        id: 'food',
        title: { en: 'Food & Essentials', es: 'Alimentos y Esenciales' },
        icon: 'home',
        resources: [
            {
                title: { en: "DRMAC Transit to Table", es: "DRMAC Del tránsito a la mesa" },
                description: {
                    en: "Delivers food from local food banks to eligable applicants.",
                    es: "Entrega alimentos de bancos de alimentos locales a solicitantes elegibles."
                },
                link: "https://www.drmac-co.org",
                action: { en: "Apply Here", es: "Solicita aquí" },
                tags: ["hunger", "delivery", "groceries", "pantry", "eat"]
            },
            {
                title: { en: "The Action Center", es: "The Action Center" },
                description: {
                    en: "Provides free food and clothing; appointments are preferred. Utility payment assistance is available for Jefferson County residents only.",
                    es: "Proporciona alimentos y ropa gratis; se prefieren las citas. La asistencia para el pago de servicios públicos está disponible solo para residentes del condado de Jefferson."
                },
                link: "https://theactioncenter.org",
                action: { en: "Visit Website", es: "Visitar Sitio Web" },
                tags: ["clothing", "utilities", "bills", "rent", "clothes"]
            },
            {
                title: { en: "Foodfinder.us", es: "Foodfinder.us" },
                description: {
                    en: "Search by zip code for local free food distribution centers. Website and app act as food pantry locators.",
                    es: "Busque por código postal centros de distribución de alimentos gratuitos en su área. El sitio web y la aplicación actúan como localizadores de despensas."
                },
                link: "https://foodfinder.us",
                action: { en: "Find Food", es: "Buscar Comida" },
                tags: ["pantry", "map", "locator", "groceries", "eat"]
            },
            {
                title: { en: "Weecycle", es: "Weecycle" },
                description: {
                    en: "Distributes diapers, wipes, formula, and other essentials.",
                    es: "Distribuye pañales, toallitas, fórmula y otros artículos esenciales."
                },
                link: "https://weecycle.org",
                action: { en: "Check Calendar", es: "Ver Calendario" },
                tags: ["baby", "infant", "toddler", "diapers", "formula"]
            }
        ]
    },
    {
        id: 'legal',
        title: { en: 'Legal', es: 'Legal' },
        icon: 'scale',
        resources: [
            {
                title: { en: "ASAP: Resources for Asylum Seekers", es: "ASAP: Recursos para Solicitantes de Asilo" },
                description: {
                    en: "The best online tool we've found for asylum seekers.",
                    es: "La mejor herramienta en línea que hemos encontrado para los solicitantes de asilo."
                },
                link: "https://help.asylumadvocacy.org",
                action: { en: "Visit ASAP", es: "Visitar ASAP" },
                tags: ["lawyer", "defense", "immigration", "court", "judge"]
            },
            {
                title: { en: "Colorado Legal Services", es: "Colorado Legal Services" },
                description: {
                    en: "Free legal services for low income individuals on evictions, benefits, ID documents, & family law.",
                    es: "Servicios legales gratuitos para personas de bajos ingresos en desalojos, beneficios, documentos de identidad y derecho familiar."
                },
                link: "https://www.coloradolegalservices.org",
                action: { en: "Get Help", es: "Obtener Ayuda" },
                tags: ["eviction", "family", "documents", "id", "law"]
            },
            {
                title: { en: "Rooted With Roofs", es: "Rooted With Roofs" },
                description: {
                    en: "Walk-in support for TPS applications, EAD, resume building, and general questions. Sundays at 2:30 PM.",
                    es: "Asistencia sin cita previa para aplicaciones de TPS, EAD, currículums y preguntas generales. Domingos a las 2:30 p.m."
                },
                address: "3050 Richard Allen Ct, Denver, CO 80205",
                action: { en: "Visit Lobby", es: "Visitar Vestíbulo" },
                tags: ["tps", "ead", "resume", "work permit", "application"]
            },
            {
                title: { en: "JAMLAC", es: "JAMLAC" },
                description: {
                    en: "Offers legal aid clinics and workshops around the city.",
                    es: "Ofrece clínicas de asistencia legal y talleres en toda la ciudad."
                },
                link: "https://jamlac.org",
                phone: "303-839-1008",
                action: { en: "Learn More", es: "Aprende Más" },
                tags: ["clinic", "workshop", "consultation", "advice"]
            },
            {
                title: { en: "Centro De Juan Diego", es: "Centro De Juan Diego" },
                description: {
                    en: "Free legal consultations (15 min) in person every 1st and 3rd Wednesday from 5:00 to 7:00 p.m.",
                    es: "Consultas legales gratuitas (15 min) en persona el 1er y 3er miércoles de 5:00 p.m. a 7:00 p.m."
                },
                link: "https://centrosanjuandiego.org/noche-legal/",
                action: { en: "More Info", es: "Más Información" },
                tags: ["evening", "consultation", "questions", "lawyer"]
            },
            {
                title: { en: "CORRN (Colorado Rapid Response Network)", es: "CORRN (Red de Respuesta Rápida de Colorado)" },
                description: {
                    en: "To report or verify immigration enforcement activity.",
                    es: "Para reportar o verificar actividades de control migratorio."
                },
                phone: "(844) 864-8341",
                action: { en: "Call Now", es: "Llamar Ahora" },
                tags: ["ice", "raid", "report", "emergency", "rights"]
            },
            {
                title: { en: "Hope Has No Borders - Pro Se Support", es: "Hope Has No Borders - Apoyo Pro Se" },
                description: {
                    en: "Support for defensive asylum applications without a lawyer. Join our next support session.",
                    es: "Apoyo para solicitudes de asilo defensivo sin abogado. Únete a nuestra próxima sesión de apoyo."
                },
                link: "https://example.com/register", // Need real link from user content if available or use generic
                action: { en: "Register Here", es: "Regístrate Aquí" },
                tags: ["asylum", "form", "i-589", "application", "help"]
            }
        ]
    },
    {
        id: 'employment',
        title: { en: 'Employment', es: 'Empleo' },
        icon: 'briefcase',
        resources: [
            {
                title: { en: "Indeed", es: "Indeed" },
                description: {
                    en: "The best search engine and website to search for jobs. Apply directly with your resume.",
                    es: "El mejor motor de búsqueda y sitio web para buscar empleos. Postúlate directamente con tu currículum."
                },
                link: "https://indeed.com",
                action: { en: "Search Jobs", es: "Buscar Empleos" },
                tags: ["work", "career", "salary", "wage", "hire"]
            },
            {
                title: { en: "Centro de Trabajadores", es: "Centro de Trabajadores" },
                description: {
                    en: "Support with wage theft and day labor. Programs enhancing job skills and leadership.",
                    es: "Apoyo con robo de salarios y trabajo diario. Programas para mejorar habilidades laborales y liderazgo."
                },
                link: "https://www.centrohumanitario.org",
                action: { en: "Visit Website", es: "Visitar Sitio Web" },
                tags: ["day labor", "construction", "rights", "worker"]
            },
            {
                title: { en: "Servicios de La Raza", es: "Servicios de La Raza" },
                description: {
                    en: "Work training, resume building, employment, and financial guidance for vulnerable families.",
                    es: "Capacitación laboral, currículums, empleo y orientación financiera para familias vulnerables."
                },
                link: "https://serviciosdelaraza.org",
                action: { en: "Get Support", es: "Obtener Apoyo" },
                tags: ["training", "finance", "money", "budget", "career"]
            },
            {
                title: { en: "Staff Zone", es: "Staff Zone" },
                description: {
                    en: "Staffing center for day labor, construction, and special events.",
                    es: "Centro de personal para trabajo diario, construcción y eventos especiales."
                },
                link: "https://staffzone.com",
                action: { en: "Find Work", es: "Buscar Trabajo" },
                tags: ["temp", "agency", "construction", "manual"]
            },
            {
                title: { en: "Mi Casa Resource Center", es: "Mi Casa Resource Center" },
                description: {
                    en: "Educates, trains, and supports youth and adults on their path to economic success.",
                    es: "Educa, capacita y apoya a jóvenes y adultos en su camino hacia el éxito económico."
                },
                link: "https://micasaresourcecenter.org",
                action: { en: "Visit Website", es: "Visitar Sitio Web" },
                tags: ["business", "entrepreneur", "start", "training"]
            },
            {
                title: { en: "Chamba", es: "Chamba" },
                description: {
                    en: "Authorized work shift opportunities. Flexible staffing for hospitality and warehousing.",
                    es: "Oportunidades de turnos de trabajo autorizados. Personal flexible para hospitalidad y almacenamiento."
                },
                link: "https://www.getchamba.com",
                action: { en: "Browse Jobs", es: "Navegar Empleos" },
                tags: ["gig", "shift", "flexible", "app"]
            }
        ]
    },
    {
        id: 'transport',
        title: { en: 'Transportation', es: 'Transporte' },
        icon: 'car',
        resources: [
            {
                title: { en: "211 Rides", es: "211 Rides" },
                description: {
                    en: "Same-day service (weekdays) for urgent transportation needs like medical or legal appointments.",
                    es: "Servicio el mismo día (días de semana) para necesidades urgentes como citas médicas o legales."
                },
                phone: "2-1-1",
                action: { en: "Call 2-1-1", es: "Llame al 2-1-1" },
                tags: ["ride", "lyft", "uber", "appointment", "doctor"]
            },
            {
                title: { en: "RTD Discount (LiVE)", es: "Descuento RTD (LiVE)" },
                description: {
                    en: "Discount program for RTD services. Learn what documents you need to sign up.",
                    es: "Programa de descuentos para servicios de RTD. Aprende qué documentos necesitas para inscribirte."
                },
                link: "https://www.rtd-denver.com/fares-passes/live-program",
                action: { en: "Apply Now", es: "Solicitar Ahora" },
                tags: ["bus", "train", "ticket", "pass", "transit"]
            },
            {
                title: { en: "Fred Loya Insurance", es: "Fred Loya Insurance" },
                description: {
                    en: "Affordable car insurance options.",
                    es: "Opciones de seguro de automóvil asequibles."
                },
                link: "https://www.fredloya.com",
                action: { en: "Get Quote", es: "Obtener Cotización" },
                tags: ["car", "vehicle", "coverage", "accident", "drive"]
            },
            {
                title: { en: "Spark Hope", es: "Spark Hope" },
                description: {
                    en: "50% discounts on car repairs and free inspections for single moms in Denver working 16+ hrs/week.",
                    es: "50% de descuento en reparaciones y inspecciones gratuitas para madres solteras en Denver que trabajan 16+ hrs/semana."
                },
                link: "https://sparkhopedenver.org", // Verify link if possible, assuming organization name
                action: { en: "Learn More", es: "Aprende Más" },
                tags: ["repair", "fix", "mechanic", "inspection", "moms"]
            }
        ]
    },
    {
        id: 'shelter',
        title: { en: 'Shelter', es: 'Refugio' },
        icon: 'home',
        resources: [
            {
                title: { en: "Emergency Cold Weather Shelter", es: "Refugio de Emergencia en Clima Frío" },
                description: {
                    en: "Find emergency shelter locations during cold weather events.",
                    es: "Encuentre ubicaciones de refugio de emergencia durante eventos de clima frío."
                },
                link: "https://denvergov.org", // Placeholder, usually dynamic
                action: { en: "Find Shelter", es: "Buscar Refugio" },
                tags: ["freeze", "snow", "warm", "night", "bed", "sleep"]
            },
            {
                title: { en: "Family Promise", es: "Family Promise" },
                description: {
                    en: "Limited rental assistance and security deposit support. Local shelter program.",
                    es: "Asistencia limitada para alquiler y depósito de seguridad. Programa de refugio local."
                },
                link: "https://www.fpgd.org/services",
                action: { en: "View Services", es: "Ver Servicios" },
                tags: ["rent", "deposit", "money", "house", "apartment"]
            },
            {
                title: { en: "Samaritan House (Women)", es: "Samaritan House (Mujeres)" },
                description: {
                    en: " Shelter for women. 4:30 p.m. to 7:30 a.m. daily. Arrive between 4-4:30 p.m.",
                    es: "Refugio para mujeres. 4:30 p.m. a 7:30 a.m. diario. Llegar entre 4-4:30 p.m."
                },
                address: "2301 Lawrence St Denver CO",
                phone: "303-294-0241",
                action: { en: "Call Details", es: "Llamar Detalles" },
                tags: ["bed", "sleep", "night", "safe", "house"]
            },
            {
                title: { en: "Salvation Army (Families)", es: "Ejército de Salvación (Familias)" },
                description: {
                    en: "Access family shelter system. Call Mon-Fri 7am-9pm, Sat-Sun 8am-12pm.",
                    es: "Acceda al sistema de refugio familiar. Llame L-V 7am-9pm, S-D 8am-12pm."
                },
                phone: "(303) 295-3366",
                action: { en: "Call Now", es: "Llamar Ahora" },
                tags: ["kids", "children", "parents", "house", "bed"]
            },
            {
                title: { en: "Lawrence Street (Men)", es: "Lawrence Street (Hombres)" },
                description: {
                    en: "Shelter for men. 7am to 8pm daily. Arrive before 6 p.m. for transport.",
                    es: "Refugio para hombres. 7am a 8pm diario. Llegar antes de las 6 p.m. para transporte."
                },
                phone: "303-294-0157",
                tags: ["bed", "sleep", "night", "safe", "house"]
            }
        ]
    },
    {
        id: 'medical',
        title: { en: 'Medical & Dental', es: 'Médico y Dental' },
        icon: 'med',
        resources: [
            {
                title: { en: "Mango House", es: "Mango House" },
                description: {
                    en: "Community space offering medical, dental, and pharmacy services for refugees and undocumented.",
                    es: "Espacio comunitario que ofrece servicios médicos, dentales y de farmacia para refugiados e indocumentados."
                },
                address: "10180 E Colfax Ave, Aurora, CO 80010",
                link: "https://mangohouse.org",
                action: { en: "Visit Website", es: "Visitar Sitio Web" },
                tags: ["doctor", "clinic", "health", "sick", "exam"]
            },
            {
                title: { en: "Denver Health Nurse Line", es: "Línea de Enfermería de Denver Health" },
                description: {
                    en: "Free 24/7 medical advice line.",
                    es: "Línea de consejos médicos gratuita 24/7."
                },
                phone: "303-739-1211",
                action: { en: "Call Nurse", es: "Llamar Enfermera" },
                tags: ["question", "sick", "symptom", "fever", "pain"]
            },
            {
                title: { en: "STRIDE Community Health Centers", es: "Centros de Salud Comunitaria STRIDE" },
                description: {
                    en: "Culturally sensitive health services. Sliding pay scale based on income.",
                    es: "Servicios de salud culturalmente sensibles. Escala de pago ajustable basada en ingresos."
                },
                link: "https://stridechc.org",
                action: { en: "Find Clinic", es: "Buscar Clínica" },
                tags: ["low cost", "income", "sliding scale", "checkup"]
            },
            {
                title: { en: "BC4U", es: "BC4U" },
                description: {
                    en: "100% free and confidential birth control for ages 12-24.",
                    es: "Control de natalidad 100% gratuito y confidencial para edades 12-24."
                },
                link: "https://bc4u.org",
                action: { en: "Learn More", es: "Aprende Más" },
                tags: ["women", "reproductive", "health", "teens"]
            }
        ]
    },
    {
        id: 'mental',
        title: { en: 'Mental Health', es: 'Salud Mental' },
        icon: 'brain',
        resources: [
            {
                title: { en: "988 Suicide & Crisis Lifeline", es: "988 Línea de Prevención del Suicidio" },
                description: {
                    en: "24/7 free and confidential support. Spanish speakers press 2.",
                    es: "Apoyo gratuito y confidencial 24/7. Hablantes de español presionen 2."
                },
                phone: "988",
                action: { en: "Call 988", es: "Llamar 988" },
                tags: ["depression", "anxiety", "sad", "talk", "hear"]
            },
            {
                title: { en: "Denver Children's Advocacy Center", es: "Centro de Defensa de los Niños de Denver" },
                description: {
                    en: "Free mental health support for immigrant children ages 3-18.",
                    es: "Apoyo de salud mental gratuito para niños inmigrantes de 3 a 18 años."
                },
                link: "https://denvercac.org",
                action: { en: "Visit Website", es: "Visitar Sitio Web" },
                tags: ["kids", "trauma", "counseling", "therapy"]
            }
        ]
    },
    {
        id: 'guides',
        title: { en: 'Educational Guides', es: 'Guías Educativas' },
        icon: 'book',
        resources: [
            {
                title: { en: "Understanding Rental Agreements", es: "Entendiendo los Contratos de Alquiler" },
                description: { en: "Avoid scams and know your rights.", es: "Evita estafas y conoce tus derechos." },
                link: "#",
                action: { en: "Download Guide", es: "Descargar Guía" },
                tags: ["read", "lease", "contract", "sign"]
            },
            {
                title: { en: "Domestic Violence Help", es: "Ayuda para Violencia Doméstica" },
                description: { en: "Understanding definition and ways to get help.", es: "Comprender la definición y formas de obtener ayuda." },
                link: "#",
                action: { en: "Read Guide", es: "Leer Guía" },
                tags: ["abuse", "safe", "plan", "protect"]
            },
            {
                title: { en: "English Learner Family Toolkit", es: "Kit de Herramientas para Familias EL" },
                description: { en: "For parents and guardians of school aged children.", es: "Para padres y tutores de niños en edad escolar." },
                link: "#",
                action: { en: "Get Toolkit", es: "Obtener Kit" },
                tags: ["school", "education", "learn", "english"]
            },
            {
                title: { en: "Wage Theft", es: "Robo de Salarios" },
                description: { en: "Know your rights in the workplace.", es: "Conoce tus derechos en el lugar de trabajo." },
                link: "#",
                action: { en: "Learn More", es: "Aprende Más" },
                tags: ["pay", "money", "check", "boss", "work"]
            }
        ]
    }
]

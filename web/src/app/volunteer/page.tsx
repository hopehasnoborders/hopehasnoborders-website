import { sanityFetch } from '@/lib/sanity.server'
import { volunteerPageQuery, siteSettingsQuery } from '@/lib/queries'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import VolunteerClientPage from './VolunteerClientPage'

async function getVolunteerData() {
    const [page, siteSettings] = await Promise.all([
        sanityFetch({ query: volunteerPageQuery, tags: ['volunteer', 'settings'] }),
        sanityFetch({ query: siteSettingsQuery, tags: ['settings'] })
    ]) as [any, any]
    return { page, siteSettings }
}

export async function generateMetadata(): Promise<Metadata> {
    const { page, siteSettings } = await getVolunteerData()
    return generatePageMetadata(page, siteSettings, 'en')
}

export default function VolunteerPage() {
    return <VolunteerClientPage />
}

import { sanityFetch } from '@/lib/sanity.server'
import { resourcesPageQuery, siteSettingsQuery } from '@/lib/queries'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { ResourcesClientPage } from '@/components/resources/ResourcesClientPage'

async function getResourcesData() {
    const [page, siteSettings] = await Promise.all([
        sanityFetch({ query: resourcesPageQuery, tags: ['resources', 'settings'] }),
        sanityFetch({ query: siteSettingsQuery, tags: ['settings'] })
    ]) as [any, any]
    return { page, siteSettings }
}

export async function generateMetadata(): Promise<Metadata> {
    const { page, siteSettings } = await getResourcesData()
    return generatePageMetadata(page, siteSettings, 'en')
}

export default function ResourcesPage() {
    return <ResourcesClientPage />
}

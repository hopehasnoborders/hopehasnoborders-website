import 'server-only'
import { draftMode } from 'next/headers'
import { getClient } from './sanity'

// Cache-tag-aware fetch wrapper for on-demand revalidation
// This file is server-only to avoid importing next/headers in client components
export async function sanityFetch<T>({
    query,
    params = {},
    tags = [],
}: {
    query: string
    params?: Record<string, unknown>
    tags?: string[]
}): Promise<T> {
    const { isEnabled: isDraft } = await draftMode()
    return getClient(isDraft).fetch<T>(query, params, {
        next: isDraft ? { revalidate: 0 } : { tags },
    })
}

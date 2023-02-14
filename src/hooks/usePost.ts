import useSWR from 'swr'

import { Post } from '~/types/APIResponses'

export default function usePost(slug: string) {
  const { data, error } = useSWR<Post>(`/api/post?slug=${slug}`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

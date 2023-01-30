import useSWR from 'swr'

import { Post } from '~/types/APIResponses'

export default function usePosts() {
  const { data, error } = useSWR<Post[]>(`/api/posts`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

import useSWR from 'swr'

import { Client } from '~/types/APIResponses'

export default function useClients(category: 'private' | 'public') {
  const { data, error } = useSWR<Client[]>(`/api/clients?category=${category}`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

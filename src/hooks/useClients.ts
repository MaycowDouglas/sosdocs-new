import useSWR from 'swr'

import { Client } from '~/types/APIResponses'

export default function useClients(category: 'public' | 'private') {
  const { data, error } = useSWR<Client[]>(`/api/clients/${category}`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

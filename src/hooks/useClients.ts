import useSWR from 'swr'

export default function useClients(category: 'private' | 'public') {
  const { data, error } = useSWR(`/api/clients?category=${category}`)

  return {
    clients: data,
    isLoading: !error && !data,
    isError: error,
  }
}

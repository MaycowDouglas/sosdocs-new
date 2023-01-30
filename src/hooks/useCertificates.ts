import useSWR from 'swr'

import { Certificate } from '~/types/APIResponses'

export default function useCertificates() {
  const { data, error } = useSWR<Certificate[]>(`/api/certificates`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

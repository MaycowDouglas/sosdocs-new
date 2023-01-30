import useSWR from 'swr'

import { Unit } from '~/types/APIResponses'

export default function useUnits() {
  const { data, error } = useSWR<Unit[]>(`/api/units`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

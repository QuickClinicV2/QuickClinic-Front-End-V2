import { useQuery } from '@tanstack/react-query'

import { healthCheck } from '../requests/health-check'

export const USE_GET_HEALTH_CHECK_QUERY_KEY = 'health-check'

export type UseGetHealthCheckQueryKey = [typeof USE_GET_HEALTH_CHECK_QUERY_KEY]

export function useGetHealthCheckQuey() {
  const key: UseGetHealthCheckQueryKey = [USE_GET_HEALTH_CHECK_QUERY_KEY]

  return useQuery({
    queryKey: key,
    queryFn: healthCheck,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

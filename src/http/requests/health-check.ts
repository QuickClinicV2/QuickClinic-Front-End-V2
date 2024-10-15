import { api } from '../api-client'

type HealthCheckResponse = {
  message: string
}

export async function healthCheck() {
  const result = await api.get('/health-check').json<HealthCheckResponse>()

  return result
}

import ky from 'ky'

import { env } from '@/env'

export const api = ky.create({
  prefixUrl: env.API_URL,
  hooks: {
    beforeRequest: [],
    afterResponse: [],
    beforeError: [
      async (error) => {
        const { response } = error
        const contentType = response.headers.get('content-type')

        if (contentType?.indexOf('application/json') !== -1) {
          const errorResponse = await response.json<{
            message: string
          }>()
          error.message = errorResponse.message
        } else {
          const errorResponse = await response.text()
          error.message = errorResponse
        }

        return error
      },
    ],
  },
})

import { NextApiRequest, NextApiResponse } from 'next'

import { Unit, UnitsRouteResponse } from '~/types/APIResponses'
import fetchJson, { FetchError } from '~/utils/fetchJson'

export default async function unitsRoute(req: NextApiRequest, res: NextApiResponse<Unit[]>) {
  try {
    const response: UnitsRouteResponse = await fetchJson(String(process.env.WORDPRESS_API_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query AllUnits {
          units {
            nodes {
              title
              state
              city
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }`,
      }),
    })

    res.status(200).json(response.data.units.nodes)
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(error.message)
    }
    console.error(error)
    res.status(400).json([])
  }
}

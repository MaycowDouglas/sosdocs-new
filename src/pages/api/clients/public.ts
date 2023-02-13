import { NextApiRequest, NextApiResponse } from 'next'

import { Client, ClientsRouteResponse } from '~/types/APIResponses'
import fetchJson from '~/utils/fetchJson'

export default async function publicClientsRoute(
  req: NextApiRequest,
  res: NextApiResponse<Client[]>
) {
  try {
    const response: ClientsRouteResponse = await fetchJson(String(process.env.WORDPRESS_API_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query AllClients {
          clients(where: {categoryName: "Pública"}) {
            nodes {
              title
              categories {
                nodes {
                  name
                }
              }
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

    res.status(200).json(response.data.clients.nodes)
  } catch (error) {
    res.status(400).json([])
  }
}

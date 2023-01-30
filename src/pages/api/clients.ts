import { NextApiRequest, NextApiResponse } from 'next'

import { Client, ClientsRouteResponse } from '~/types/APIResponses'
import fetchJson, { FetchError } from '~/utils/fetchJson'

export default async function clientsRoute(req: NextApiRequest, res: NextApiResponse<Client[]>) {
  const category = req.query.category === 'private' ? 'Cliente Privado' : 'Cliente Público'

  try {
    const response: ClientsRouteResponse = await fetchJson(String(process.env.WORDPRESS_API_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query Query($categoryName: String) {
          clients(where: {categoryName: $categoryName}) {
            nodes {
              title
              brand {
                node {
                  sourceUrl
                }
              }
            }
          }
        }`,
        variables: {
          categoryName: category,
        },
      }),
    })

    res.status(200).json(response.data.clients.nodes)
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(error.message)
    }
    console.error(error)
    res.status(400).json([])
  }
}

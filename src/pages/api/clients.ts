import { NextApiRequest, NextApiResponse } from 'next'

import fetchJson, { FetchError } from '~/utils/fetchJson'

export default async function clientsRoute(req: NextApiRequest, res: NextApiResponse) {
  const category = req.query.category === 'private' ? 'Cliente Privado' : 'Cliente Público'

  try {
    const response: any = await fetchJson(String(process.env.WORDPRESS_API_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ClientsByCategory($categoryName: String = "") {
          clients(where: {categoryName: $categoryName}) {
            edges {
              node {
                title
                brand {
                  node {
                    sourceUrl
                  }
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

    res.status(200).json(response)
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(error.message)
    }
    console.error(error)
  }
}

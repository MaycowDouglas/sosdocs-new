import { NextApiRequest, NextApiResponse } from 'next'

import { Post, PostRouteResponse } from '~/types/APIResponses'
import fetchJson, { FetchError } from '~/utils/fetchJson'

export default async function postRoute(req: NextApiRequest, res: NextApiResponse<Post | null>) {
  const { slug } = req.query
  try {
    const response: PostRouteResponse = await fetchJson(String(process.env.WORDPRESS_API_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query postDetails($slug: String) {
          postBy(slug: $slug) {
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }`,
        variables: {
          slug,
        },
      }),
    })

    res.status(200).json(response.data.postBy)
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(error.message)
    }
    console.error(error)
    res.status(400).json(null)
  }
}

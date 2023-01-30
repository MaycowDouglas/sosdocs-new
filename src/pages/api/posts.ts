import { NextApiRequest, NextApiResponse } from 'next'

import { Post, PostsRouteResponse } from '~/types/APIResponses'
import fetchJson, { FetchError } from '~/utils/fetchJson'

export default async function postsRoute(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  try {
    const response: PostsRouteResponse = await fetchJson(String(process.env.WORDPRESS_API_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query AllPosts {
          posts(first: 100) {
            nodes {
              title
              slug
              content
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

    res.status(200).json(response.data.posts.nodes)
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(error.message)
    }
    console.error(error)
    res.status(400).json([])
  }
}

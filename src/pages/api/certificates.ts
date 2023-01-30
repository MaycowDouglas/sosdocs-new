import { NextApiRequest, NextApiResponse } from 'next'

import { Certificate, CertificatesRouteResponse } from '~/types/APIResponses'
import fetchJson, { FetchError } from '~/utils/fetchJson'

export default async function certificatesRoute(
  req: NextApiRequest,
  res: NextApiResponse<Certificate[]>
) {
  try {
    const response: CertificatesRouteResponse = await fetchJson(
      String(process.env.WORDPRESS_API_URL),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query AllCertificates {
          certificates {
            nodes {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }`,
        }),
      }
    )

    res.status(200).json(response.data.certificates.nodes)
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(error.message)
    }
    console.error(error)
    res.status(400).json([])
  }
}

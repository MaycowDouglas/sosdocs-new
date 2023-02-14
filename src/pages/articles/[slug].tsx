import { useRouter } from 'next/router'

import { TemplateDefault } from '~/components/templates/Default'
import usePost from '~/hooks/usePost'

export default function Article() {
  const router = useRouter()
  const post = usePost(String(router.query.slug))

  return (
    <TemplateDefault title="" description="">
      {post.data && <h1>article</h1>}
    </TemplateDefault>
  )
}

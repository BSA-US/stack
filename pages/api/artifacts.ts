import type { Artifact } from '~/types'

import { createEndpoint, createNotionGetter } from './_utils'

export default createEndpoint(
  createNotionGetter<Artifact>(process.env.NOTION_PAGE_URL_ARTIFACTS!, {
    type: 'database',
  })
)

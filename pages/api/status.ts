import type { Status } from '~/types'

import { createEndpoint, createNotionGetter } from './_utils'

export default createEndpoint(
  createNotionGetter<Status>(process.env.NOTION_PAGE_URL_STATUS!, {
    type: 'json',
  })
)

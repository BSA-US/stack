import tc from '@replygirl/tc'

import type { VcRequest, VcResponse } from '~/types'

export const createEndpoint =
  (fn: (req: VcRequest, res: VcResponse) => Promise<object | string>) =>
  async (req: VcRequest, res: VcResponse) => {
    const [x, e] = await tc(() => fn(req, res))

    if (e) {
      console.error(e)
      res.status(500).json({ error: e })
    } else res.json(x)
  }

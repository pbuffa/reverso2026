export default defineEventHandler((event) => {
  const path = event.path || ''
  if (!path.split('?')[0].endsWith('.mp4')) return

  const res = event.node.res
  const setHeader = res.setHeader.bind(res)

  res.setHeader = ((name: string, value: unknown) => {
    if (String(name).toLowerCase() === 'etag') return res
    return setHeader(name, value as string)
  }) as typeof res.setHeader
})

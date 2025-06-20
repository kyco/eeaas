import { useEffect, useState } from 'react'

type FileSizeInfo = {
  uncompressed?: number
  gzipped?: number
  error?: string
}

export const useFileSizeInfo = (url: string): FileSizeInfo => {
  const [sizes, setSizes] = useState<FileSizeInfo>({ uncompressed: 0, gzipped: 0 })

  useEffect(() => {
    if (!url) return

    const fetchAndCompress = async () => {
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`)
        }

        const text = await res.text()
        const encoder = new TextEncoder()
        const encoded = encoder.encode(text)
        const uncompressed = encoded.length

        const stream = new ReadableStream({
          start(controller) {
            controller.enqueue(encoded)
            controller.close()
          },
        })

        const compressedStream = stream.pipeThrough(new CompressionStream('gzip'))
        const compressedBlob = await new Response(compressedStream).blob()
        const gzipped = compressedBlob.size

        setSizes({
          uncompressed: +(uncompressed / 1024).toFixed(1),
          gzipped: +(gzipped / 1024).toFixed(1),
        })
      } catch (err: any) {
        setSizes({ error: err.message })
      }
    }

    fetchAndCompress()
  }, [url])

  return sizes
}

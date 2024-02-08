import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'

type PlantImageType = {
  src: string
  title: string
  width: number
  height?: never
  layout: 'responsive' | 'intrinsic'
  aspectRatio: '1:1' | '4:3' | '16:9'
  fit?: 'pod' | 'fill' | 'scale' | 'crop' | 'thumb'
}

function calcAspectRatio(aspectRatio: string, width: number): number {
  const aspectRatioValues = {
    '1:1': 1,
    '4:3': 3 / 4,
    '16:9': 9 / 16,
  }

  const ratio = aspectRatioValues[aspectRatio]

  return Math.floor(ratio * width)
}

export function PlantImage({
  src,
  title,
  width,
  layout,
  aspectRatio,
  fit = 'scale',
}: PlantImageType) {
  const height = calcAspectRatio(aspectRatio, width)

  const loader = (args: ImageLoaderProps): string => {
    const loaderHeight = calcAspectRatio(aspectRatio, args.width)
    return `${args.src}?w=${args.width}&h=${loaderHeight}&fit=${fit}`
  }

  return (
    <Image
      src={src}
      alt={title}
      width={width}
      height={height}
      layout={layout}
      loader={loader}
    />
  )
}

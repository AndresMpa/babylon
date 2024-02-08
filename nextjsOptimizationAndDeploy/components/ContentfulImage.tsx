import Image, { ImageLoaderProps, ImageProps } from 'next/image'
import { useCallback } from 'react'

type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never
type AspectRatioType = '1:1' | '3:2' | '4:3' | '9:12' | '16:9'
type ImageFitType = 'pod' | 'fill' | 'scale' | 'crop' | 'thumb'
type LayoutType = 'fill' | 'fixed' | 'intrinsic' | 'responsive'
type ImageType = {
  src: string
  title: string
  width: number
  height?: never
  layout: LayoutType
  aspectRatio: AspectRatioType
  fit?: ImageFitType
} & DistributiveOmit<ImageProps, 'height'>

const aspectRatioValues: Record<AspectRatioType, number> = {
  '1:1': 1,
  '4:3': 3 / 4,
  '3:2': 2 / 3,
  '9:12': 12 / 9,
  '16:9': 9 / 16,
}

function calcAspectRatio(aspectRatio: string, width: number): number {
  const ratio = aspectRatioValues[aspectRatio]

  return Math.floor(ratio * width)
}

export function ContentfulImage({
  width,
  aspectRatio,
  fit = 'fill',
  ...imageProps
}: ImageType) {
  const height = calcAspectRatio(aspectRatio, width)

  const imageLoader = useCallback(
    (args: ImageLoaderProps): string => {
      const loaderHeight = calcAspectRatio(aspectRatio, args.width)
      return `${args.src}?w=${args.width}&h=${loaderHeight}&fit=${fit}`
    },
    [aspectRatio, fit]
  )

  return (
    <Image width={width} height={height} loader={imageLoader} {...imageProps} />
  )
}

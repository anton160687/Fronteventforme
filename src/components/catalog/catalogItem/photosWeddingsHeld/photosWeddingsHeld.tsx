import Link from 'next/link'
import ImageLoader from "@/components/_finder/ImageLoader"
import { FC } from 'react'
import { cardsType } from '@/types/cardsType'

export const PhotosWeddingsHeld:FC<cardsType> = ({title, description, pathImg }) => (
  <Link href="#" style={{maxWidth: '210px'}} className='text-center card-hover text-decoration-none text-dark rounded-3'>
    <figure>
      <ImageLoader
        src={pathImg}
        width={320}
        height={150}
        quality={100}
        // objectFit='cover'
        layout='responsive'
        alt='Card image'
        className='card-img-top'
      />
      <figcaption>
        <p className='fs-7 my-2'><strong>{title}</strong></p>
        <p className='fs-sm '>{description}</p>
      </figcaption>
    </figure>    
  </Link>
)
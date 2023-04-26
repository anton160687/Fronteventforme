import Link from 'next/link'
import ImageLoader from "@/components/_finder/ImageLoader"
import { FC } from 'react'
import { cardsType } from '@/types/cardsType'
import { Button } from 'react-bootstrap'

export const ArticlesWeddings:FC<cardsType> = ({title, description, pathImg }) => (
  <Link href="#" style={{maxWidth: '430px'}} className=' card-hover text-decoration-none text-dark rounded-3'>
    <figure>
      <ImageLoader
        src={pathImg}
        width={416}
        height={230}
        quality={100}
        // objectFit='cover'
        layout='responsive'
        alt='Card image'
        className='card-img-top'
      />      
      <figcaption className='p-3'>
        <p className='text-primary'><i className='fi-calendar-alt me-2 '></i>26.03.2023</p>
        <p className='fs-7 my-2'><strong>{title}</strong></p>
        <p className='fs-sm m-0'>{description}
          <span className='text-primary ms-3'>Показать еще</span>
        </p>
      </figcaption>
    </figure>    
  </Link>
)
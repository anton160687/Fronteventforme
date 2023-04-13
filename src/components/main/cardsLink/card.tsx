import Image from "next/image"
import { FC } from "react"

type cardType = {
  title: string,
  description: string,
  pathImg: string
}

export const Card:FC<cardType>  = ({title, description, pathImg}) =>  (
    <figure className="card border-0 align-items-center col-lg-4 col-md-6 col-sm-12 mb-4">
      <figcaption className="card-body p-0 col-lg-12 col-md-10 col-sm-8" >
        <h3 className="card-title mb-3">{title}</h3>
        <p className="card-text mb-4">{description}</p>
      </figcaption>
      <Image  
        src={pathImg} 
        className="rounded-2" 
        alt="card image" 
        width={416}
        height={415}
        />
    </figure>
  )

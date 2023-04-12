import Image from "next/image"
import { FC } from "react"

type cardType = {
  title: string,
  description: string,
  pathImg: string
}

export const Card:FC<cardType>  = ({title, description, pathImg}) =>  (
    <figure className="card border-0 align-items-center col-lg-4 col-md-6 col-sm-12">
      <figcaption className="card-body  col-md-12 col-sm-7" >
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </figcaption>
      <Image  
        src={pathImg} 
        className="rounded-2" 
        alt="card image" 
        width={416}
        height={415}/>
    </figure>
  )

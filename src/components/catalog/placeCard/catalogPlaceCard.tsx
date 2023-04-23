import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import ImageLoader from "@/components/_finder/ImageLoader";
import { FC } from "react";
import { Place } from "@/types/catalog";
// import { CatalogPlacesProps } from "../../../pages/catalog/places/index";

type propsPlace = {
  place: Place
}

export const CatalogPlaceCard:FC<propsPlace> = ({place})=> {

  return(
    <Card className='card-horizontal card-hover my-5'>
      <div className='card-img-top'>
        <ImageLoader
          src={place.image_vendor}
          quality={100}
          layout='fill'
          objectFit='cover'
          alt='Card image'
          // className='card-img-bottom'
        />
      </div>
      <Card.Body className='py-0'>
        <Card.Title className='d-flex align-items-center justify-content-between my-4'>
          <h5 className="m-0">{place.category}</h5>
          <OverlayTrigger
            placement='left'
            overlay={<Tooltip>Add to Wishlist</Tooltip>}>
              <Button href="#" variant='outline-danger btn-icon rounded-circle shadow border-0'>
                <i className='fi-heart'></i>
              </Button>
          </OverlayTrigger>
        </Card.Title>
        <CardText title={place.title} description={place.description} />
        <CardText title='Схема оплаты' description='За аренду зала + за банкет' />
        <CardText title='Стоимость' description='Аренда 10 000 ₽ + от 4 000 ₽/ч' />
        <hr className='text-secondary'/>
        <Card.Footer className='d-flex align-items-center justify-content-evenly px-0 '>
          <span>3 банкетных зала</span>
          <span className='fs-4 text-secondary'>|</span>
          <span>2 шатра</span>
          <span className='fs-4 text-secondary'>|</span>
          <span>2 веранды</span>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
} 

type cardTextType = {
  title: string
  description: string
}

const CardText:FC<cardTextType> = ({title , description})=> (
  <Card.Text className='d-flex align-items-center justify-content-between fs-6'>
    <span className='m-0'>{title}</span>
    <span className='m-0 text-end'><strong>{description}</strong></span>
  </Card.Text>
)
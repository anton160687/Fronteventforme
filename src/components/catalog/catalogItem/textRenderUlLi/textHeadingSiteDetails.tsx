import { FC } from "react"
import { Button, Card } from "react-bootstrap"
import styles from "@/styles/catalog/places/Places.module.scss";
import Link from "next/link";

export const TextHeadingSiteDetails:FC = () => (

<Card className='border-0 mb-xl-5 mb-md-4 mb-sm-3'>
  <Card.Body className='p-0'>
    <Card.Title as='h4' className='mb-3'>Детали площадки</Card.Title>
    <Card.Text className='mb-2'>
      Тип площадки: банкетный зал, веранда, гостиница/отель, летняя площадка, банкетный комплекс, терраса, загородный комплекс, шатер
    </Card.Text>
    <Link href='#' className='col-sm-2 border-0 text-decoration-none'>Показать еще</Link>
  </Card.Body>
</Card>
)

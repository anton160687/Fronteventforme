import { Place } from "@/types/catalog"
import { FC } from "react"
import { Row } from "react-bootstrap"

type PlaceProps = {
  item?: Place,
}

export const TextHeadingDescription:FC<PlaceProps> = ({item}) => (

<Row id="review" className='mb-xl-5 mb-md-4 mb-sm-3'>
  <h4>Описание:</h4>
    <Row className='d-flex justify-content-between'>
      <ul className='list-unstyled w-50'>
        <li className="d-flex align-items-center justify-content-between text-dark">Вместимость <strong>{item?.capacity || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Расположение <strong>{item?.placement || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Кухня <strong>{item?.cuisine || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Время работы <strong>{item?.hours || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Свой алкоголь <strong>{item?.alcohol ? "Разрешено" : "Запрещено"}</strong></li>
      </ul>
      <ul className='list-unstyled w-50'>
        <li className='d-flex align-items-center justify-content-between text-dark'>Аренда <strong>{item?.lease || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Средний чек <strong>{item?.avg_price || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Пробковый сбор <strong>{item?.fee || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Депозит <strong>{item?.deposit || 'нет информации'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark'>Продление <strong>{item?.continue || 'нет информации'}</strong></li>
      </ul>
  </Row>
</Row>
)

import { Place } from "@/types/placeType"
import { FC } from "react"
import { Col, Row } from "react-bootstrap"
import styles from '@/styles/catalog/places/Places.module.scss';
import { LOCATION, KITCHEN } from "@/constant";

type PlaceProps = {
  place: Place
}

export const TextHeadingDescription:FC<PlaceProps> = ({ place }) => {
  const { location } = place || [];
  const { kitchen } = place || [];

// временный костыль для отображения текста, а не номеров
//* arr - массив из place
//* arrConst - массив из constant.ts

const temporaryComponent = (arr:number[], arrConst:(number | string)[][]) => (
  arr?.map((check, i) => {
    
    let newName = arrConst.find(item => item.includes(check))?.slice(-1)

    return(
    <span className="d-flex justify-content-end" key={i} >
      {newName}
    </span>
    )
  })
)

return (
<Row id="review" className='mb-xl-5 mb-md-4 mb-sm-3 d-flex'>
  <h4>Описание:</h4>
    <Col className={styles.text__description_container + ' d-flex justify-content-between'}>
      <ul className={styles.text__description_column + ' list-unstyled'}>
        <li className="d-flex align-items-center justify-content-between text-dark">Вместимость <strong>{'' || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Расположение <strong>{temporaryComponent(location, LOCATION) || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Кухня <strong>{temporaryComponent(kitchen, KITCHEN) || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Время работы <strong>{`c ${place.start_time} до ${place.finish_time}` || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Свой алкоголь <strong>{place.alco ? "Разрешено" : "Запрещено"}</strong></li>
      </ul>
      <ul className={styles.text__description_column + ' list-unstyled'}>
        <li className='d-flex align-items-center justify-content-between text-dark'>Аренда <strong>{place.lease_extension ? "Есть" : "Нет"|| 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Средний чек <strong>{place.average_check || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Пробковый сбор <strong>{place.payment_of_alco || 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Депозит <strong>{''|| 'Не указано'}</strong></li>
        <li className='d-flex align-items-center justify-content-between text-dark border-top'>Продление <strong>{place.lease_extension_price || 'Не указано'}</strong></li>
      </ul>
    </Col>
</Row>
)}

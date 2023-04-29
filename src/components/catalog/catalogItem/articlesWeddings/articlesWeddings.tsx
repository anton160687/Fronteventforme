import ImageLoader from "@/components/_finder/ImageLoader"
import { FC, useState } from 'react'
import { cardsType } from '@/types/cardsType'
import { Form, InputGroup } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const ArticlesWeddings:FC<cardsType> = ({title, description, pathImg }) =>{
  //* для дополнительного текста
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const new_description = description.slice(0, 120) + '...';

  //* для заполнения даты
  const [startDate, setStartDate] = useState<Date>(new Date());

return(
    <figure 
      style={{maxWidth: '430px'}} 
      className=' card-hover text-decoration-none text-dark rounded-3 mx-2'>
      <ImageLoader
        src={pathImg}
        width={416}
        height={230}
        quality={100}
        layout='responsive'
        alt='Card image'
        className='card-img-top'
      />
      <figcaption className='p-3'>
        <Form.Group controlId='date-input'>
          <InputGroup>
            <Form.Control
              as={DatePicker}
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dateFormat='d, MMMM, yyyy'
              className='border-0 text-primary'
            />
            <i className='fi-calendar position-absolute top-50 start-0  translate-middle-y text-primary' />
          </InputGroup>
        </Form.Group>
        <p className='fs-7 my-2'><strong>{title}</strong></p>
        <p className='fs-sm m-0' style={isDetailsOpen ? { display: 'none' } : {}}>     
          {new_description}
          <span 
            className='text-primary ms-3 cursor-pointer'
            onClick={() => setIsDetailsOpen((prev) => !prev)}>
              {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
          </span>
        </p>
        <p className='fs-sm m-0' style={!isDetailsOpen ? { display: 'none' } : {}}>
          {description}
          <span 
            className='text-primary ms-3 cursor-pointer'
            onClick={() => setIsDetailsOpen((prev) => !prev)}>
              {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
          </span>
        </p>
        
      </figcaption>
    </figure>    
)}
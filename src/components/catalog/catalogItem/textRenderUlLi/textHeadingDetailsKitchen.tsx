import { Button, Card } from "react-bootstrap"
import { PlaceReceived } from '@/types/placeType';
import styles from "@/styles/catalog/places/Places.module.scss";
import { KITCHEN } from "@/constant";

type PlaceProps = {
  item: PlaceReceived;
};

export function TextHeadingDetailsKitchen ({ item }: PlaceProps) {
  function renderKitchenNames() {
    let cuisines = '';
    item.kitchen.forEach(({id})=> {
      let res = KITCHEN.filter((value) => value[0] === id);
      cuisines += `${res[0][1]} `
    })
    return cuisines;
  }
  return (
    <div id = "details" className = { styles.text__cuisine_container + ' border-0 mb-xl-5 mb-md-4 mb-sm-3 d-flex' } >
    <Card.Body className='p-0'>
      <Card.Title as='h4' className='mb-3'>Детали о кухне площадки:</Card.Title>
      <Card.Text className='mb-2'>
        <i className='fi-union me-2 fs-sm' />
        {renderKitchenNames()}
      </Card.Text>
      <Card.Text className='mb-2'>
        <i className='fi-ticket me-2 fs-sm' />
        {item.children_kitchen? 'Есть детское меню' : 'Детского меню нет'}
      </Card.Text>
    </Card.Body>
    <Button href="#" className={styles.text__cuisine_btn}>
      <i className='fi-file-clean me-2' />
      Запросить банкетное меню
    </Button>
  </div>
  )
}

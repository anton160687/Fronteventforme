import Image from 'next/image';
import { MouseEvent } from 'react';

import Button from 'react-bootstrap/Button';
import styles from '@/styles/RegButton.module.scss';

function RegButton() {
  
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault;
  }
  
  return (
    <Button variant='primary' onClick={handleClick} className={styles.regbtn}>
        <div className={styles.regbtn__text} >
          Регистрация
          <Image src='/img/header/arrowRight.png' width={7} height={34} alt='arrow'/>
        </div>
    </Button>
  )
}
        
export default RegButton;
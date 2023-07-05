import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from '@/styles/main/Main.module.scss';
import Image from 'next/image';
import { Paths } from '@/constant';

//это кнопка для регистрации на главной станицы
//вопрос - как сделать так, чтобы при ее нажатии открыть модалку, и не плодить лишний код
function RegisterBtn() {
  return (
    <Button
      size="lg"
      // @ts-ignore: bootstrap bag*
      //as={Link}
      //href={Paths.SignUp}
      className={styles.btn__link}
    >
      Регистрация
      <i className="fi-chevron-right ms-2 fs-xs"></i>
    </Button>
  );
}

export default RegisterBtn;

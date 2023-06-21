import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from '@/styles/main/Main.module.scss';
import Image from 'next/image';
import { Paths } from '@/constant';

function RegisterBtn() {
  return (
    <Button
      size="lg"
      // @ts-ignore: bootstrap bag*
      as={Link}
      href={Paths.SignUp}
      className={styles.btn__link}
    >
      {'Регистрация\u00A0'}
      <Image src="/img/arrow.png" alt="arrow" width={6.67} height={11.67} />
    </Button>
  );
}

export default RegisterBtn;

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/main/Main.module.scss';
import Link from 'next/link';
import { MainTitle } from '@/components/main/title/MainTitle';

function PlanWedding() {
  return (
    <section className={styles.m124}>
      <Container className={`${styles.align_start} text-center`}>
        <MainTitle
          subtitle={'Портал EventForMe'}
          title={'Организуйте свадьбу с нашей помощью и создайте воспоминания на всю жизнь'
          }
        />
        <Button size="lg">
          <Link href="#" className={styles.btn__link}>
            Начать планирование
          </Link>
        </Button>
      </Container>
    </section>
  );
}

export default PlanWedding;

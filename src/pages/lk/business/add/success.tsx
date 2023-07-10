import CustomBreadcrumbs from '@/components/breadcrumbs/CustomBreadcrumbs';
import { Paths } from '@/constant';
import withAuth from '@/hoc/withAuth';
import Link from 'next/link';
import { Button, Container, Image, Row } from 'react-bootstrap';

const breadcrumbs = [
  { path: Paths.Home, name: 'Главная' },
  {
    path: Paths.AccBusiness,
    name: 'Личный кабинет',
  },
  {
    path: 'add/service',
    name: 'Добавить бизнес',
  },
];

function SuccessPage() {
  return (
    <>
      <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
      <main>
        <Container>
          <Row>
            <h2>Бизнес (или площадка) успешно отправлен(а) на модерацию</h2>
            <p style={{ color: '#454056' }}>
              Проверка занимает до 1 дня.
              <br /> Отследить статус проверки бизнеса вы можете{' '}
              <Link href="#" className="text-decoration-none">
                здесь
              </Link>
              .
            </p>
          </Row>
          {/* @ts-ignore: bootstrap bag*/}
          <Button as={Link} href={Paths.AccBusiness} size="lg" className="mt-4">
            Вернуться в личный кабинет
            <i className="fi-chevron-right ms-2 fs-xs"></i>
          </Button>
          <div>
            <Image
              src="/img/lk/steps.png"
              alt="Человек с потрфелем поднимается по ступеням"
              width={844}
              height={647}
            ></Image>
          </div>
        </Container>
      </main>
    </>
  );
}

export default withAuth(SuccessPage);

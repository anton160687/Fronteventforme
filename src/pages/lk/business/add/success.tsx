import { Paths } from "@/constant";
import withAuth from "@/hoc/withAuth";
import Link from "next/link";
import { Breadcrumb, Button, Container, Image, Row } from "react-bootstrap";

function SuccessPage() {
  return (
    <Container className="px-5">
      <Breadcrumb className="mb-4 pt-md-3">
        <Breadcrumb.Item linkAs={Link} href={Paths.Home}>
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={Paths.AccBusiness}>
          Личный кабинет
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Добавить бизнес</Breadcrumb.Item>
      </Breadcrumb>
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
      <Button as={Link} href={Paths.AccMyBusiness} size="lg" className="mt-4">
        Вернуться в личный кабинет
        <i className="fi-chevron-right ms-2 fs-xs"></i>
      </Button>
      <div>
        <Image
          src="/img/lk/steps.png"
          alt="Человек с потрфелем поднимается по стуменям"
          width={844}
          height={647}
        ></Image>
      </div>
    </Container>
  );
}

export default withAuth(SuccessPage);

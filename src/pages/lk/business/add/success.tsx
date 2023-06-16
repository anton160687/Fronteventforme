import { Paths } from "@/constant";
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
                <Breadcrumb.Item active>
                    Добавить бизнес
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <h2>Заявка на добавление бизнеса успешно отправлена на модерацию</h2>
                <p>Проверка занимает от 1 до 3 дней.
                    Отследить статус проверки бизнеса вы можете <Link href={'#'}>здесь</Link>.
                </p>
            </Row>
            {/* @ts-ignore: bootstrap bag*/}
            <Button as={Link} href={Paths.AccMyBusiness} className="mt-4">
                Вернуться в личный кабинет
            </Button>
            <div>
                <Image src="/img/lk/steps.png" width={844} height={647}></Image>
            </div>
        </Container>
    )
}

export default SuccessPage;
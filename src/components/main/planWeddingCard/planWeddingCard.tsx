import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "@/styles/main/Main.module.scss";
import Link from "next/link";

function PlanWeddingCard() {

    return (
        <section className={styles.plan_wedding__container}>
            <Container as='section'>
                <Row className='align-items-center justify-content-center'>
                    <Col md={6} className='text-center'>
                        <p className='mb-2'>Портал EventForMe</p>
                        <h3 className='mb-4'>Организуйте свадьбу с нашей<br />помощью и создайте воспоминания<br />на всю жизнь</h3>
                        <Button size='lg'>
                            <Link href='#' className={styles.btn__link}>
                            Начать планирование
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PlanWeddingCard;
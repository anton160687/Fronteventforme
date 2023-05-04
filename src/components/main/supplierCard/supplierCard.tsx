import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "@/styles/main/Main.module.scss";
import RegisterBtn from "@/components/main/registerBtn/registerBtn";


function SupplierCard() {

    return (
        <section className={styles.py64 + ' bg-secondary'}>
            <Container className="mx-auto">
                <Row className={styles.mobile__column}>
                    <Col className={styles.main__supplier_text}>
                        <h2>Стань нашим исполнителем</h2>
                        <p className='pb-3 fs-lg'>Длинная подпись предоставляемой услуги на несколько небольших строчек</p>
                        <RegisterBtn/>
                    </Col>
                    <Col>
                            <Image
                                src='/img/photo.jpg'
                                width={636}
                                height={606}
                                alt='Photo'
                            />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SupplierCard;
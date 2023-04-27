import Link from "next/link";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "@/styles/catalog/Catalog.module.scss";
import { array1, array2, array3, array4, array5, array6, array7, array8 } from "@/mocks/catalogbotom";


function BotomFilters() {

    function renderColumn(title: string, array: { path: string, desc: string, quantity: number }[]): JSX.Element {
        return (
            <ul className={styles.catalog__btmfilters}>
                <h5 className={styles.catalog__btmfilters_header}>{title}</h5>
                {array.map((item, i) => (
                    <li key={i}>
                        <Link href={`?${item.path}`} className={styles.catalog__btmfilters_link}>
                            <p>{item.desc}</p>
                            <p>{item.quantity}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    function renderLastColumn(array: { path: string, desc: string, quantity: number }[]): JSX.Element {
        return (
            <ul className={styles.catalog__btmfilters}>
                {array.map((item, i) => (
                    <li key={i}>
                        <Link href={`?${item.path}`} className={styles.catalog__btmfilters_link}>
                            <h5 className={styles.catalog__btmfilters_header}>{item.desc}</h5>
                            <p>{item.quantity}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className={styles.catalog__btmfilters_container}>
            <Row className={styles.catalog__btmfilters_row}>
                <Col>{renderColumn('Банкетные залы', array1)}</Col>
                <Col>{renderColumn('Шатры', array2)}</Col>
                <Col>{renderColumn('Лофты', array3)}</Col>
                <Col>{renderColumn('Отели', array4)}</Col>
            </Row>
            <Row>
                <Col>{renderColumn('Рестораны', array5)}</Col>
                <Col>{renderColumn('Кафе', array6)}</Col>
                <Col>{renderColumn('Коттеджи', array7)}</Col>
                <Col>{renderLastColumn(array8)}</Col>
            </Row>
        </div>
    )
}

export default BotomFilters;
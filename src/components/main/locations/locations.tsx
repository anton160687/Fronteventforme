import Container from "react-bootstrap/Container";
import styles from "@/styles/main/Main.module.scss";
import Link from "next/link";
import {properties} from "@/mocks/locations";



export function Locations({array=properties, title='Лучшие локации'}): JSX.Element {

    // для страницы нужно только 5 элементов
    const shortData = Object.assign(array);
    shortData.length = 5;

    return (
        <Container as='section' className="mx-auto w-75">
            <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h3 className={styles.main__subtitle + ' h3 mb-sm-0'}>{title}</h3>
                </div>


             <div className={styles.grid}>
                 {shortData.map((property, index) => (
                     <div className={`${styles.place_wrapper} ${index === 0 ? styles.place_wrapper_1 : ''}`} key={index}>
                         <Link href={property.href}>
                             <div className={styles.place_wrapper__gradient}> </div>
                             <img src={property.image} alt={property.title}/>
                         </Link>
                     </div>
                 ))}

             </div>
            </section>
        </Container>
    )
}
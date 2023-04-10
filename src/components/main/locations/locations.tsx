import Container from "react-bootstrap/Container";
import styles from "@/styles/main/Main.module.scss";
import Link from "next/link";
import {properties} from "@/mocks/locations";


const shortData = Object.assign(properties);
shortData.length = 5;

export function Locations(): JSX.Element {

    return (
        <Container as='section' className="mx-auto w-75">
            <section className={styles.my124 + ' pt-2 pt-sm-0 pb-md-2'}>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h3 className={styles.main__subtitle + ' h3 mb-sm-0'}>Лучшие локации</h3>
                </div>


             <div className={styles.grid}>
                 {shortData.map((property, index) => (
                     <div className={`${styles.place_wrapper} ${index === 0 ? styles.place_wrapper_1 : ''}`} key={index}>
                         <Link href={property.href}>
                             <img src={property.image} alt={property.title}
                             />
                         </Link>
                     </div>
                 ))}

             </div>
            </section>
        </Container>
    )
}
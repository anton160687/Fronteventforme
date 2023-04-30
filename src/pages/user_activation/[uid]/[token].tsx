import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Container, Spinner } from "react-bootstrap";
import styles from '@/styles/sign/Sign.module.scss';

export default function finishRegistrationPage() {
    const router = useRouter();
    //здесь ловим динамические параметры из адресной строки
    const {uid, token} = router.query;
    //пока что оставить логирование для проверки правильности данных, потом удалить
    console.log(router.query);
    console.log(uid);
    console.log(token);

    const handleRedirect = () => {
        router.push('/')
      }

    useEffect(()=> {
        if (uid && token) {
            // здесь - отправка данных на бэк
            // handleRedirect();
        }
        
    }, [uid, token])
    
    return (
        <Container className={styles.auth__container} >
            <Spinner className={styles.auth__spinner} />
        </Container>
    )
}
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Container, Spinner } from "react-bootstrap";
import styles from '@/styles/sign/Sign.module.scss';


export default function finishRegistrationPage() {
    const router = useRouter();
    //здесь ловим динамические параметры из адресной строки
    const uid = router.query.uid as string;
    const token = router.query.token as string;

    async function sendAuthData() {
        let data = {
            uid: uid,
            token: token
        }
        console.log(data);
        //пока что URL в хардкоде, потом надо будет поместить рабочее URL в env
        //и, поскольку это нерабочее URL, сейчас запрос уходит вникуда и возвращает 404, но это пока нормально
        let response = await fetch('127.0.0.1:8000/auth/users/activation/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
        )
        //стоит подумать о том, какие здесь м.б. обработчики ошибок. Пока что просто логирование
        if (response.ok) {
            console.log('авторизация прошла успешно');
        } else {
            console.log(response);
        }
    }

    function handleRedirect() {
        router.push('/')
    }

    useEffect(() => {
        if (uid && token) {
            //сохраняем токен в localStorage
            localStorage.setItem("token", token);
            // здесь - отправка данных на бэк
            sendAuthData();
            //перенаправляем на главную или иную страницу, пока отключено
            // handleRedirect();
        }
    }, [uid, token])

    return (
        <Container className={styles.auth__container} >
            <Spinner className={styles.auth__spinner} />
        </Container>
    )
}
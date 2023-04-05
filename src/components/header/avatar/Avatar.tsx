import React from 'react';
import Image from 'next/image';
import styles from '@/styles/header/Avatar.module.scss';

type AvatarProps = {
    role: string,
    first_name: string,
    second_name: string,
    avatar: string,
}

function Avatar({ role, first_name, second_name, avatar }: AvatarProps) {
    //на тот случай, если путь к ЛК будет меняться в зависимости от роли
    let path = '';
    switch (role) {
        case 'bride':
            path = '#';
            break;
        case 'provider':
            path = '#';
            break;
    }
    
    return (
        <a href={path} className={styles.avatar__link}>
            <Image src={avatar? avatar : '/img/header/avatar.svg'}  width={40} height={40} alt='avatar' />
            <p className={styles.avatar__name}>{first_name}&nbsp;{second_name}</p>
        </a>
    )
}

export default Avatar;
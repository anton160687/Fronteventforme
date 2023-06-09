import React from 'react';
import Image from 'next/image';
import styles from '@/styles/header/Avatar.module.scss';
import { Paths } from '@/constant';

type AvatarProps = {
  first_name?: string;
  last_name?: string;
  username?: string;
  avatar?: string;
  is_bride?: boolean;
};

function Avatar({
  is_bride,
  first_name,
  last_name,
  username,
  avatar,
}: AvatarProps) {
  let path = Paths.Home;

  //на тот случай, если путь к ЛК будет меняться в зависимости от роли
  // switch (is_bride) {
  //   case true:
  //     path = '#';
  //     break;
  //   case false:
  //     path = '#';
  //     break;
  // }

  return (
    <a href={path} className={styles.avatar__link}>
      <Image
        className={styles.avatar__image}
        src={avatar || '/img/header/avatar.svg'}
        width={40}
        height={40}
        alt="avatar"
      />
      <p className={styles.avatar__name}>
        {username || 'Имя Фамилия'}
        {/* {first_name || 'Имя'}&nbsp;{last_name || 'Фамилия'} */}
      </p>
    </a>
  );
}

export default Avatar;

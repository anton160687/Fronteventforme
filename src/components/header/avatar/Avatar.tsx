import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/header/Avatar.module.scss';
import { Paths } from '@/constant';
import { Button } from 'react-bootstrap';

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

  return (
    <Button
    // @ts-ignore: bootstrap bag*
      as={Link}
      href={is_bride ? Paths.AccBride : Paths.AccBusiness}
      className={`${styles.avatar__btn} ms-auto me-auto`}
      itemProp="url"
    >
      <Image
        className={styles.avatar__image}
        src={avatar || '/img/header/avatar.svg'}
        width={40}
        height={40}
        alt="avatar"
      />
      <p className={styles.avatar__name}>
        {/* {username || 'Имя Фамилия'} */}
        {first_name || 'Имя'}&nbsp;{last_name || 'Фамилия'}
      </p>
    </Button>
  );
}

export default Avatar;

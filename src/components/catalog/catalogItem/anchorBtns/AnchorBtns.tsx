import { Button } from 'react-bootstrap';
import styles from '@/styles/catalog/Catalog.module.scss';

export default function AnchorBtns() {
  const anchorList = [
    {
      id: 1,
      text: 'Обзор',
      anchor: '#review',
    },
    {
      id: 2,
      text: 'Территория',
      anchor: '#territory',
    },
    {
      id: 3,
      text: 'Детали',
      anchor: '#details',
    },
    {
      id: 4,
      text: 'Альбом',
      anchor: '#album',
    },
    {
      id: 5,
      text: 'Карты',
      anchor: '#map',
    },
    {
      id: 6,
      text: 'Отзывы',
      anchor: '#comments',
    },
  ];

  return (
    <div className={styles.anchor__btns}>
      {anchorList.map(({ id, text, anchor }) => (
        <Button href={anchor} key={id} className={styles.anchor__btn}>
          {text}
        </Button>
      ))}
    </div>
  );
}

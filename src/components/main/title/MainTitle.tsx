import styles from '@/styles/main/Main.module.scss';

type MainTitleProps = {
  title: string;
  subtitle: string;
};

export function MainTitle({ title, subtitle }: MainTitleProps): JSX.Element {
  return (
    <div className='d-flex flex-column align-items-center'>
      <p className={styles.main__subtitle}>{subtitle}</p>
      <h2 className={styles.main__title}>{title}</h2>
    </div>
  );
}

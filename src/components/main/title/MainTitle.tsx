import styles from '@/styles/main/Main.module.scss';

type MainTitleProps = {
  title: string;
  subtitle: string;
};

export function MainTitle({ title, subtitle }: MainTitleProps): JSX.Element {
  return (
    <div className={`${styles.main__title_container} d-flex flex-column`}>
      <p className={styles.main__subtitle}>{subtitle}</p>
      <h2 className={styles.main__title}>{title}</h2>
    </div>
  );
}

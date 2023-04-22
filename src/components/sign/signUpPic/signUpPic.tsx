import Link from 'next/link';
import ImageLoader from '../../_finder/ImageLoader';
import styles from '@/styles/sign/Sign.module.scss';
import { PATHS } from '@/constant';

export default function SignUpPic() {
  return (
    <div className="col-md-6 border-end-md p-2 p-sm-5">
      <h3 className="h3 mb-4 mb-sm-5">
        Присоединяйтесь к EventForMe. Получите доступ к услугам:
      </h3>
      <div style={{ fontWeight: '500' }}>
        <p>
          <i className="fi-check-circle fs-lg me-1 text-primary"></i>Расчет
          бюджета
        </p>
        <p>
          <i className="fi-check-circle fs-lg me-1 text-primary"></i>Подробный
          чек-лист для события
        </p>
        <p>
          {' '}
          <i className="fi-check-circle fs-lg me-1 text-primary"></i>Расчет
          бюджета
        </p>
        <p>И множество других :)</p>
      </div>
      <div className="d-flex justify-content-center">
        <ImageLoader
          src="/img/signup.svg"
          width={344}
          height={404}
          alt="Illusration"
        />
      </div>
      <div className="mt-4 mt-sm-5">
        Уже есть аккаунт?{'\u00A0'}
        <Link className={styles.link} href={PATHS.signIn}>
          Войти
        </Link>
      </div>
    </div>
  );
}

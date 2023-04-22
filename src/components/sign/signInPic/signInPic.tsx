import Link from 'next/link';
import ImageLoader from '../../_finder/ImageLoader';
import styles from '@/styles/sign/Sign.module.scss';
import { PATHS } from '@/constant';

export default function SignInPic(): JSX.Element {
  return (
    <div className="col-md-6 border-end-md p-2 p-sm-5">
      <h2 className="h3 mb-4 mb-sm-5">
        Привет. <br />
        Рады видеть вас снова!
      </h2>
      <div className="d-flex justify-content-center">
        <ImageLoader
          src="/img/signin.svg"
          width={344}
          height={292}
          alt="Illusration"
        />
      </div>
      <div className="mt-4 mt-sm-5">
        Еще нет аккаунта на портале?{'\u00A0'}
        <br />
        <Link className={styles.link} href={PATHS.signUp}>
          Регистрация
        </Link>
      </div>
    </div>
  );
}

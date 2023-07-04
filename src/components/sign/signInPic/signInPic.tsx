import Link from 'next/link';
import ImageLoader from '../../_finder/ImageLoader';
import styles from '@/styles/sign/Sign.module.scss';
import { Paths } from '@/constant';

export default function SignInPic(): JSX.Element {
  return (
    <>
      <h3 className="h3 mb-4 mb-sm-5 pb-md-5 pb-3 text-center text-lg-start">
        Привет. <br />
        Рады видеть вас снова!
      </h3>
      <div className="justify-content-center d-none d-md-flex">
        <ImageLoader
          src="/img/signin.svg"
          width={344}
          height={292}
          alt="Девушка с большим телефоном"
        />
      </div>
      <div className="mt-4 mt-sm-5 mb-4 mb-md-auto text-center text-lg-start">
        Еще нет аккаунта на портале?{'\u00A0'}
        <br />
        <Link className={styles.link} href={Paths.SignUp}>
          Регистрация
        </Link>
      </div>
    </>
  );
}

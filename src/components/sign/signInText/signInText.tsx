import Link from 'next/link';
import styles from '@/styles/sign/Sign.module.scss';

export default function SignInText() {
  return (
    <div className=" text-center text-lg-start">
      <h4 className="h4 mb-4 text-center text-lg-start">
        На вашу почту была выслана ссылка для сброса пароля.
      </h4>
      <p>Если вы не получили письмо, проверьте папку &quot;Спам&quot;</p>
      <Link className={styles.link} href="#">
        Выслать ссылку повторно
      </Link>
    </div>
  );
}

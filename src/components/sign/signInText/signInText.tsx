import Link from 'next/link';
import styles from '@/styles/sign/Sign.module.scss';
import { PATHS } from '@/constant';

export default function SignInText() {
  return (
    <div style={{ marginLeft: '5rem' }}>
      <h4 className="h4 mb-4 mb-sm-5">
        На вашу почту была выслана ссылка для сброса пароля.
      </h4>
      <p>Если вы не получили письмо, проверьте папку &quot;Спам&quot;</p>
      <Link className={styles.link} href="#">
        Выслать ссылку повторно
      </Link>
    </div>
  );
}

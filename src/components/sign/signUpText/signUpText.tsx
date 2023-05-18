import Link from 'next/link';
import styles from '@/styles/sign/Sign.module.scss';
import { Paths } from '@/constant';

export default function SignUpText() {
  return (
    <div style={{ marginLeft: '5rem' }}>
      <h4 className="h4 mb-4 mb-sm-5">
        Для завершения регистрации перейдите по ссылке на вашей электронной
        почте
      </h4>
      <p>Если вы не получили письмо, проверьте папку &quot;Спам&quot;</p>
      <Link className={styles.link} href="#">
        Выслать ссылку повторно
      </Link>
    </div>
  );
}

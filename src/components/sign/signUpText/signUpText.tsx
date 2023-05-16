import Link from 'next/link';
import styles from '@/styles/sign/Sign.module.scss';
import { PATHS } from '@/constant';

export default function SignUpText() {
  return (
    <div className=" text-center text-lg-start">
      <h4 className="h4 mb-4">
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

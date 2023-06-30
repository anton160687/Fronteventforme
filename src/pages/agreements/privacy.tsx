import { Container } from 'react-bootstrap';
import styles from '@/styles/sign/Sign.module.scss';
import { privacy } from '@/mocks/agreements';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';

type PrivacyProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};
function Privacy({ setIsShown }: PrivacyProps): JSX.Element {
  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <Container
      className={`mt-5 px-5 px-lg-0 w-lg-75 mx-auto ` + styles.privacy}
    >
      <h2 className="mb-md-4 mb-3 pb-md-2">Политика Конфиденциальности</h2>
      <h6>
        Политика в отношении обработки и конфиденциальности персональных данных
        интернет – портала eventforme.ru
      </h6>
      <ol className={styles.list + ' ps-0'}>
        {privacy.map((item) => (
          <li className="h4" key={item.title}>
            <span className={styles.title}>{item.title}</span>
            <ol>
              {item.body && (
                <ul className="fs-base">
                  {item.body.map((text) => (
                    <li key={text}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              )}
              {item.kids &&
                item.kids.map((kid, index) => (
                  <div key={typeof kid === 'string' ? kid : index}>
                    {typeof kid === 'string' ? (
                      <li className="h6">
                        <span className="fs-base fw-normal">{kid}</span>
                      </li>
                    ) : (
                      <li className="h6">
                        {kid.name && (
                          <span className="fw-normal">{kid.name}</span>
                        )}
                        {kid.text && (
                          <ul className="fs-base mt-3">
                            {kid.text.map((text) => (
                              <li key={text}>
                                <p>{text}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )}
                  </div>
                ))}
            </ol>
          </li>
        ))}
        <li className="h4">
          <span className={styles.title}>Заключительные положения</span>
          <ol>
            <li className="h6">
              <span className="fs-base fw-normal">
                Пользователь может получить любые разъяснения по интересующим
                вопросам, касающимся обработки его персональных данных,
                обратившись к Оператору с помощью электронной почты{' '}
                <Link
                  href="mailto:info@eventforme.ru"
                  className="text-decoration-none"
                >
                  info@eventforme.ru
                </Link>
                .
              </span>
            </li>
            <li className="h6">
              <span className="fs-base fw-normal">
                В данном документе будут отражены любые изменения политики
                обработки персональных данных Оператором. Политика действует
                бессрочно до замены ее новой версией.
              </span>
            </li>
            <li className="h6">
              <span className="fs-base fw-normal">
                Актуальная версия Политики в свободном доступе расположена в
                сети Интернет по адресу:{' '}
                <Link
                  href="https://eventforme.ru/politika-konfidentsialnosti/"
                  className="text-decoration-none"
                  target="_blank"
                >
                  https://eventforme.ru/politika-konfidentsialnosti/
                </Link>
                .
              </span>
            </li>
          </ol>
        </li>
      </ol>
    </Container>
  );
}
export default Privacy;

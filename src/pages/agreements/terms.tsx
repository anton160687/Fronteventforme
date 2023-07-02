import { Container } from 'react-bootstrap';
import styles from '@/styles/sign/Sign.module.scss';
import { terms1, terms2 } from '@/mocks/agreements';
import Link from 'next/link';
import { useEffect } from 'react';
import { useBreadcrumbs } from '@/components/context/useBreadcrumbs';

function Terms(): JSX.Element {
  let {
    setIsShown,
    isShown,
    dynamicBreadCrumbTitle,
    setDynamicBreadCrumbTitle,
  } = useBreadcrumbs();
  useEffect(() => {
    if (!isShown) {
      setIsShown(true);
    }
    if (dynamicBreadCrumbTitle.length > 0) {
      setDynamicBreadCrumbTitle('');
    }
  }, []);

  const renderText = (item: string[]) => {
    return (
      <ul className="fs-base">
        {item.map((text: string) => (
          <li key={text}>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Container className={`px-5 px-lg-0 mt-5 w-lg-75 mx-auto ` + styles.terms}>
      <h2 className="mb-md-4 mb-3 pb-md-2">Пользовательское Соглашение</h2>
      <>
        <p>
          Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует
          отношения между (далее EVENTFORME или Администрация) с одной стороны и
          пользователем интернет – портала с другой.
        </p>
        <p>
          Интернет – портал EVENTFORME не является средством массовой
          информации. Используя интернет – портал, Вы соглашаетесь с условиями
          данного соглашения.
        </p>
        <p>
          Под использованием интернет-портала понимается регистрация на
          интернет-портале путем самостоятельного внесения Пользователем
          персональных данных через специальные формы на интернет-портале
        </p>
        <p>
          <strong>
            Если Вы не согласны с условиями данного соглашения, не используйте
            интернет – портал EVENTFORME!
          </strong>
        </p>
      </>
      <ol className={styles.list + ' ps-0'}>
        {terms1.map((item) => (
          <li className="h4" key={item.title}>
            <h4 className="d-inline-block mb-md-4 mb-3">{item.title}</h4>
            <ol>
              {item.text.map((item) => (
                <li className="h6" key={item.subtitle}>
                  <h6 className="d-inline-block mb-3">{item.subtitle}</h6>
                  {renderText(item.text)}
                </li>
              ))}
            </ol>
          </li>
        ))}
        {terms2.map((item) => (
          <li className="h4" key={item.title}>
            <h4 className="d-inline-block mb-md-4 mb-3">{item.title}</h4>
            {renderText(item.text)}
          </li>
        ))}
        <li className="h4">
          <h4 className="d-inline-block mb-md-4 mb-3">
            Условия действия Соглашения
          </h4>
          <ul>
            <li className="fs-base">
              <p>
                Данное Соглашение вступает в силу при регистрации на интернет –
                портале.
              </p>
            </li>
            <li className="fs-base">
              <p>
                Соглашение перестает действовать при появлении его новой версии
                в разделе условия использования по адресу:{' '}
                <Link
                  href="https://eventforme.ru/faq/vash-akkaunt/kakovy-usloviya-ispolzovaniya-eventforme/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  https://eventforme.ru/faq/vash-akkaunt/kakovy-usloviya-ispolzovaniya-eventforme/
                </Link>
                .
              </p>
            </li>
            <li className="fs-base">
              <p>
                Администрация оставляет за собой право в одностороннем порядке
                изменять данное соглашение по своему усмотрению.
              </p>
            </li>
            <li className="fs-base">
              <p>
                При любом изменении данного соглашения, администрация будет
                оповещать пользователей удобным для нее способом путем
                публикации новой версии соглашения по адресу:{' '}
                <Link
                  href="https://eventforme.ru/faq/vash-akkaunt/kakovy-usloviya-ispolzovaniya-eventforme/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  https://eventforme.ru/faq/vash-akkaunt/kakovy-usloviya-ispolzovaniya-eventforme/
                </Link>
                .
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </Container>
  );
}
export default Terms;

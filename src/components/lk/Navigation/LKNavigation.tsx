import { useEffect, useState } from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CardNav from '@/components/_finder/CardNav';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import { LKSections, LKSectionsTitles, Paths } from '@/constant';
import Avatar from '@/components/_finder/Avatar';
import styles from '@/styles/lk/Lk.module.scss';
import { LkSectionsType } from '@/types/lkSectionsType';
import { Container, Spinner } from 'react-bootstrap';
import { User } from '@/types/user';
import { useRouter } from 'next/router';

type LKNavigationProps = {
  //временно опциональные
  accountPageTitle?: string;
  children?: JSX.Element;
};

function LKNavigation({ accountPageTitle, children }: LKNavigationProps): JSX.Element {
  const router = useRouter();
  const user: (User | undefined) = useSelector(selectUser);
  //если роль будет приходить с бэка - убрать
  const [role, setRole] = useState<boolean>();

  useEffect(() => {
    let stored = localStorage.getItem('role');
    if (stored) {
      //перенаправление в ЛК другой роли, если человек вручную вбил адрес не того ЛК
      if (!!(+stored) && router.pathname.substring(0, 12) === Paths.AccBusiness) {
        router.push(Paths.AccBride);
      }
      if (!(+stored) && router.pathname.substring(0, 9) === Paths.AccBride) {
        router.push(Paths.AccBusiness);
      }
      setRole(!!(+stored))
    }
  }, []);
  
  const link = role ? Paths.AccBride : Paths.AccBusiness;
  const [open, setOpen] = useState(false);
  type SectionRenderProps = {
    index: number;
    section: LkSectionsType;
  };
  const sectionRender = ({ section, index }: SectionRenderProps) => {
    return (
      <CardNav.Item
        key={index}
        href={link + section.link}
        icon={section.icon}
        active={accountPageTitle === section.title ? true : false}
        className=""
      >
        {section.title}
      </CardNav.Item>
    );
  };

  return (
    <Container>
      {role === undefined ?
        <div className='w-100 h-100 d-flex justify-content-center mt-5'>
          <Spinner className='centered' />
        </div>
        :
        <section className="px-5 px-lg-0 pb-lg-4 mb-sm-2 mx-lg-auto mx-5">
          <Breadcrumb className="mb-4 pt-md-3">
            <Breadcrumb.Item linkAs={Link} href={Paths.Home}>
              Главная
            </Breadcrumb.Item>
            <Breadcrumb.Item
              linkAs={Link}
              active={accountPageTitle ? false : true}
              href={link}
            >
              Личный кабинет
            </Breadcrumb.Item>
            {accountPageTitle && (
              <Breadcrumb.Item active>{accountPageTitle}</Breadcrumb.Item>
            )}
          </Breadcrumb>

          <Row>
            {/* Sidebar (Account nav) */}
            <Col md={12} lg={4} className="pe-xl-4">
              <div className="card card-body border-0 shadow-sm pb-1 me-lg-1">
                {/* <div className="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4"> */}
                <div className="d-flex flex-column flex-lg-row align-items-center w-100">
                  <Col lg={2} className="p-0">
                    <Avatar
                      img={{
                        src: `${user?.avatar || '/img/header/avatar.svg'}`,
                        alt: `${user?.username || 'Имя Фамилия'}`,
                      }}
                      size={[48, 48]}
                      rounded={true}
                      light={false}
                      className=""
                    />
                  </Col>
                  <Col lg={9} className="p-0 ps-1">
                    <h2 className="fs-lg mb-0">
                      {user?.username || 'Имя Фамилия'}
                    </h2>
                  </Col>
                </div>
                <Col md={12} lg={10} className="ms-md-auto mt-3 mb-4 ps-1">
                  <ul
                    className={
                      'd-flex flex-column d-lg-block  align-items-center w-100 list-unstyled fs-sm  mb-0 ' +
                      styles.userInfo
                    }
                  >
                    <li>
                      <a
                        href={`tel:${user?.phone || ''}`}
                        className="nav-link fw-normal p-0"
                      >
                        <i className="fi-phone opacity-60 me-2"></i>
                        {user?.phone || 'Данные не предоставлены'}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${user?.email || ''}`}
                        className="nav-link fw-normal p-0"
                      >
                        <i className="fi-mail opacity-60 me-2"></i>
                        {user?.email || 'Данные не предоставлены'}
                      </a>
                    </li>
                  </ul>
                </Col>
                <Button
                  // @ts-ignore: bootstrap bag*
                  as={Link}
                  href={!role ? "/lk/business/add" : "#"}
                  size="lg"
                  className="w-100 mb-4"
                >
                  <i className="fi-plus me-2"></i>
                  {!role ? "Добавить бизнес" : "Начать планирование свадьбы"}
                </Button>

                <Button
                  variant="outline-secondary"
                  className="d-block d-lg-none w-100 mb-3"
                  onClick={() => setOpen(!open)}
                  aria-controls="account-menu"
                  aria-expanded={open}
                >
                  <i className="fi-align-justify me-2"></i>
                  Меню
                </Button>
                <Collapse in={open} className="d-lg-block">
                  <div id="account-menu">
                    <CardNav className="pt-3">
                      {LKSections.map((section, index) =>
                        role ?
                          section.title !== LKSectionsTitles.Offers &&
                          sectionRender({ section, index })
                          : section.title !== LKSectionsTitles.Wishlist &&
                          sectionRender({ section, index })
                      )}
                    </CardNav>
                  </div>
                </Collapse>
              </div>
            </Col>

            {/* Page content */}
            <Col
              md={12}
              lg={8}
              className="position-relative ps-md-3 ps-lg-5 ps-0 mt-5 mt-lg-0"
            >
              <h2>{accountPageTitle}</h2>
              {children}
            </Col>
          </Row>
        </section>
      }

    </Container>
  );
}

export default LKNavigation;

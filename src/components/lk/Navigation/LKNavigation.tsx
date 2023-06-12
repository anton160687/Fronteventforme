import { useState } from 'react';
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
import { Alert, Container } from 'react-bootstrap';

type LKNavigationPropd = {
  //временно опциональные
  accountPageTitle?: string;
  children?: JSX.Element;
  alert?: string;
};

function LKNavigation({
  accountPageTitle,
  children,
  alert,
}: LKNavigationPropd): JSX.Element {
  const user = useSelector(selectUser);

  // State to control Collapse
  const [open, setOpen] = useState(false);
  const is_bride = false;
  const link = is_bride ? Paths.Bride : Paths.Business;

  type SectionRenderProps = {
    index: number;
    section: LkSectionsType;
  };

  const sectionRender = ({ section, index }: SectionRenderProps) => {
    return (
      <CardNav.Item
        key={index}
        href={Paths.Account + link + section.link}
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
      <section className="pt-5 pb-lg-4 mt-5 mb-sm-2 mx-lg-auto mx-5">
        <Breadcrumb className="mb-4 pt-md-3">
          <Breadcrumb.Item linkAs={Link} href={Paths.Home}>
            Главная
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={Link}
            active={accountPageTitle ? false : true}
            href={Paths.Account + link}
          >
            Аккаунт
          </Breadcrumb.Item>
          {accountPageTitle && (
            <Breadcrumb.Item active>{accountPageTitle}</Breadcrumb.Item>
          )}
        </Breadcrumb>

        <Row>
          {/* Sidebar (Account nav) */}
          <Col md={5} lg={4} className="pe-xl-4 mb-5">
            <div className="card card-body border-0 shadow-sm pb-1 me-lg-1">
              {/* <div className="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4"> */}
              <div className="d-flex flex-column flex-md-row align-items-center w-100">
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
                <Col md={9} className="p-0 ps-1">
                  <h2 className="fs-lg mb-0">
                    {user?.username || 'Имя Фамилия'}
                  </h2>
                </Col>
              </div>
              <Col md={11} lg={10} className="ms-md-auto mt-3 mb-4 ps-1">
                <ul
                  className={
                    'd-flex flex-column d-md-block  align-items-center w-100 list-unstyled fs-sm  mb-0 ' +
                    styles.textGray800
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
              {/* </div> */}
              <Button as={Link} href="#" size="lg" className="w-100 mb-4">
                <i className="fi-plus me-2"></i>
                Добавить бизнес
              </Button>
              <Button
                variant="outline-secondary"
                className="d-block d-md-none w-100 mb-3"
                onClick={() => setOpen(!open)}
                aria-controls="account-menu"
                aria-expanded={open}
              >
                <i className="fi-align-justify me-2"></i>
                Меню
              </Button>
              <Collapse in={open} className="d-md-block">
                <div id="account-menu">
                  <CardNav className="pt-3">
                    {LKSections.map((section, index) =>
                      is_bride
                        ? section.title !== LKSectionsTitles.Offers &&
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
          <Col md={7} lg={8} className="mb-5 position-relative">
            {alert && (
              <Alert variant="info" className="d-flex mb-4">
                <i className="fi-alert-circle me-2 me-sm-3 lead"></i>
                <div> {alert}</div>
              </Alert>
            )}
            <h2>{accountPageTitle}</h2>
            {children}
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default LKNavigation;

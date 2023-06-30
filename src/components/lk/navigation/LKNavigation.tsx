import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/user/userSlice';
import Link from 'next/link';
import LkNavigationLogout from './LKNaviagtionLogout';
import LKNavigationCard from './LKNavigationCard';
import {
  Container,
  Spinner,
  Row,
  Col,
  Breadcrumb,
  Button,
  Collapse,
} from 'react-bootstrap';
import {
  LKBusinessSections,
  LKBrideSections,
  LKSectionsTitles,
  Paths,
  URL,
} from '@/constant';
import { LkSectionsType } from '@/types/lkSectionsType';
import styles from '@/styles/lk/Lk.module.scss';
import Image from 'next/image';
import CustomBreadCrumbs from '@/components/breadcrumbs/CustomBreadcrumbs';

type LKNavigationProps = {
  accountPageTitle?: string;
  children?: JSX.Element;
};

function LKNavigation({
  //с этой логикой хлебных крошек можно убрать accountPageTitle
  accountPageTitle,
  children,
}: LKNavigationProps): JSX.Element {
  const user = useSelector(selectUser);
  const link = user.is_bride ? Paths.AccBride : Paths.AccBusiness;
  const [open, setOpen] = useState(false);

  function renderLKNavbar(lkSections: LkSectionsType[]) {
    return lkSections.map(({ id, title, path, icon }) => (
      <LKNavigationCard
        key={id}
        href={link + path}
        icon={icon}
        active={accountPageTitle === title ? true : false}
        text={title}
      />
    ));
  }

  return (
    <main>
      <Container>
        {user.is_bride === undefined ? (
          <div className="w-100 h-100 d-flex justify-content-center mt-5">
            <Spinner className="centered" />
          </div>
        ) : (
          <section className="pb-lg-4 mb-sm-2 mx-lg-auto mx-5">
            <CustomBreadCrumbs />

            <Row>
              {/* Sidebar (Account nav) */}
              <Col md={12} lg={4} className="pe-xl-4">
                <div className="card card-body border-0 shadow-sm pb-1 me-lg-1">
                  {/* <div className="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4"> */}
                  <div className="d-flex flex-column flex-lg-row align-items-center w-100">
                    <Col lg={2} className="p-0">
                      <Image
                        src={`${user.avatar || '/img/header/avatar.svg'}`}
                        width={48}
                        height={48}
                        alt={`${user.username || 'Имя Фамилия'}`}
                        className="rounded"
                      />
                    </Col>
                    <Col lg={9} className="p-0 ps-1">
                      <h2 className="fs-lg mb-0">
                        {user.username || 'Имя Фамилия'}
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
                          href={`tel:${user.phone || ''}`}
                          className="nav-link fw-normal p-0"
                        >
                          <i className="fi-phone opacity-60 me-2"></i>
                          {user.phone || 'Данные не предоставлены'}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${user.email || ''}`}
                          className="nav-link fw-normal p-0"
                        >
                          <i className="fi-mail opacity-60 me-2"></i>
                          {user.email || 'Данные не предоставлены'}
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Button
                    // @ts-ignore: bootstrap bag*
                    as={Link}
                    href={!user.is_bride ? '/lk/business/add' : '#'}
                    size="lg"
                    className="w-100 mb-4"
                  >
                    <i className="fi-plus me-2"></i>
                    {!user.is_bride
                      ? 'Добавить бизнес'
                      : 'Начать планирование свадьбы'}
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
                      <nav className="card-nav pt-3">
                        {user.is_bride
                          ? renderLKNavbar(LKBrideSections)
                          : renderLKNavbar(LKBusinessSections)}
                        <LkNavigationLogout />
                      </nav>
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
        )}
      </Container>
    </main>
  );
}

export default LKNavigation;

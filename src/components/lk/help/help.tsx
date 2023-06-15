import {
  Button,
  Card,
  Col,
  FormCheck,
  Nav,
  Row,
  Tab,
  Fade,
} from 'react-bootstrap';
import PricePlan from '../pricePlan/PricePlan';

function Help() {
  return (
    <>
      <p className="mt-3">
        Выберите комфортный для вас тариф и продвигайте свои бизнесы.
      </p>

      {/* Tabs */}
      <Tab.Container defaultActiveKey="month" transition={Fade}>
        {/* Nav tabs */}
        <Nav variant="tabs" navbar={true}>
          <Nav.Item>
            <Nav.Link eventKey="month" className="fw-bold py-2 px-4">
              Месяц
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="quarter" className="fw-bold py-2 px-4">
              Квартал
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="year" className="fw-bold py-2 px-4">
              Год
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tabs content (panes) */}
        <Tab.Content>
          <Tab.Pane eventKey="month">
            {/* Pricing plans */}
            <Row>
              <Col sm={6} md={4} className="mb-4">
                <PricePlan
                  image={{
                    src: '/img/lk/horn.svg',
                    width: 63.64,
                    height: 72,
                    alt: 'Гудок',
                  }}
                  title="Главная"
                  price="$5"
                  period="month"
                  options={[
                    { title: '3x more views', available: true },
                    { title: 'Top ads for 3 days', available: true },
                    { title: 'Moving up the list', available: true },
                    { title: 'Featured badge in the results', available: true },
                  ]}
                  button={{
                    href: '#',
                    title: 'Выбрать план',
                    variant: 'outline-primary',
                    props: {
                      onClick: () =>
                        console.log('You have chosen Главная plan'),
                    },
                  }}
                />
              </Col>
              <Col sm={6} md={4} className="mb-4">
                <PricePlan
                  image={{
                    src: '/img/lk/target.svg',
                    width: 72,
                    height: 72,
                    alt: 'Мишень',
                  }}
                  title="Каталог"
                  price="$15"
                  period="month"
                  options={[
                    { title: '3x more views', available: true },
                    { title: 'Top ads for 3 days', available: true },
                    { title: 'Moving up the list', available: true },
                    {
                      title: 'Featured badge in the results',
                      available: false,
                    },
                  ]}
                  button={{
                    href: '#',
                    title: 'Выбрать план',
                    variant: 'primary',
                    props: {
                      onClick: () =>
                        console.log('You have chosen Каталог plan'),
                    },
                  }}
                />
              </Col>
              <Col md={4} className="mb-4">
                <PricePlan
                  image={{
                    src: '/img/lk/rocket.svg',
                    width: 72,
                    height: 87.81,
                    alt: 'Ракета',
                  }}
                  title="Блог"
                  price="$25"
                  period="month"
                  options={[
                    { title: '3x more views', available: true },
                    { title: 'Top ads for 3 days', available: true },
                    { title: 'Moving up the list', available: true },
                    { title: 'Featured badge in the results', available: true },
                  ]}
                  button={{
                    href: '#',
                    title: 'Выбрать план',
                    variant: 'outline-primary',
                    props: {
                      onClick: () => console.log('You have chosen Блог plan'),
                    },
                  }}
                />
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="quarter">
            <p>Тут тоже будут тарифы</p>
          </Tab.Pane>
          <Tab.Pane eventKey="year">
            <p>И тут будут тарифы</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Other services */}
      <h2 className="h3 pt-2 mb-4">Дополнительные опции</h2>
      <Card className="card-hover card-body px-4 mb-2">
        <FormCheck id="ad-option-1">
          <FormCheck.Input type="checkbox" defaultChecked />
          <FormCheck.Label className="d-sm-flex w-100 align-items-center justify-content-between">
            <span className="d-block px-1">
              <span className="d-block h6 mb-2">
                Check and certify my ad by Finder experts
              </span>
              <span className="d-block mb-2 mb-sm-0">
                Ads with Certified badge get <strong>10x</strong> more views
              </span>
            </span>
            <span className="d-block h4 mb-0">$35</span>
          </FormCheck.Label>
        </FormCheck>
      </Card>
      <Card className="card-hover card-body px-4 mb-2">
        <FormCheck id="ad-option-2">
          <FormCheck.Input type="checkbox" />
          <FormCheck.Label className="d-sm-flex w-100 align-items-center justify-content-between">
            <span className="d-block px-1">
              <span className="d-block h6 mb-2">
                10 lifts to the top of the list (daily, 7 days)
              </span>
              <span className="d-block mb-2 mb-sm-0">
                Your ad will be seen by as many people as possible
              </span>
            </span>
            <span className="d-block h4 mb-0">$20</span>
          </FormCheck.Label>
        </FormCheck>
      </Card>
      <Card className="card-hover card-body px-4 mb-2">
        <FormCheck id="ad-option-3">
          <FormCheck.Input type="checkbox" />
          <FormCheck.Label className="d-sm-flex w-100 align-items-center justify-content-between">
            <span className="d-block px-1">
              <span className="d-block h6 mb-2">Featured ad for 7 days</span>
              <span className="d-block mb-2 mb-sm-0">
                Ads with Featured badge get <strong>5x</strong> more views
              </span>
            </span>
            <span className="d-block h4 mb-0">$15</span>
          </FormCheck.Label>
        </FormCheck>
      </Card>
      <div className="text-end pt-4 pb-2">
        <div className="h4 mb-4">Всего: $35</div>
        <Button size="lg" variant="outline-primary me-2">
          Не продвигать
        </Button>
        <Button size="lg" variant="primary btn-lg">
          Продвигать
        </Button>
      </div>
    </>
  );
}
export default Help;

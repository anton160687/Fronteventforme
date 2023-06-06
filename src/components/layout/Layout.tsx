import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Container } from 'react-bootstrap';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

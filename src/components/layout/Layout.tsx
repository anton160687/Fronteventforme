import Header from '../header/Header';
import Footer from '../footer/Footer';
import Breadcrumbs from '../breadCrumbs/BreadCrumbs';
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

import Header from '../header/Header';
import Footer from '../footer/Footer';
import CustomBreadCrumbs from '../breadcrumbs/CustomBreadcrumbs';
import { useBreadcrumbs } from '../context/useBreadcrumbs';
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  let { isShown } = useBreadcrumbs();

  return (
    <div>
      <Header />
      {isShown && <CustomBreadCrumbs />}
      {children}
      <Footer />
    </div>
  );
}

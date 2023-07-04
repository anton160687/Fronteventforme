import LKNavigation from '@/components/lk/Navigation/LKNavigation';
import { LKSectionsTitles, Paths } from '@/constant';
import withAuth from '@/hoc/withAuth';

function PaymentPage() {
  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Payment}
      LKBreadcrumbs={{ name: LKSectionsTitles.Payment, path: Paths.AccPayment }}
    >
      <></>
    </LKNavigation>
  );
}

export default withAuth(PaymentPage);

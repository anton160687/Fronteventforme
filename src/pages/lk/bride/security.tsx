import LKNavigation from '@/components/lk/navigation/LKNavigation';
import ChangePassword from '@/components/lk/changePassword/ChangePassword';
import { LKSectionsTitles, Paths } from '@/constant';
import withAuth from '@/hoc/withAuth';

function SecurityPage() {
  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Security}
      LKBreadcrumbs={{
        name: LKSectionsTitles.Security,
        path: Paths.AccSecurity,
      }}
    >
      <ChangePassword />
    </LKNavigation>
  );
}
export default withAuth(SecurityPage);

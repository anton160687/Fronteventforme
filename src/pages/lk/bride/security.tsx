import LKNavigation from '@/components/lk/navigation/LKNavigation';
import ChangePassword from '@/components/lk/changePassword/ChangePassword';
import { LKSectionsTitles } from '@/constant';
import withAuth from '@/hoc/withAuth';

function SecurityPage() {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Security}>
      <ChangePassword />
    </LKNavigation>
  );
}
export default withAuth(SecurityPage);

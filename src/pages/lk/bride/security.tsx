import LKNavigation from '@/components/lk/navigation/LKNavigation';
import ChangePassword from '@/components/lk/changePassword/ChangePassword';
import { LKSectionsTitles } from '@/constant';

function SecurityPage() {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Security}>
      <ChangePassword />
    </LKNavigation>
  );
}
export default SecurityPage;

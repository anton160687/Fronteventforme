import LKNavigation from '@/components/lk/Navigation/LKNavigation';
import Help from '@/components/lk/help/help';
import { LKSectionsTitles } from '@/constant';
import withAuth from '@/hoc/withAuth';

function BusinessHelpPage() {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Help}>
      <Help />
    </LKNavigation>
  );
}
export default withAuth(BusinessHelpPage);

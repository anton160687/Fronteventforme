import Help from '@/components/lk/help/help';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles } from '@/constant';
import withAuth from '@/hoc/WithAuth';

function BrideHelpPage() {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Help}>
      <Help />
    </LKNavigation>
  );
}
export default withAuth(BrideHelpPage);

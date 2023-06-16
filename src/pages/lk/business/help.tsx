import Help from '@/components/lk/help/help';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles } from '@/constant';

function BusinessHelpPage() {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Help}>
      <Help />
    </LKNavigation>
  );
}
export default BusinessHelpPage;

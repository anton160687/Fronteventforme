import Help from '@/components/lk/help/help';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles } from '@/constant';

function BrideHelp() {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Help}>
      <Help />
    </LKNavigation>
  );
}
export default BrideHelp;

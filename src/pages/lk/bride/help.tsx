import LKNavigation from '@/components/lk/navigation/LKNavigation';
import Help from '@/components/lk/help/help';
import { LKSectionsTitles, Paths } from '@/constant';
import withAuth from '@/hoc/withAuth';

function BrideHelpPage() {
  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Help}
      LKBreadcrumbs={{
        name: LKSectionsTitles.Help,
        path: Paths.AccHelp,
      }}
    >
      <Help />
    </LKNavigation>
  );
}
export default withAuth(BrideHelpPage);

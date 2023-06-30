import Help from '@/components/lk/help/help';
import LKNavigation from '@/components/lk/navigation/LKNavigation';
import { LKSectionsTitles } from '@/constant';
import withAuth from '@/hoc/withAuth';
import { Dispatch, SetStateAction } from 'react';

type BrideHelpPageProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

function BrideHelpPage({ setIsShown }: BrideHelpPageProps) {
  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Help}
      setIsShown={setIsShown}
    >
      <Help />
    </LKNavigation>
  );
}
export default withAuth(BrideHelpPage);

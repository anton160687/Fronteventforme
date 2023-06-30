import LKNavigation from '@/components/lk/navigation/LKNavigation';
import ChangePassword from '@/components/lk/changePassword/ChangePassword';
import { LKSectionsTitles } from '@/constant';
import withAuth from '@/hoc/withAuth';
import { Dispatch, SetStateAction } from 'react';

type SecurityPageProps = {
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

function SecurityPage({ setIsShown }: SecurityPageProps) {
  return (
    <LKNavigation
      accountPageTitle={LKSectionsTitles.Security}
      setIsShown={setIsShown}
    >
      <ChangePassword />
    </LKNavigation>
  );
}
export default withAuth(SecurityPage);

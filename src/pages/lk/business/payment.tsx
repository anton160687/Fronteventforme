import LKNavigation from "@/components/lk/navigation/LKNavigation";
import { LKSectionsTitles } from "@/constant";
import withAuth from "@/hoc/withAuth";

function PaymentPage () {
  return (
    <LKNavigation accountPageTitle={LKSectionsTitles.Payment}>
      <>
      </>
    </LKNavigation>
  )
}

export default withAuth(PaymentPage);
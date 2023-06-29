import { Dispatch, SetStateAction } from 'react';

type BreadcrumbsMediatorProps = {
  setIsShown?: Dispatch<SetStateAction<boolean>>;
  setDynamicBreadcrumb?: Dispatch<SetStateAction<string>>;
  customIsShown?: boolean;
  dynamicBreadcrumbTitle?: string;
};

function BreadcrumbsMediator({
  setIsShown,
  setDynamicBreadcrumb,
  customIsShown,
  dynamicBreadcrumbTitle,
}: BreadcrumbsMediatorProps) {
  console.log('customIsShown', customIsShown);

  if (customIsShown !== undefined && setIsShown !== undefined) {
    setIsShown(customIsShown);
  }

  return <></>;
}

export default BreadcrumbsMediator;

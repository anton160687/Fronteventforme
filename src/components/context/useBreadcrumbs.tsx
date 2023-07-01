import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const defaultValue = {
  isShown: true,
  dynamicBreadCrumbTitle: '',
  setIsShown: () => {},
  setDynamicBreadCrumbTitle: () => {},
};

type BreadcrumbsContextType = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
  dynamicBreadCrumbTitle: string;
  setDynamicBreadCrumbTitle: Dispatch<SetStateAction<string>>;
};

// Создаём context
const BreadcrumbsContext = createContext<BreadcrumbsContextType>(defaultValue);

// Это кастомный hook, нужен для того, что бы не импортировать в каждый компонент, где используется context, сам context
export const useBreadcrumbs = () => useContext(BreadcrumbsContext);

type BreadcrumbsProviderProps = {
  children: JSX.Element;
};

// Обёртка над context
export const BreadcrumbsProvider = ({ children }: BreadcrumbsProviderProps) => {
  const [isShown, setIsShown] = useState<boolean>(defaultValue.isShown);
  const [dynamicBreadCrumbTitle, setDynamicBreadCrumbTitle] = useState<string>(
    defaultValue.dynamicBreadCrumbTitle
  );

  return (
    <BreadcrumbsContext.Provider
      value={{
        isShown,
        setIsShown,
        dynamicBreadCrumbTitle,
        setDynamicBreadCrumbTitle,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};

import { BreadCrumbsLinks } from '@/constant';
import { useEffect, useMemo, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

type CustomBreadCrumbsProps = {
  dynamicBreadCrumbTitle?: string;
};

const generatePathParts = (pathStr: string) => {
  // Удаляем  query parameters
  const pathWithoutQuery = pathStr.split('?')[0];
  // Удаляем / и пустые сущности между
  return pathWithoutQuery.split('/').filter((v) => v.length > 0);
};

const getTextGenerator = (link: string) => {
  const title = Object.values(BreadCrumbsLinks).find(
    (BreadCrumbsLink) => BreadCrumbsLink.link.substring(1) === link
  );

  if (title !== undefined && title) return title.name;
  else return 'Не найдено';
};

function CustomBreadCrumbs({ dynamicBreadCrumbTitle }: CustomBreadCrumbsProps) {
  const router = useRouter();

  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const pathNestedRoutes = generatePathParts(router.asPath);

      // Создаем одну крошу
      const crumblist = pathNestedRoutes.map((subpath, idx) => {
        // Ссылка до каждой хлебной крошки
        const href = '/' + pathNestedRoutes.slice(0, idx + 1).join('/');

        if (
          dynamicBreadCrumbTitle !== undefined &&
          idx === pathNestedRoutes.length - 1
        ) {
          return {
            href,
            text: dynamicBreadCrumbTitle,
          };
        }

        return {
          href,
          text: getTextGenerator(subpath),
        };
      });

      // Дефолтная ссылка на Главную
      return [
        {
          href: BreadCrumbsLinks.Home.link,
          text: BreadCrumbsLinks.Home.name,
        },
        ...crumblist,
      ];
    },
    [dynamicBreadCrumbTitle, router.asPath]
  );

  return (
    <>
      <Breadcrumb className="mb-4 pt-md-3">
        {breadcrumbs.map((crumb, idx) => (
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        ))}
      </Breadcrumb>
    </>
  );
}

export default CustomBreadCrumbs;

type CrumbProps = {
  text: string;
  href: string;
  last: boolean;
};

function Crumb({ text: defaultText, href, last = false }: CrumbProps) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    setText(defaultText);
  }, [defaultText]);

  return (
    <>
      {text && (
        <Breadcrumb.Item linkAs={Link} href={href} active={last}>
          {text}
        </Breadcrumb.Item>
      )}
    </>
  );
}

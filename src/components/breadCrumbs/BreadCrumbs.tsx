import { BreadCrumbsLinks, Paths } from '@/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useMemo, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import BreadcrumbsMediator from './Mediator';

const findName = (link: string) => {
  const title = Object.values(BreadCrumbsLinks).find(
    (BreadCrumbsLink) => BreadCrumbsLink.link.substring(1) === link
  );

  console.log('title', title);
  if (title !== undefined && title) return title.name;
  else return 'Не найдено';
};

const getTextGenerator = (param: string) => {
  return findName(param);
};

const generatePathParts = (pathStr: string) => {
  // Удаляем  query parameters
  const pathWithoutQuery = pathStr.split('?')[0];
  // Удаляем / и пустые сущности между
  return pathWithoutQuery.split('/').filter((v) => v.length > 0);
};

type NextBreadcrumbsProps = {
  isShown: boolean;
  dynamicBreadcrumb: string;
};

function NextBreadcrumbs({ isShown, dynamicBreadcrumb }: NextBreadcrumbsProps) {
  const router = useRouter();
  // const [isShown, setIsShown] = useState<boolean>(true);
  // const [dynamicBreadcrumb, setDynamicBreadcrumb] = useState<string>('');

  console.log('router', router);
  console.log('NextBreadcrumbs dynamicBreadcrumb', dynamicBreadcrumb);
  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      // Iterate over the list of nested route parts and build a "crumb" object for each one.
      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // We can get the partial nested route for the crumb
        // by joining together the path parts up to this point.
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');

        console.log('subpath', subpath);
        console.log('href', href);

        if (
          pathnameNestedRoutes[idx]?.includes('[') &&
          dynamicBreadcrumb !== undefined
        ) {
          return {
            href,
            text: dynamicBreadcrumb,
          };
        } else {
          // The nested route param'eter and all associated query values (router.query) are passed to a provided getTextGenerator which will return either a null value or a Promise` response that should return the dynamic string to use in the associated breadcrumb.
          return {
            href,
            // textGenerator: getTextGenerator(param),
            text: getTextGenerator(subpath),
          };
        }
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
    [
      dynamicBreadcrumb,
      router.asPath,
      router.pathname,
      // router.query,
      //  getTextGenerator,
      // getDefaultTextGenerator,
    ]
  );

  return (
    <>
      {isShown && (
        <Breadcrumb className="mb-4 pt-md-3">
          {breadcrumbs.map((crumb, idx) => (
            <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
          ))}
        </Breadcrumb>
      )}
    </>
  );
}

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

export default NextBreadcrumbs;

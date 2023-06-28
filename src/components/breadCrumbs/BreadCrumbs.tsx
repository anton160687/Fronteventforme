import { BreadCrumbsLinks, Paths } from '@/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useMemo, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';

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

function NextBreadcrumbs() {
  const router = useRouter();

  console.log('router', router);
  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      // Iterate over the list of nested route parts and build a "crumb" object for each one.
      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // Pull out and convert "[post_id]" into "post_id"
        // const param = pathnameNestedRoutes[idx]
        //   ?.replace('[', '')
        //   ?.replace(']', '');
        const param = asPathNestedRoutes[idx]
          ?.replace('[', '')
          ?.replace(']', '');
        // We can get the partial nested route for the crumb
        // by joining together the path parts up to this point.
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
        console.log('param', param);
        console.log('href', href);

        // The nested route param'eter and all associated query values (router.query) are passed to a provided getTextGenerator which will return either a null value or a Promise` response that should return the dynamic string to use in the associated breadcrumb.
        return {
          href,
          // textGenerator: getTextGenerator(param),
          text: getTextGenerator(param),
        };
      });

      // Add in a default "Home" crumb for the top-level
      return [
        {
          href: BreadCrumbsLinks.Home.link,
          text: BreadCrumbsLinks.Home.name,
        },
        ...crumblist,
      ];
    },
    [
      router.asPath,
      router.pathname,
      // router.query,
      //  getTextGenerator,
      // getDefaultTextGenerator,
    ]
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

import { BreadCrumbsLinks } from '@/constant';
import React, { useEffect, useMemo, useState } from 'react';
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

      const title = getTextGenerator(subpath);

      return {
        href,
        text: title,
      };
    });

    const crumblistWithoutNull = crumblist.filter(
      (crumb) => crumb.text.length > 0
    );
    // Дефолтная ссылка на Главную
    return [
      {
        href: BreadCrumbsLinks.Home.link,
        text: BreadCrumbsLinks.Home.name,
      },
      ...crumblistWithoutNull,
    ];
  }

  const breadcrumbs = useMemo(
    () => generateBreadcrumbs(),
    [dynamicBreadCrumbTitle, router.asPath]
  );

  return (
    <>
      <nav aria-label="breadcrumb" className="mb-4pt-md-3">
        <ol
          className="breadcrumb"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((crumb, idx) => (
            <Crumb
              {...crumb}
              index={idx}
              key={idx}
              last={idx === breadcrumbs.length - 1}
            />
          ))}
        </ol>
      </nav>
    </>
  );
}

export default CustomBreadCrumbs;

type CrumbProps = {
  text: string;
  href: string;
  last: boolean;
  index: number;
};

function Crumb({ text: defaultText, href, last = false, index }: CrumbProps) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    setText(defaultText);
  }, [defaultText]);

  return (
    <>
      {last ? (
        <li
          className="breadcrumb-item active"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <span itemProp="name">{text}</span>
          <meta itemProp="position" content={`${index + 1}`} />
        </li>
      ) : (
        <li
          className="breadcrumb-item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a href={href} itemProp="url">
            <span itemProp="name">{text}</span>
          </a>
          <meta itemProp="position" content={`${index + 1}`} />
        </li>
      )}
    </>
  );
}

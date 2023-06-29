import { BreadCrumbsLinks } from '@/constant';
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';

type SchemaType = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: CrumbSchemaType[];
};

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

  const schemaData: SchemaType = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };

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
      <Script
        id="breadcrumbsJSON"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
              schemaData={schemaData}
              last={idx === breadcrumbs.length - 1}
            />
          ))}
        </ol>
      </nav>
    </>
  );
}

export default CustomBreadCrumbs;

type CrumbSchemaType = {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
};

type CrumbProps = {
  text: string;
  href: string;
  last: boolean;
  index: number;
  schemaData: SchemaType;
};

function Crumb({ text, href, last = false, index, schemaData }: CrumbProps) {
  //const [text, setText] = useState(defaultText);

  // useEffect(() => {
  //   setText(defaultText);
  // }, [defaultText]);

  const crumbSchema: CrumbSchemaType = {
    '@type': 'ListItem',
    position: index + 1,
    name: text,
  };

  if (!last) {
    crumbSchema.item = href;
  }

  schemaData.itemListElement.push(crumbSchema);

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
          <Link href={href} itemProp="item">
            <span itemProp="name">{text}</span>
          </Link>
          <meta itemProp="position" content={`${index + 1}`} />
        </li>
      )}
    </>
  );
}

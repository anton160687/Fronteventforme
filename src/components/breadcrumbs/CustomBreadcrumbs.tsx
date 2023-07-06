import React from 'react';
import CustomCrumb from './CustomCrumb';

export type SchemaType = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: CrumbSchemaType[];
};

export type CrumbSchemaType = {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
};

type CustomBreadcrumbsProps = {
  breadcrumbs: { path: string; name: string }[];
};

const url = 'http//eventforme.ru';

function CustomBreadcrumbs({ breadcrumbs }: CustomBreadcrumbsProps) {
  const schemaData: SchemaType = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };

  function generateBreadcrumbs() {
    return breadcrumbs.map((breadcrumb, index) => {
      const crumbSchema: CrumbSchemaType = {
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb.name,
      };

      const href = breadcrumbs
        .map((item) => item.path)
        .slice(0, index + 1)
        .join('');

      //Если ссылки делать относительные, то гугл ругается на id
      if (index !== breadcrumbs.length - 1) {
        crumbSchema.item = url + href.slice(1);
      }

      schemaData.itemListElement.push(crumbSchema);

      return {
        name: breadcrumb.name,
        //условие нужно, чтобы не было //, т.к. у нас все ссылки начинаются с /, и ссылка на Главную тоже /
        path: index === 0 ? href : href.slice(1),
      };
    });
  }

  const newBreadcrumbs = generateBreadcrumbs();

  return (
    <>
      <nav className="mb-4 pt-md-3 container px-5">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <ol
          className="breadcrumb"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {newBreadcrumbs.map((crumb, idx) => (
            <CustomCrumb
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

export default CustomBreadcrumbs;

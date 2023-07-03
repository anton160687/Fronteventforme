import React, { useMemo, useState } from 'react';
import CustomCrumb from './CustomCrumb';
import { API } from '@/constant';

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

function CustomBreadcrumbs({ breadcrumbs }: CustomBreadcrumbsProps) {
  const schemaData: SchemaType = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };

  let link = '';

  const testBr = breadcrumbs[1].path;
  console.log('testBr', testBr);

  const newBreadcrumbs = useMemo(
    function generateBreadcrumbs() {
      console.log('breadcrumbs start', breadcrumbs);
      return breadcrumbs.map((breadcrumb, index) => {
        const crumbSchema: CrumbSchemaType = {
          '@type': 'ListItem',
          position: index + 1,
          name: breadcrumb.name,
        };

        // if (index === 1) {
        //   const newPath = breadcrumb.path.substring(1);
        //   breadcrumb.path = newPath;
        //   console.log('breadcrumb 1', breadcrumb);
        // }

        const href = breadcrumbs
          .map((item) => item.path)
          .slice(0, index + 1)
          .join('');
        // link += breadcrumb.path;
        console.log('href', href);

        //Если ссылки делать относительные, то гугл ругается на id
        if (index !== breadcrumbs.length - 1) {
          crumbSchema.item = API!.slice(0, API!.length - 1) + href;
        }

        schemaData.itemListElement.push(crumbSchema);

        return {
          name: breadcrumb.name,
          path: index === 0 ? href : href.slice(1),
        };
      });
    },
    [breadcrumbs]
  );
  console.log('schemaData', schemaData);
  console.log('newBreadcrumbs', newBreadcrumbs);

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

import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import CustomCrumb from './CustomCrumb';
import { generateBreadcrumbs } from '../helpers';
import { useBreadcrumbs } from '../context/useBreadcrumbs';

function CustomBreadCrumbs() {
  const router = useRouter();
  let { dynamicBreadCrumbTitle } = useBreadcrumbs();

  const breadcrumbs = useMemo(
    () => generateBreadcrumbs(router.asPath, dynamicBreadCrumbTitle),
    [dynamicBreadCrumbTitle, router.asPath]
  );

  return (
    <>
      <nav className="mb-4pt-md-3">
        <ol
          className="breadcrumb"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((crumb, idx) => (
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

export default CustomBreadCrumbs;

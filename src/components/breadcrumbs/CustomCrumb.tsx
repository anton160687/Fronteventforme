import Link from 'next/link';
import { useEffect } from 'react';

type CrumbProps = {
  text: string;
  href: string;
  last: boolean;
  index: number;
};

function CustomCrumb({ text, href, last = false, index }: CrumbProps) {
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

export default CustomCrumb;

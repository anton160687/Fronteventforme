import Link from 'next/link';
import { SchemaType } from './CustomBreadcrumbs';
import { Dispatch, SetStateAction, useEffect } from 'react';

export type CrumbSchemaType = {
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
  setSchemaData: Dispatch<SetStateAction<SchemaType>>;
};

function CustomCrumb({
  text,
  href,
  last = false,
  index,
  schemaData,
  setSchemaData,
}: CrumbProps) {
  const crumbSchema: CrumbSchemaType = {
    '@type': 'ListItem',
    position: index + 1,
    name: text,
  };

  if (!last) {
    crumbSchema.item = href;
  }

  // schemaData.itemListElement.push(crumbSchema);
  useEffect(() => {
    setSchemaData((prev) => ({
      ...prev,
      itemListElement: [...prev.itemListElement, crumbSchema],
    }));
  }, []);

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

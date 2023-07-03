import Link from 'next/link';

export type CrumbProps = {
  name: string;
  path: string;
  last: boolean;
  index: number;
};

function CustomCrumb({ name, path, last = false, index }: CrumbProps) {
  return (
    <>
      {last ? (
        <li
          className="breadcrumb-item active"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <span itemProp="name">{name}</span>
          <meta itemProp="position" content={`${index + 1}`} />
        </li>
      ) : (
        <li
          className="breadcrumb-item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href={path} itemProp="item">
            <span itemProp="name">{name}</span>
          </Link>
          <meta itemProp="position" content={`${index + 1}`} />
        </li>
      )}
    </>
  );
}

export default CustomCrumb;

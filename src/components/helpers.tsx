import { BreadCrumbsLinks } from '@/constant';
import { Card } from 'react-bootstrap';

export function renderCardText(title: string, description: string) {
  return (
    <Card.Text className="d-flex align-items-center justify-content-between fs-6">
      <span className="m-0">{title}</span>
      <span className="m-0 text-end">
        <strong>{description}</strong>
      </span>
    </Card.Text>
  );
}

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

export function generateBreadcrumbs(
  path: string,
  dynamicBreadCrumbTitle?: string
) {
  const pathNestedRoutes = generatePathParts(path);

  // Создаем одну крошку
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
      text:
        (href === '/lk/business' && path !== '/lk/business') ||
        (href === '/lk/bride' && path !== '/lk/bride')
          ? ''
          : getTextGenerator(subpath),
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

export function getBreadCrumbsSchema(
  breadcrumbs: {
    href: string;
    text: string;
  }[]
) {
  const schemaData: SchemaType = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };

  breadcrumbs.forEach((breadcrumb, index) => {
    const crumbSchema: CrumbSchemaType = {
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.text,
      item: breadcrumb.href,
    };

    // const crumbSchema: CrumbSchemaType = {
    //   '@type': 'ListItem',
    //   position: index + 1,
    //   name: text,
    // };

    // if (!last) {
    //   crumbSchema.item = href;
    // }

    schemaData.itemListElement.push(crumbSchema);
  });

  return schemaData;
}

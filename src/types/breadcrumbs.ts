type SchemaType = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: CrumbSchemaType[];
};

type CrumbSchemaType = {
  '@type': 'ListItem';
  position: number;
  name: string;
  item?: string;
};

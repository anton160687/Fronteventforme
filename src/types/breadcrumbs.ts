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
  '@id'?: string;
};

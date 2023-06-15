import { useState } from 'react';
import ImageLoader from '@/components/_finder/ImageLoader';

type ArticleWeddingsProps = {
  title: string;
  description: string;
  pathImg: string;
  dateText: string;
};

function ArticleWeddings({
  title,
  description,
  pathImg,
  dateText,
}: ArticleWeddingsProps) {
  //* для дополнительного текста
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const new_description = description.slice(0, 120) + '...';

  return (
    <figure
      // style={{ maxWidth: '350px' }}
      className=" card-hover text-decoration-none text-dark rounded-3 px-2 w-75 w-md-50"
    >
      <ImageLoader
        src={pathImg}
        width={416}
        height={230}
        quality={100}
        layout="responsive"
        alt={`Обложка статьи ${title}`}
        className="card-img-top"
      />
      <figcaption className="p-3">
        <p className="border-0 text-primary my-1">
          <i className="fi-calendar text-primary me-2" />
          {dateText}
        </p>
        <p className="fs-7 my-2">
          <strong>{title}</strong>
        </p>
        <p
          className="fs-sm m-0"
          style={isDetailsOpen ? { display: 'none' } : {}}
        >
          {new_description}
          <span
            className="text-primary ms-3 cursor-pointer"
            onClick={() => setIsDetailsOpen((prev) => !prev)}
            style={{ fontWeight: '500' }}
          >
            {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
          </span>
        </p>
        <p
          className="fs-sm m-0"
          style={!isDetailsOpen ? { display: 'none' } : {}}
        >
          {description}
          <span
            className="text-primary ms-3 cursor-pointer"
            style={{ fontWeight: '500' }}
            onClick={() => setIsDetailsOpen((prev) => !prev)}
          >
            {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
          </span>
        </p>
      </figcaption>
    </figure>
  );
}

export default ArticleWeddings;

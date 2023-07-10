import ImageLoader from '@/components/_finder/ImageLoader';
import { showMoreRender } from '@/components/helpers';
import { useState } from 'react';

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
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
    return (
      <article>
    <figure className="text-decoration-none text-dark rounded-3 w-auto card card-body border-0 shadow-sm card-hover p-0">
      <ImageLoader
        src={pathImg}
        width={416}
        height={230}
        quality={100}
        layout="responsive"
        alt={`Обложка статьи ${title}`}
        className="card-img-top"
      />
      <figcaption className="p-4">
        <p className="border-0 text-primary my-1">
          <i className="fi-calendar text-primary me-2" />
          {dateText}
        </p>
         <h3 className='my-2 fs-base'>{title}</h3>
        {showMoreRender(description, 120, isDetailsOpen, setIsDetailsOpen)}
      </figcaption>
            </figure>
        </article>
  );
}

export default ArticleWeddings;

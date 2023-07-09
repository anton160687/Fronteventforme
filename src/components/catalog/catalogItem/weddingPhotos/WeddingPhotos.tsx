import Link from 'next/link';
import Image from 'next/image';

type WeddingPhotosProps = {
  title: string;
  description: string;
  pathImg: string;
};

function WeddingPhotos({ title, description, pathImg }: WeddingPhotosProps) {
  return (
    <Link
      id="album"
      href="#"
      style={{ maxWidth: '196px' }}
      className="text-center card-hover text-decoration-none text-dark card card-body border-0 shadow-sm card-hover rounded-3 p-0"
    >
      <figure>
        <Image src={pathImg} alt="Обложка" width={200} height={100} />
        <figcaption>
          <p className="fs-7 my-2">
            <strong>{title}</strong>
          </p>
          <p className="fs-sm mb-0">{description}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

export default WeddingPhotos;

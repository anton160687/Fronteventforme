import ImageLoader from '@/components/_finder/ImageLoader';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

type optionsType = {
  title: string;
  available: boolean;
};

type imageType = {
  width: number;
  height: number;
  alt: string;
  src: string;
};

type buttonType = {
  href: string;
  variant: string;
  title: string;
  props: any;
};

type PricePlanProps = {
  options: optionsType[];
  image: imageType;
  title: string;
  price: string;
  period: string;
  button: buttonType;
};

function PricePlan({
  options,
  image,
  title,
  price,
  period,
  button,
}: PricePlanProps) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <div
          className={`text-center mt-2 ${
            image.height > 72 ? 'mb-4 pb-2' : 'mb-5'
          }`}
        >
          <ImageLoader
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </div>
        <h3
          className="h5 text-center mb-1 text-dark"
          style={{ fontWeight: '500' }}
        >
          {title}
        </h3>
        <div className="d-flex align-items-end justify-content-center mb-4">
          <div className="h1 mb-0">{price}</div>
          <div className="pb-2 ps-2">/{period}</div>
        </div>

        <ul
          className="list-unstyled d-block mb-0 mx-auto"
          style={{ maxWidth: '16rem' }}
        >
          {options.map((option, indx) => {
            return (
              <li key={indx}>
                {option.available ? (
                  <div key={indx} className="d-flex">
                    <i className="fi-check text-primary fs-sm mt-1 me-2"></i>
                    <span>{option.title}</span>
                  </div>
                ) : (
                  <div key={indx} className="d-flex text-muted">
                    <i className="fi-x fs-xs mt-2 me-2"></i>
                    <span>{option.title}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer py-2 border-0">
        <div className="border-top text-center pt-4 pb-3">
          <Button
            //  @ts-ignore: bootstrap bag
            as={Link}
            size="sm"
            href={button.href}
            className="rounded-pill"
            variant={button.variant}
            {...button.props}
          >
            {button.title}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default PricePlan;

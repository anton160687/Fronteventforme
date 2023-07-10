import { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from '@/styles/catalog/places/Places.module.scss';
import { showMoreRender } from '@/components/helpers';

type TextDetailsProps = {
  description: string;
};

function TextDetails({ description }: TextDetailsProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <Card id="details" className={'border-0 ' + styles.mb40}>
      {description.length > 0 && (
        <Card.Body className="p-0">
          <Card.Title as="h2" className="mb-3 fs-4">
            Детали площадки
          </Card.Title>

          {showMoreRender(description, 128, isDetailsOpen, setIsDetailsOpen)}
        </Card.Body>
      )}
    </Card>
  );
}

export default TextDetails;

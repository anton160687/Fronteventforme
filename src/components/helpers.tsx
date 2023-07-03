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

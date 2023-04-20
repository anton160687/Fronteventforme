import Form from 'react-bootstrap/Form';
import PasswordToggle from '../../_finder/PasswordToggle';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/main/Main.module.scss';

export default function SignUpForm(): JSX.Element {
  let path = useRouter().pathname;
  let inCatalog = /^\/catalog/.test(path);

  // Form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="si-email" className="mb-4">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>
      <Form.Group className="mb-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <Form.Label htmlFor="si-password" className="mb-0">
            Password
          </Form.Label>
          <Link href="#" className="fs-sm">
            Forgot password?
          </Link>
        </div>
        <PasswordToggle
          id="si-password"
          placeholder="Enter password"
          required
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="primary w-100">
        Sign in
      </Button>
    </Form>
  );
}

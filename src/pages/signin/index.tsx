import Container from 'react-bootstrap/Container';
import SocialMedia from '../../components/sign/socialMedia/socialMedia';
import SignInPic from '../../components/sign/signInPic/signInPic';
import SignInForm from '../../components/sign/signInForm/signInForm';
import React from 'react';

export default function SignIn(): JSX.Element {
  return (
    <Container as="section" className="mx-auto w-75">
      {/* Page wrapper */}
      <main className="page-wrapper">
        <div className="container-fluid d-flex h-100 align-items-center justify-content-center">
          {/* Sign in card */}
          <div
            className="card card-body"
            style={{ maxWidth: '1040px', border: 'none' }}
          >
            <div className="row mx-0 align-items-center">
              <SignInPic />
              <div className="col-md-6 px-2 pt-2 pb-4 px-sm-6 pb-sm-5 pt-md-5">
                <SocialMedia />
                <SignInForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

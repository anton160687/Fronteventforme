import React from 'react';
import Container from 'react-bootstrap/Container';
import SocialMedia from '../../components/sign/socialMedia/socialMedia';
import SignInPic from '../../components/sign/signInPic/signInPic';
import SignInForm from '../../components/sign/signInForm/signInForm';

export default function SignIn(): JSX.Element {
  return (
    <main>
      <Container as="section" className="mx-auto w-75 w-md-50 w-lg-75">
        <section className="page-wrapper">
          <div className="container-fluid h-100 align-items-center justify-content-center">
            <div className="card card-body" style={{ border: 'none' }}>
              <div className="row mx-0 align-items-center">
                <div className="col-lg-6 border-end-lg p-2 pe-lg-5">
                  <SignInPic />
                </div>
                <div className="col-lg-6 px-2 pt-2 pb-4 px-sm-6 pt-md-5 ps-lg-5">
                  <SocialMedia />
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

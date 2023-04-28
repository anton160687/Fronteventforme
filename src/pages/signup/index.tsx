import Container from 'react-bootstrap/Container';
import SocialMedia from '@/components/sign/socialMedia/socialMedia';
import SignUpPic from '@/components/sign/signUpPic/signUpPic';
import { useState } from 'react';
import SignUpForm from '@/components/sign/signUpForm/signUpForm';
import SignUpText from '@/components/sign/signUpText/signUpText';

export default function SignUp(): JSX.Element {
  const [signUpForm, setSignUpForm] = useState(false);
  const [signUpIsDone, setSignUpIsDone] = useState(false);

  return (
    <Container as="section" className="mx-auto w-75">
      <>
        {/* Page wrapper */}
        <main className="page-wrapper">
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center">
            {/* Sign up card */}
            <div
              className="card card-body"
              style={{ maxWidth: '1040px', border: 'none' }}
            >
              <div className="row mx-0 align-items-center">
                <SignUpPic />
                <div className="col-md-6 px-2 pt-2 pb-4 px-sm-6 pb-sm-5 pt-md-5">
                  {!signUpForm && <SocialMedia />}
                  {!signUpIsDone ? (
                    <SignUpForm
                      signUpForm={signUpForm}
                      setSignUpForm={setSignUpForm}
                      setSignUpIsDone={setSignUpIsDone}
                    />
                  ) : (
                    <SignUpText />
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </Container>
  );
}

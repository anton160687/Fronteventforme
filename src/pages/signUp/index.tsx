import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import SocialMedia from '@/components/sign/socialMedia/socialMedia';
import SignUpPic from '@/components/sign/signUpPic/signUpPic';
import { useState } from 'react';
import SignUpForm from '@/components/sign/signUpForm/signUpForm';

export default function SignUp(): JSX.Element {
  // Router
  const router = useRouter();

  const [signUpForm, setSignUpForm] = useState(false);

  return (
    <Container as="section" className="mx-auto w-75">
      <>
        {/* Page wrapper */}
        <main className="page-wrapper">
          <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
            {/* Sign up card */}
            <div
              className="card card-body"
              style={{ maxWidth: '940px', border: 'none' }}
            >
              <div className="row mx-0 align-items-center">
                <SignUpPic />
                <div className="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                  {signUpForm ? (
                    <SignUpForm />
                  ) : (
                    <SocialMedia setSignUpForm={setSignUpForm} />
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

import SignInPic from '@/components/sign/signInPic/signInPic';
import SignInText from '@/components/sign/signInText/signInText';
import Container from 'react-bootstrap/Container';

export default function forgotPassword(): JSX.Element {
  return (
    <Container as="section" className="mx-auto w-75">
      {/* Page wrapper */}
      <main className="page-wrapper">
        <div className="container-fluid d-flex h-100 align-items-center justify-content-center">
          <div
            className="card card-body"
            style={{ maxWidth: '1040', border: 'none' }}
          >
            <div className="row mx-0 align-items-center">
              <SignInPic />
              <div className="col-md-6 px-2 pt-2 pb-4 px-sm-6 pb-sm-5 pt-md-5">
                <SignInText />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

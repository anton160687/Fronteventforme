import Container from 'react-bootstrap/Container';
import { MouseEvent, useState } from 'react';
import React from 'react';
import { CreateUserData } from '@/types/forms';
import SignUpPic from '../signUpPic/signUpPic';
import SignUpForm from '../signUpForm/signUpForm';
import SocialMedia from '../socialMedia/socialMedia';
import SignUpText from '../signUpText/signUpText';
import { CloseButton, Modal } from 'react-bootstrap';

type SignUpProps = {
  onHide: () => void;
  onSwap: (e: MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
};

export default function SignUp({
  onHide,
  onSwap,
  show,
}: SignUpProps): JSX.Element {
  const [signUpForm, setSignUpForm] = useState(false);
  const [signUpIsDone, setSignUpIsDone] = useState(false);

  //нужно в SignUpForm и SignUpText
  const [data, setData] = useState<CreateUserData>({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      className="signup-modal"
    >
      <Modal.Body className="px-0 py-2 py-sm-0">
        <CloseButton
          onClick={onHide}
          aria-label="Close modal"
          className="position-absolute top-0 end-0 mt-3 me-3"
        />

        <div className="row mx-0 align-items-center">
          <div className="col-md-6 border-end-md p-4 p-sm-5">
            <SignUpPic onSwap={onSwap} />
          </div>
          <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
            {!signUpForm && <SocialMedia />}
            {!signUpIsDone ? (
              <SignUpForm
                signUpForm={signUpForm}
                setSignUpForm={setSignUpForm}
                setSignUpIsDone={setSignUpIsDone}
                data={data}
                setData={setData}
              />
            ) : (
              <div className="ps-lg-5">
                <SignUpText data={data} />
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

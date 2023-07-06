import { MouseEvent, useEffect, useState } from 'react';
import React from 'react';
import { CreateUserData } from '@/types/forms';
import { CloseButton, Modal } from 'react-bootstrap';
import SignUpPic from '../signUpPic/SignUpPic';
import SocialMedia from '../socialMedia/SocialMedia';
import SignUpForm from '../signUpForm/SignUpForm';
import SignUpText from '../signUpText/SignUpText';
import RenewPassword from '../renewPassword/RenewPassword';

type SignUpProps = {
  onHide: () => void;
  onSwap: (e: MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
};

function SignUp({ onHide, onSwap, show }: SignUpProps): JSX.Element {
  const [signUpForm, setSignUpForm] = useState(false);
  const [signUpIsDone, setSignUpIsDone] = useState(false);
  const [isPasswordForgotten, setIsPasswordForgotten] = useState(false);

  const initialData: CreateUserData = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  //нужно в SignUpForm и SignUpText
  const [data, setData] = useState<CreateUserData>(initialData);

  useEffect(() => {
    if (!show) {
      setIsPasswordForgotten(false);
      setSignUpIsDone(false);
      setSignUpForm(false);
    }
  }, [show]);

  const conditionalRender = () => {
    if (!signUpIsDone && !isPasswordForgotten)
      return (
        <SignUpForm
          signUpForm={signUpForm}
          setSignUpForm={setSignUpForm}
          setSignUpIsDone={setSignUpIsDone}
          data={data}
          setData={setData}
          onHide={onHide}
          setIsPasswordForgotten={setIsPasswordForgotten}
        />
      );

    if (signUpIsDone)
      return (
        <div className="ps-md-5">
          <SignUpText data={data} />
        </div>
      );

    if (isPasswordForgotten) return <RenewPassword />;
  };

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
            {conditionalRender()}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default SignUp;

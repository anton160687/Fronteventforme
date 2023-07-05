import React, { MouseEvent, useState } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';
import RenewPassword from '../renewPassword/RenewPassword';
import SocialMedia from '../socialMedia/SocialMedia';
import SignInForm from '../signInForm/SignInForm';
import SignInPic from '../signInPic/SignInPic';

type SignInProps = {
  onHide: () => void;
  onSwap: (e: MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
};

function SignIn({ onHide, onSwap, show }: SignInProps): JSX.Element {
  const [isPasswordForgotten, setIsPasswordForgotten] = useState(false);

  function onSwapWithPasswordForgotten(e: MouseEvent<HTMLButtonElement>) {
    onSwap(e);
    setIsPasswordForgotten(false);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="signin-modal"
    >
      <Modal.Body className="px-0 py-2 py-sm-0">
        <CloseButton
          onClick={onHide}
          aria-label="Close modal"
          className="position-absolute top-0 end-0 mt-3 me-3"
        />

        <div className="row mx-0 align-items-center">
          <div className="col-md-6 border-end-md p-4 p-sm-5">
            <SignInPic onSwap={onSwapWithPasswordForgotten} />
          </div>
          <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
            {!isPasswordForgotten ? (
              <>
                <SocialMedia />
                <SignInForm setIsPasswordForgotten={setIsPasswordForgotten} />
              </>
            ) : (
              <RenewPassword />
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default SignIn;

import React, { MouseEvent } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';
import SignInPic from '../signInPic/signInPic';
import SocialMedia from '../socialMedia/socialMedia';
import SignInForm from '../signInForm/signInForm';

type SignInProps = {
  onHide: () => void;
  onSwap: (e: MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
};

export default function SignIn({
  onHide,
  onSwap,
  show,
}: SignInProps): JSX.Element {
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
            <SignInPic onSwap={onSwap} />
          </div>
          <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
            <SocialMedia />
            <SignInForm />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

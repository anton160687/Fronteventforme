import { Dispatch, SetStateAction, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

type DeleteModalProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  message: string;
}

function DeleteModal({ show, setShow, message }: DeleteModalProps) {
  function handleDelete() {
    //здесь будет логика удаления объекта - перекинуть f пропсом
    () => setShow(false);
  }
  return (
    <Modal centered show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Подтвердите действие</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' size='sm' onClick={handleDelete}>
          Удалить
        </Button>
        <Button variant='secondary' size='sm' onClick={() => setShow(false)}>
          Оставить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
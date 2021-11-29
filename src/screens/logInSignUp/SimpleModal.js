import React from 'react';
import Modal from 'react-modal';
import SignInOutContainer from './signInOutContainer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function SimpleModal({ modalIsOpen, toggleModal, ...props }) {


  return (

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      
      style={customStyles}
      contentLabel="ex Modal"
      
    >
      {/* <Modal.Header closeButton>
        <Modal.Title>Regiration</Modal.Title>
      </Modal.Header> */}

      {/* <Modal.Body> */}
        <SignInOutContainer {...props} logInSubmitHandler={props.logInSubmitHandler} signUpSubmitHandler={props.signUpSubmitHandler} userDetails={props.userDetails} setUserDetails={props.setUserDetails} />
      {/* </Modal.Body> */}

    </Modal>

  );
}
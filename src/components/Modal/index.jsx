import React from 'react';
import styles from './modal.module.css';
import Button from '../Button';

function Modal({ handleClose, isOpen, children}) {

    if(!isOpen) {
      return null
    }
  return (
    <div className={styles.overlay}>
        <div className={styles.modal__container}>
            <Button classes={'close'} className={styles.close} onClick={handleClose}>X</Button>
            <div className={styles.childrenContainer}>
              {children}
            </div>
            <Button classes={'send'} onClick={handleClose}>OK</Button>
        </div>
    </div>
  )
}

export default Modal;

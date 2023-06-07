import React from 'react';
import styles from './index.module.css';

const TextArea = ({ text, id, register, error }) => {
  return (
    <div className={styles.textAreaContainer}>
      <label htmlFor={id} className={styles.labelTextArea}>{text}</label>
      <textarea 
        cols="40" rows="5" 
        name={id}
        {...register(id)}
        className = {error && styles.textAreaError}
      >
      </textarea>
      { error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default TextArea;

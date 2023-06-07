import React from 'react';
import styles from './loading.module.css';

const Loading = ({showLoading}) => {

  if (!showLoading) {
    return null
  }
  return (
    <section className={styles.containerLoading}>
      <div className={styles.loader}></div>
    </section>
  );
};

export default Loading;

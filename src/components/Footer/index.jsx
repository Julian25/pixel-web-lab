import React from 'react';
import styles from './footer.module.css';
import Instagram from '../../assets/icons/instagram.png';
import Whatsapp from '../../assets/icons/whatsapp.png';

function Footer() {
  return (
    <div>
      <footer className={styles.container}>
        <div className={styles.links}>
          <a href="https://www.instagram.com/pixel.weblab/" target="blank">
            <img src={Instagram} alt="Instagram logo" />
          </a>
          <a href='https://wa.me/+541138319527' target="blank">
            <img src={Whatsapp} alt="Whatsapp logo" />
          </a>
        </div>
        <div className={styles.copyright}>
          <p>Rosario, Argentina.</p>
          <p>Copyright © 2023 PIXEL WEB LAB</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;

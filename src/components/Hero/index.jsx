import React from 'react';
import styles from './servicios.module.css';

function Hero({title, children, img, alt}) {
    return (
    <div>
        <div className={styles.splash}>
            {children}
            <div className={styles.splash__img}>
                <img src={img} alt={alt} />
            </div>
        </div>
    </div>
    );
}

export default Hero;

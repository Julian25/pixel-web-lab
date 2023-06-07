import React from "react";
import styles from "./button.module.css"



const Button = ({children, classes, onClick}) => {

    if (classes === 'send') {
        classes = `${styles.btn} ${styles.btn__send}`
    } else if (classes === 'close'){
        classes = `${styles.round__btn} ${styles.close_btn}`
    } else {
        classes = `${styles.btn} ${styles.btn__contact}`
    }

    return (
      <div>
        <button
            className={classes}
            {...(onClick !== undefined && {
            onClick: (e) => {
                e.preventDefault();
                onClick();
            },
            })}
        >
            {children}
        </button>
      </div>
    );
};


export default Button;

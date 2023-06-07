import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './card.module.css'
import Button from '../Button';


function Card({title, img, servicio, children, reference, isService, classes}) {

  if( classes === 'left') {
    classes = styles.card3;
  } else {
    classes = styles.card2;
  }

  return (
    <div>
      { isService ? (
        <div className={styles.card}>
          <img src={img} alt={`Icono de ${servicio}`}/>
          <h3>{title}</h3>
          <p>{children}</p>
          <NavLink to={reference}><Button>Mas info</Button></NavLink>
        </div>
      ): (
        <div className={classes}>
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
      )}
    </div>
  )
}

export default Card;

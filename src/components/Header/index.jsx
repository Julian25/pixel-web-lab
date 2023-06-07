import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../../assets/images/logo.png';
import Arrow from '../../assets/icons/drop.png'

function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openMenu = () =>  {
    setShowMenu(!showMenu);
    setShowDropDown(false);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowDropDown(false);
  }

  const openDrop = () => setShowDropDown(!showDropDown);
  let classesNav;
  if (showMenu) {
    classesNav = `${styles.navList} ${styles.open}`;
  } else {
    classesNav = styles.navList;
  }

  let classesSpan;
  if (showMenu) {
    classesSpan= `${styles.nav_toggle} ${styles.open}`;
  } else {
    classesSpan = styles.nav_toggle;
  }

  let classesDrop;
  if (showDropDown) {
    classesDrop = `${styles.dropDown} ${styles.dropDown__open}`;
  } else {
    classesDrop = styles.dropDown;
  }

  let classesServ;

  if(showDropDown) {
    classesServ = `${styles.servicios__img} ${styles.servicios__rotate}`;
  } else {
    classesServ = styles.servicios__img;
  }


  return (
    <div>
      <header className={styles.container}>
        <div className={styles.container__logo}>
          <img src={Logo} alt="Pixel web lab logo" />
          <h1>PIXEL WEB LAB</h1>
          <div className={classesSpan} onClick={openMenu} >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={classesNav}>
          <ul>
            <NavLink className={styles.link} to="/" onClick={closeMenu}>
                <li>Home</li>
            </NavLink>
            <li className={styles.servicios} onClick={openDrop}>
              Servicios
              <img src={Arrow} alt='dropdown menu icon' className={classesServ} />
            </li>
              <ul className={classesDrop}>
                <NavLink to='/servicios/desarrollo-web' className={styles.link} onClick={closeMenu} >
                  <li>Desarrollo Web</li>
                </NavLink>
                <NavLink className={styles.link} to='/servicios/tienda' onClick={closeMenu}>
                  <li>Tienda online</li>
                </NavLink>
              </ul>
            <NavLink className={styles.link} to="/contacto" onClick={closeMenu}>
                <li>Contacto</li>
            </NavLink>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header;

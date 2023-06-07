import React from 'react';
import { Link } from 'react-router-dom';
import styles from './tienda.module.css';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import Website from '../../assets/images/Website-down.png'
import Check from '../../assets/icons/check.png';
import Card from '../../components/card';
import Inicio from '../../assets/images/Inicio.png';
import Diseño from '../../assets/images/disenio.png';
import Demo from '../../assets/images/demo.png';
import Ecommerce from '../../assets/images/ecommerce.png';

function Tienda() {
  return (
    <div>
      <main>
        <Hero img={Website}>
          <div className={styles.hero__text}>
            <h2>
              ¿Tenés un proyecto?
            </h2>
            <Link to='/contacto'>
                <Button>Contactanos</Button>
            </Link>
          </div>
        </Hero>
        <section className={styles.container}>
            <div className={styles.tienda}>
              <div className={styles.tienda__text}>
                <h2>
                    Pone una sucursal de tu negocio en internet
                </h2>
                <p>
                    Diseñamos y desarrollamos tiendas online enfocadas a 
                    conseguir ventas. Nuestros diseños están 
                    pensados para generar una excelente experiencia de usuario.
                </p>
                <Link to='https://wa.me/1138319527' target='_blank'>
                  <Button>Chatea con un experto</Button>
                </Link>
              </div>
                <ul className={styles.checklist}>
                  <li>
                    <img src={Check} alt="icono check" />
                    <p>Diseño personalizado</p>
                  </li>
                  <li>
                    <img src={Check} alt="icono check" />
                    <p>Autogestionable</p>
                  </li>
                  <li>
                    <img src={Check} alt="icono check" />
                    <p>Integrada a redes sociales</p>
                  </li>
                </ul>
            </div>
        </section>
        <section className={styles.container}>
          <h2>
            Proceso para la creación de tu tienda Online
          </h2>
          <div className={styles.tienda__right}>
            <Card title='#01 Inicio del proyecto'>
            Nos contás todos los detalles importantes de
            tu negocio y hablamos de todos los requisitos
            necesarios para tu tienda (estilos, contenidos, etc.).
            </Card>
            <div className={styles.tienda__img}>
              <img src={Inicio} alt="Imagen de una reunion" />
            </div>
          </div>
          <div className={styles.tienda__left}>
            <Card title='#02 Diseñamos' classes='left'>
            Diseñamos y desarrollamos tu tienda basándonos en tus requerimientos.
            Te presentamos el resultado de esta primera ronda de desarrollo
            y nos indicas todas las modificaciones que creas necesarias.
            </Card>
            <div className={styles.tienda__img}>
              <img src={Diseño} alt="Imagen de diseño" />
            </div>
          </div>
          <div className={styles.tienda__right}>
            <Card title='#03 Revisamos'>
            Te presentamos tu tienda desarrollada al 100%
            y hacemos la revisión final. En caso de ser necesario,
            hacemos las últimas modificaciones.
            </Card>
            <div className={styles.tienda__img}>
              <img src={Demo} alt="Imagen de una demo" />
            </div>
          </div>
          <div className={styles.tienda__left}>
            <Card title='#04 Lanzamiento' classes='left'>
              Te enseñamos a autogestionar el contenido de tu tienda y 
              la ponemos online.
            </Card>
            <div className={styles.tienda__img}>
              <img src={Ecommerce} alt="Imagen de cliente comprando" />
            </div>
          </div>
          <Link to='/contacto'>
              <Button>Comenzá hoy</Button>
          </Link>
        </section>
      </main>
    </div>
  )
}

export default Tienda;

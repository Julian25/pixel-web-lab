import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import WebImage from '../../assets/images/Web-Design.png';
import Nosotros from '../../assets/images/nosotros.png';
import Hero from '../../components/Hero';

function Home() {
  return (
    <div>
      <main>
          <Hero img={WebImage} alt='Web en construcción'>
            <div className={styles.hero__text}>
              <h2>
                Construimos soluciones <span>innovadoras</span> para marcas <span>modernas</span>
              </h2>
              <Link to='/contacto'>
                  <Button>Contactanos</Button>
              </Link>
            </div>
          </Hero>
        <section>
          <div className={styles.about}>
            <div className={styles.about__text}>
            <h2>Hola, somos PIXEL WEB LAB</h2>
              <p>
                Nos dedicamos al diseño y desarrollo Web
                para profesionales, empresas y emprendimientos
                a pequeña y gran escala. Creamos soluciones innovadoras
                que integran conocimientos y tecnología para impulsar la evolución
                de tu negocio. Prestamos un servicio de
                excelencia y por eso asumimos el compromiso de 
                interpretar las ideas del cliente y obtener los
                resultados esperados.
              </p>
              <Link to='/contacto'>
                <Button>Contactanos</Button>
              </Link>
            </div>
              <div className={styles.about__img}>
                <img src={Nosotros} alt="imagen ilustrativa de gente trabajando como equipo" />
              </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;

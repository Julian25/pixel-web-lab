import React from 'react';
import styles from './desarrollo.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/card';
import Hero from '../../components/Hero';
import Website from '../../assets/images/Website-down.png'
import App from '../../assets/images/app.png';
import Meeting from '../../assets/images/meeting.png';
import Research from '../../assets/images/research.png';
import Codigo from '../../assets/images/codigo.png';
import Revision from '../../assets/images/revision.png';
import Lanzamiento from '../../assets/images/lanzamiento.png';

function DesarrolloWeb() {
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
          <div className={styles.servicios}>
            <div className={styles.servicios__text}>
              <h2>
                Lleva tu negocio al siguiente nivel
              </h2>
              <p>
                Desarrollamos web adaptadas 100% a tus objetivos. Para esto utilizamos todas las
                tecnologías requeridas para generar las soluciones que aseguran
                el crecimiento de tu negocio.
              </p>
              <Link to='https://wa.me/+541138319527' target='blank'>
                <Button>Chatea con un experto</Button>
              </Link>
            </div>
            <div className={styles.servicios__img}>
              <img src={App} alt="Empleados trabajando en un desarrollo" />
            </div>
          </div> 
        </section>
        <section className={styles.container}>
          <h2>
            Trabajamos de manera ágil
          </h2>
          <div className={styles.servicios__right}>
            <Card title='#01 Hablas con nosotros'>
              Nos contás tu proyecto y te brindamos asesoramiento sobre 
              todo lo que necesites. En esta charla pondremos especial énfasis 
              en todos los requerimientos de tu proyecto.
            </Card>
            <div className={styles.servicios__img}>
              <img src={Meeting} alt="Imagen de una reunion" />
            </div>
          </div>
          <div className={styles.servicios__left}>
            <Card title='#02 Investigamos' classes='left'>
              Una vez establecidos todos tus requerimientos, en esta etapa realizamos
              una minuciosa investigación haciendo foco en tu audiencia 
              para brindarle la mejor experiencia posible. 
            </Card>
            <div className={styles.servicios__img}>
              <img src={Research} alt="Imagen de investigacion" />
            </div>
          </div>
          <div className={styles.servicios__right}>
            <Card title='#03 Desarrollamos'>
              Comenzamos con el desarrollo de tu web teniendo en 
              cuenta todos los estilos y funcionalidades establecidas.
            </Card>
            <div className={styles.servicios__img}>
              <img src={Codigo} alt="Imagen de desarrollo web" />
            </div>
          </div>
          <div className={styles.servicios__left}>
            <Card title='#04 Revisamos' classes='left'>
              Luego de finalizar la primera versión de tu proyecto, realizamos 
              una reunión para hacer una demostración del mismo. En esta etapa
              realizamos, de ser necesario, las modificaciones que puedan surgir.
            </Card>
            <div className={styles.servicios__img}>
              <img src={Revision} alt="Imagen de presentacion" />
            </div>
          </div>
          <div className={styles.servicios__right}>
            <Card title='#05 Lanzamiento'>
              Presentamos tu web 100% funcional y hacemos una última revisión. 
              Este momento realizamos las correcciones finales 
              y publicamos tu proyecto.
            </Card>
            <div className={styles.servicios__img}>
              <img src={Lanzamiento} alt="Imagen de presentacion" />
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

export default DesarrolloWeb;

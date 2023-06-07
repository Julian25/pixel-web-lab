import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import styles from './contacto.module.css'
import Hero from '../../components/Hero';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Contactanos from '../../assets/images/contacto.png';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

function Contacto() {

  const [loading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validationSchema = joi.object({
    Nombre: joi
      .string()
      .min(4)
      .max(30)
      .pattern(/^[a-zA-Z ]+$/)
      .required()
      .label('Nombre')
      .messages({
        'string.pattern.base': `El nombre solamente debe estar compuesto de letras`,
        'string.empty': ` El campo Nombre no puede estar vacío`,
        'string.max': `El numero máximo de caracteres para nombre es 30`,
        'string.min': `El numero mínimo de caracteres para nombre es 4`
      }),
    email: joi
      .string()
      .email({ minDomainSegments: 3, tlds: { allow: ['com', 'net', 'ar'] } })
      .required()
      .messages({
        'string.empty': `El campo Email no puede estar vacío`,
        'string.email': `Debe ingresar una dirección de email valida`
      }),
    Mensaje: joi
      .string()
      .min(10)
      .required()
      .messages({
        'string.empty': `El campo Mensaje no puede estar vacío`,
        'string.min': `El numero mínimo de caracteres para nombre es 10`
      })
  })
  
  const {
    register,
    handleSubmit,
    formState : { errors },
    reset
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      Nombre: '',
      email: '',
      Mensaje: ''
    },
    resolver: joiResolver(validationSchema)
  });

  const sendEmail = async (data) => {
    setIsLoading(true)
    emailjs
    .send('service_28du509', 'template_o97wrpq', data, 'ZuinXtQNcGCoF9GGV')
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          setShowModal(true);
          reset()
        }
      }, (error) => {
          alert(error.text);
      });
  };
  const closeHandler = () => {
    setShowModal(false);
    console.log(showModal);
  }

  return (
    <div>
      <section>
        <Hero img={Contactanos}>
          <div className={styles.hero__text}>
            <h2>Comunicate con nosotros</h2>
          </div>
        </Hero>
      </section>
      <section className={styles.container}>
        <h2>
          ¿Que necesitas?
        </h2>
        <form className={styles.form} onSubmit={handleSubmit(sendEmail)}>
          <Input
            id={'Nombre'}
            text={'Nombre'}
            type={'text'}
            register={register} 
            error={errors.Nombre}
          />
          <Input 
            id ={'email'}
            text={'Email'}
            type={'email'}
            register={register} 
            error={errors.email}
          />
          <TextArea
            id={'Mensaje'}
            text={'Mensaje'}
            register={register} 
            error={errors.Mensaje}
          />
          <Button classes='send'>Enviar</Button>
        </form>
        <Loading showLoading={loading}></Loading>
        <Modal isOpen={showModal} handleClose={() => closeHandler()}>
          <h3 className={styles.mensaje}>Mensaje enviado exitosamente</h3>
        </Modal>
      </section>
    </div>
  )
}

export default Contacto;

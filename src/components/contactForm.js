import React, { useState } from 'react';
import Style from "./contactForm.module.css"
import { nameIsValid } from "../validations/nameisvalid"
import { emailIsValid } from "../validations/emailIsValid"
import { messageIsValid } from "../validations/messageIsValid"
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

  const initialInput = {
    name: "",
    email: "",
    message: ""
  }

  const [ input, setInput ] = useState(initialInput)

  const initialErrors= {

    name: { valid: false, error: '' },
    email: { valid: false, error: '' },
    message: { valid: true, error: '' }

  }

  const [ inputError, setInputError ] = useState(initialErrors)

  const handleChange = async (e) => {
    
    const { name, value } = e.target;

    if (name === 'name') {
        const { valid, error } = nameIsValid(value);
        setInputError((prevInputError) => ({
          ...prevInputError,
          name: { valid, error }
        }));
      }

      if (name === 'email') {
        const { valid, error } = emailIsValid(value);
        setInputError((prevInputError) => ({
          ...prevInputError,
          email: { valid, error }
        }));
      }

      if (name === 'message') {
        const { valid, error } = messageIsValid(value);
        setInputError((prevInputError) => ({
          ...prevInputError,
          message: { valid, error }
        }));
      }

        setInput((prevInput) => ({
          ...prevInput,
          [name]: value
        }));
      };


  const [formValid, setFormValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.values(inputError).every(field => field.valid);
      
        if (!isValid) {
          if (!toast.isActive('error-toast')) {
            toast.error('Por favor, complete todos los campos correctamente antes de enviar.', {
              toastId: 'error-toast', 
            });
          }
          setFormValid(false)
          return;
        }

    setFormValid(true)
    setInput(initialInput)
    setInputError(initialErrors)
    if (!toast.isActive('success-toast')) {
      toast.success('Mensaje enviado correctamente, me estaré comunicando a la brevedad!', {
        toastId: 'success-toast',
      });}
  };

  return (
    <div className={Style.contactcontainer}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div  className={Style.datacontainer}>
          <div className={Style.inputcontainer}>
            <label htmlFor="name">Nombre</label>
            <input className={Style.input}  data-testid="name-input" type="text" name="name" value={input.name} onChange={handleChange} maxLength={35}/>
          </div>
          <div className={Style.inputcontainer}>
            <label htmlFor="email">Email</label> 
            <input className={Style.input} data-testid="email-input" type="email" name="email" value={input.email} onChange={handleChange} maxLength={235} />
          </div>
        </div>
        <div className={Style.inputcontainer}>
          <label htmlFor="message">Mensaje</label>
          <textarea className={Style.input} data-testid="message-input" id="message" name="message" value={input.message} onChange={handleChange} rows="4" maxLength={235}></textarea>
        </div>
        {!formValid && (
          <>
          <p className={Style.contactError}>{inputError.name.error}</p>
          <p className={Style.contactError}>{inputError.email.error}</p>
          <p className={Style.contactError}>{inputError.message.error}</p>
          </>
        )}
        <button className={Style.contactbutton} type="submit">Enviar</button>
        <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  limit={1}
                  queue={false}
                  theme="light"
                  transition={Zoom}
                />
      </form>
    </div>
  );
};

export default ContactForm;
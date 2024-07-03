export const emailIsValid = (email) => {

    if (!email) {
      return { valid: false, error: '*El correo electrónico no puede estar vacío.' };
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return { valid: false, error: '*Por favor ingresa un correo electrónico válido.' };
    }

    return { valid: true, error: '' };
  };
  
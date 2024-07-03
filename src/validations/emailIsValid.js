export const emailIsValid = (email) => {
    // Verificar que no esté vacío
    if (!email) {
      return { valid: false, error: '*El correo electrónico no puede estar vacío.' };
    }
  
    // Verificar formato de correo electrónico usando una expresión regular
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return { valid: false, error: '*Por favor ingresa un correo electrónico válido.' };
    }
  
    // Si pasa todas las validaciones
    return { valid: true, error: '' };
  };
  
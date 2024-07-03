export const messageIsValid = (message) => {
    // Verificar longitud máxima de 200 caracteres
    if (message.length > 200) {
      return { valid: false, error: '*El mensaje no puede tener más de 200 caracteres.' };
    }
  
    // Si pasa la validación
    return { valid: true, error: '' };
  };
  
export const messageIsValid = (message) => {

    if (message.length > 200) {
      return { valid: false, error: '*El mensaje no puede tener más de 200 caracteres.' };
    }
  
    return { valid: true, error: '' };
  };
  
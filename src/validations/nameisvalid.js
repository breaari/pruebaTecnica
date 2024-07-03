export const nameIsValid = (name) => {

    if (name.trim().length < 2) {
      return { valid: false, error: '*El nombre debe tener al menos 2 caracteres.' };
    }
  
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(name)) {
      return { valid: false, error: '*El nombre solo puede contener letras y espacios.' };
    }
  
    return { valid: true, error: '' };
  }
  
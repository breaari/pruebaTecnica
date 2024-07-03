export const nameIsValid = (name) => {

    console.log("name:", name)
    // Verificar que no esté vacío y tenga al menos 3 caracteres
    if (name.trim().length < 2) {
      return { valid: false, error: '*El nombre debe tener al menos 2 caracteres.' };
    }
  
    // Verificar que solo contenga letras y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(name)) {
      return { valid: false, error: '*El nombre solo puede contener letras y espacios.' };
    }
  
    // Si pasa todas las validaciones
    return { valid: true, error: '' };
  }
  
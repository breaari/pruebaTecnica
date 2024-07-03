import React from 'react';
import styles from './Header.module.css';

const Header = ({usuario}) => {

  return (
    <div className={styles.header}>
     <img className={styles.imagen} src={usuario.imagen} alt={`Imagen de Perfil de ${usuario.nombre}`} />
      <h1 className={styles.nombre}>{usuario.nombre}</h1>
    </div>
  );
};

export default Header;

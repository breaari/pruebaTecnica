import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header';

describe('Header Component', () => {
  const usuarioMock = {
    nombre: 'John Doe',
    imagen: '/profile.jpg'
  };

  it('debería renderizar el nombre del usuario', () => {
    render(<Header usuario={usuarioMock} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('debería renderizar la imagen del usuario con el atributo alt correcto', () => {
    render(<Header usuario={usuarioMock} />);
    const image = screen.getByAltText('Imagen de Perfil de John Doe');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/profile.jpg');
  });
});

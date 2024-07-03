import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../components/about';

describe('About Component', () => {
  const usuarioMock = {
    sobreMi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

  it('debería renderizar el título "Sobre mí"', () => {
    render(<About usuario={usuarioMock} />);
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
  });

  it('debería renderizar el texto proporcionado por usuario.sobreMi', () => {
    render(<About usuario={usuarioMock} />);
    expect(screen.getByText(usuarioMock.sobreMi)).toBeInTheDocument();
  });
});

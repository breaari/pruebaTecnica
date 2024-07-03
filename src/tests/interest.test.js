import { render, screen } from '@testing-library/react';
import React from 'react';
import Interests from '../components/interest';

describe('Interests Component', () => {
  const usuarioMock = {
    intereses: ['Fútbol', 'Música', 'Viajes', 'Cocina']
  };

  it('debería renderizar el título "Intereses"', () => {
    render(<Interests usuario={usuarioMock} />);
    expect(screen.getByText('Intereses')).toBeInTheDocument();
  });

  it('debería renderizar los intereses del usuario', () => {
    render(<Interests usuario={usuarioMock} />);
    usuarioMock.intereses.forEach(interes => {
      expect(screen.getByText(interes)).toBeInTheDocument();
    });
  });

  it('debería renderizar los intereses con los colores correspondientes', () => {
    render(<Interests usuario={usuarioMock} />);
    const colors = ['#ff9561', '#00669b', '#ffc9ac', '#002c5c']; // Colores definidos en Interests.js

    usuarioMock.intereses.forEach((interes, index) => {
      const interestElement = screen.getByText(interes);
      const expectedColor = colors[index % colors.length];
      expect(interestElement).toHaveStyle(`background-color: ${expectedColor}`);
    });
  });
});

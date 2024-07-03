import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import ContactForm from '../components/contactForm';

describe('ContactForm Component', () => {
  it('debería permitir ingresar texto en los campos y validar la entrada', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const messageInput = screen.getByTestId('message-input');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Este es un mensaje de prueba.' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('johndoe@example.com');
    expect(messageInput).toHaveValue('Este es un mensaje de prueba.');
  });

  it('debería mostrar mensajes de error al intentar enviar el formulario con campos inválidos', async () => {
    render(<ContactForm />);

    fireEvent.submit(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() => {
      expect(screen.getByText(/Por favor, complete todos los campos correctamente antes de enviar./i)).toBeInTheDocument();
    });
  });

  it('debería mostrar un mensaje de éxito al enviar el formulario correctamente', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Este es un mensaje de prueba.' } });

    fireEvent.submit(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() => {
      expect(screen.getByText(/Mensaje enviado correctamente, me estaré comunicando a la brevedad!/i)).toBeInTheDocument();
    });
  });
});

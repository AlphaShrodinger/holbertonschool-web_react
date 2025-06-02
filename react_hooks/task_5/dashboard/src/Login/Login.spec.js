import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../Login/Login.jsx';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component', () => {
    const logInMock = jest.fn();

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        render(<Login logIn={logInMock} />);
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        jest.clearAllMocks();
    });

    test('renders login form elements', () => {
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
    });

    test('submit button is disabled by default', () => {
        expect(screen.getByRole('button', { name: 'OK' })).toBeDisabled();
    });

    test('submit button becomes enabled when email and password are valid', () => {
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'password123' },
        });
        expect(screen.getByRole('button', { name: 'OK' })).not.toBeDisabled();
    });

    test('calls logIn with email and password on form submission', () => {
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'password123' },
        });
        fireEvent.click(screen.getByRole('button', { name: 'OK' }));
        expect(logInMock).toHaveBeenCalledWith('test@example.com', 'password123');
    });
});

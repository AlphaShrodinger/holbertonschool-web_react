import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
    test('must have 2 labels, 2 inputs and 1 button', () => {
        render(<Login />);
        const emailLabel = screen.getByLabelText(/Email/i);
        const passwordLabel = screen.getByLabelText(/Password/i);
        const inputs = screen.getAllByRole('textbox');
        const button = screen.getByRole('button', { name: /Login/i });

        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument();
    });
});
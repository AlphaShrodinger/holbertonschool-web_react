// Login.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

// Optional: suppress Aphrodite style injection if needed for test environment
jest.mock('aphrodite', () => {
    const original = jest.requireActual('aphrodite');
    return {
        ...original,
        StyleSheetTestUtils: {
            suppressStyleInjection: jest.fn(),
            clearBufferAndResumeStyleInjection: jest.fn(),
        },
    };
});

describe('Login component', () => {
    test('renders without crashing', () => {
        render(<Login />);
        expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    });

    test('renders input fields and button', () => {
        render(<Login />);

        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const button = screen.getByRole('button', { name: /ok/i });

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test('inputs have correct types', () => {
        render(<Login />);
        expect(screen.getByLabelText(/Email/i).type).toBe('email');
        expect(screen.getByLabelText(/Password/i).type).toBe('password');
    });
});

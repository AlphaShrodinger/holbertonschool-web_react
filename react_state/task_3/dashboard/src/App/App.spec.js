import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { AppContext, defaultUser } from './AppContext';

describe('App integration tests', () => {
    it('displays Login component and hides CourseList by default', () => {
        render(<App />);
        expect(screen.getByText(/log in to access the full dashboard/i)).toBeInTheDocument();
        expect(screen.queryByText(/Course list/i)).not.toBeInTheDocument();
    });

    it('logs in the user and updates UI accordingly', () => {
        render(<App />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /log in/i });

        // Initially button is disabled
        expect(submitButton).toBeDisabled();

        // Fill inputs with valid values
        fireEvent.change(emailInput, { target: { value: 'test@holberton.io' } });
        fireEvent.change(passwordInput, { target: { value: '12345678' } });

        expect(submitButton).toBeEnabled();

        fireEvent.click(submitButton);

        // After login, CourseList is visible and Login form is gone
        expect(screen.getByText(/Course list/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
    });

    it('logs out the user from the Header and shows Login again', () => {
        const loggedInUser = {
            email: 'test@holberton.io',
            password: '12345678',
            isLoggedIn: true,
        };
        const mockLogOut = jest.fn();

        render(
            <AppContext.Provider value={{ user: loggedInUser, logOut: mockLogOut }}>
                <App />
            </AppContext.Provider>
        );

        // Confirm logout section is shown
        const logoutLink = screen.getByText(/logout/i);
        expect(logoutLink).toBeInTheDocument();

        fireEvent.click(logoutLink);

        // After logout, mockLogOut should be called and Login should be shown again
        expect(mockLogOut).toHaveBeenCalled();
    });
});

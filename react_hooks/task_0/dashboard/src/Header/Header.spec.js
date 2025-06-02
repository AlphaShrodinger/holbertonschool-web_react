import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header.jsx';
import AppContext from '../Context/context.js';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header Component', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    test('does not render logoutSection when user is not logged in', () => {
        render(<Header />);
        expect(screen.queryByTestId('logoutSection')).toBeNull();
    });

    test('renders logoutSection when user is logged in', () => {
        const user = { email: 'test@example.com', isLoggedIn: true };
        const logOut = jest.fn();
        render(
            <AppContext.Provider value={{ user, logOut }}>
                <Header />
            </AppContext.Provider>
        );
        expect(screen.getByTestId('logoutSection')).toBeInTheDocument();
        expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'logout' })).toBeInTheDocument();
    });

    test('calls logOut when logout link is clicked', () => {
        const user = { email: 'test@example.com', isLoggedIn: true };
        const logOut = jest.fn();
        render(
            <AppContext.Provider value={{ user, logOut }}>
                <Header />
            </AppContext.Provider>
        );
        fireEvent.click(screen.getByRole('link', { name: 'logout' }));
        expect(logOut).toHaveBeenCalled();
    });
});

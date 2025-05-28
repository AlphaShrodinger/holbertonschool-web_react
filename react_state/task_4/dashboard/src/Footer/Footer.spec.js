import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../Context/context';

describe('Footer component', () => {
    const renderWithUser = (user) => {
        return render(
            <AppContext.Provider value={{ user }}>
                <Footer />
            </AppContext.Provider>
        );
    };

    test('renders copyright year and school name', () => {
        renderWithUser({ isLoggedIn: false });

        const copyright =
            screen.getByText(new RegExp(`© ${new Date().getFullYear()} - Holberton School`));
        expect(copyright).toBeInTheDocument();
    });

    test('does not render "Contact us" link when user is logged out', () => {
        renderWithUser({ isLoggedIn: false });

        const contactLink = screen.queryByText(/contact us/i);
        expect(contactLink).not.toBeInTheDocument();
    });

    test('renders "Contact us" link when user is logged in', () => {
        renderWithUser({ isLoggedIn: true });

        const contactLink = screen.getByText(/contact us/i);
        expect(contactLink).toBeInTheDocument();
        expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
    });
});

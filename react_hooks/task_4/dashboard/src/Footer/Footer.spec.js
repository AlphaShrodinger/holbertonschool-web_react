import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer.jsx';
import AppContext from '../App/Context/context';
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';
import '@testing-library/jest-dom';

jest.mock('../utils/utils', () => ({
    getCurrentYear: () => 2025,
    getFooterCopy: jest.fn(),
}));

describe('Footer Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders correct copyright text when isIndex is true', () => {
        getFooterCopy.mockReturnValue('Holberton School');

        render(
            <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
                <Footer />
            </AppContext.Provider>
        );

        const copyright = screen.getByText('Copyright 2025 - Holberton School');
        expect(copyright).toBeInTheDocument();
        expect(getFooterCopy).toHaveBeenCalledWith(true);
    });

    test('does not display Contact us link when user is logged out', () => {
        getFooterCopy.mockReturnValue('Holberton School');

        render(
            <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
                <Footer />
            </AppContext.Provider>
        );

        expect(screen.queryByText('Contact us')).not.toBeInTheDocument();
    });

    test('displays Contact us link when user is logged in', () => {
        getFooterCopy.mockReturnValue('Holberton School');

        render(
            <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
                <Footer />
            </AppContext.Provider>
        );

        const contactLink = screen.getByText('Contact us');
        expect(contactLink).toBeInTheDocument();
        expect(contactLink.tagName).toBe('A');
    });
});

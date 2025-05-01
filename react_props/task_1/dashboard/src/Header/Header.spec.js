import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    test('must renderize Holberton logo', () => {
        const { getByAltText } = render(<Header />);
        expect(getByAltText(/holberton logo/i)).toBeInTheDocument();
    });

    test('must renderize el H1 correct text', () => {
        const { getByRole } = render(<Header />);
        expect(getByRole('heading', { level: 1 })).toHaveTextContent(/Welcome to Holberton/i);
    });
});
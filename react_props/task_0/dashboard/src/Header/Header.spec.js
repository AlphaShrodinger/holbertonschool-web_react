import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the header component', () => {
    const { getByAltText, getByText } = render(<Header />);

    // Verify Holberton logo shows
    expect(getByAltText(/holberton logo/i)).toBeInTheDocument();

    // Verify Correct H1 text
    expect(getByText(/Welcome to Holberton/i)).toBeInTheDocument();
});
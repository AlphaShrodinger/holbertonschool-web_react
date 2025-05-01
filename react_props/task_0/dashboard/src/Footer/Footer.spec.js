import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer with the correct text', () => {
    const { getByText } = render(<Footer />);

    // Verify copyrigth
    expect(getByText(/Copyright 2025 - Holberton School/i)).toBeInTheDocument();
});
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
    test('must renderize copyright text', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(/Copyright/i)).toBeInTheDocument();
    });
});
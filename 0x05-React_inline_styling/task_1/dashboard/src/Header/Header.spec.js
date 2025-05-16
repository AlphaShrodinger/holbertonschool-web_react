// Header.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Optional Aphrodite style suppressor
jest.mock('aphrodite', () => {
    const original = jest.requireActual('aphrodite');
    return {
        ...original,
        StyleSheetTestUtils: {
            suppressStyleInjection: jest.fn(),
            clearBufferAndResumeStyleInjection: jest.fn(),
        },
        css: (...args) => args.join(' '),
    };
});

describe('Header component', () => {
    test('renders without crashing', () => {
        render(<Header />);
        expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
    });

    test('renders logo image', () => {
        render(<Header />);
        const img = screen.getByAltText(/Holberton Logo/i);
        expect(img).toBeInTheDocument();
    });

    test('renders heading text', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
    });
});

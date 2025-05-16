// NotificationItem.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

// Optional: Suppress Aphrodite style injection during tests (useful for cleaner test logs)
jest.mock('aphrodite', () => {
    const original = jest.requireActual('aphrodite');
    return {
        ...original,
        StyleSheetTestUtils: {
            suppressStyleInjection: jest.fn(),
            clearBufferAndResumeStyleInjection: jest.fn(),
        },
        css: (...args) => args.join(' '), // Mock css() to return the class names
    };
});

describe('NotificationItem component', () => {
    test('renders with given value', () => {
        render(<NotificationItem type="default" value="Test notification" />);
        expect(screen.getByText(/Test notification/i)).toBeInTheDocument();
    });

    test('applies default style when type is "default"', () => {
        render(<NotificationItem type="default" value="Default style" />);
        const item = screen.getByText(/Default style/i);
        // Check if the notification has the "default" class applied
        expect(item.className).toContain('default');
    });

    test('applies urgent style when type is "urgent"', () => {
        render(<NotificationItem type="urgent" value="Urgent style" />);
        const item = screen.getByText(/Urgent style/i);
        // Check if the notification has the "urgent" class applied
        expect(item.className).toContain('urgent');
    });
});

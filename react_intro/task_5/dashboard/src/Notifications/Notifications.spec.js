import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
    test('renders the notifications title', () => {
        render(<Notifications />);
        const title = screen.getByText(/here is the list of notifications/i);
        expect(title).toBeInTheDocument();
    });

    test('renders the close button', () => {
        render(<Notifications />);
        const closeButton = screen.getByRole('button', { name: /close/i });
        expect(closeButton).toBeInTheDocument();
    });

    test('renders 3 list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
    });

    test('clicking close button logs message to console', () => {
        console.log = jest.fn(); // Mock console.log
        render(<Notifications />);
        const closeButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);
        expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications component', () => {
    const notificationsList = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
    ];

    test('renders 3 NotificationItem components with correct content', () => {
        render(<Notifications notifications={notificationsList} />);

        // Text-based item
        expect(screen.getByText('New course available')).toBeInTheDocument();
        expect(screen.getByText('New resume available')).toBeInTheDocument();

        // HTML-based item
        expect(screen.getByText('Urgent requirement')).toBeInTheDocument();
    });
});

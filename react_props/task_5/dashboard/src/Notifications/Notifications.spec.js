import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
    test('always show "Your notifications"', () => {
        render(<Notifications />);
        expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
    });

    test('do not show details when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} notifications={[]} />);
        expect(screen.queryByText(/Here is the list of notifications/i)).toBeNull();
        expect(screen.queryByRole('button', { name: /Close/i })).toBeNull();
    });

    test('show details when displayDrawer is true and there are notifications', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
        ];
        render(<Notifications displayDrawer={true} notifications={notifications} />);
        expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();
        expect(screen.getByText(/Notification 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Notification 2/i)).toBeInTheDocument();
    });

    test('Show "No new notification for now" when displayDrawer is true and there are no notifications', () => {
        render(<Notifications displayDrawer={true} notifications={[]} />);
        expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
    });
});
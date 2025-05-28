import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

// Mock NotificationItem for isolated testing
jest.mock('./NotificationItem', () => (props) => {
    const { type, value, html, markAsRead } = props;
    return (
        <li data-testid="notification-item" onClick={markAsRead}>
            {value || (html && html.__html) || ''}
            <span> ({type})</span>
        </li>
    );
});

describe('Notifications component', () => {
    const defaultProps = {
        displayDrawer: false,
        handleDisplayDrawer: jest.fn(),
        handleHideDrawer: jest.fn(),
        markNotificationAsRead: jest.fn(),
        notifications: [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
        ],
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('calls handleDisplayDrawer when clicking on menu item', () => {
        render(<Notifications {...defaultProps} />);
        const menuItem = screen.getByText(/your notifications/i);
        fireEvent.click(menuItem);
        expect(defaultProps.handleDisplayDrawer).toHaveBeenCalled();
    });

    test('does NOT display notifications drawer by default', () => {
        render(<Notifications {...defaultProps} displayDrawer={false} />);
        expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    });

    test('displays notifications drawer when displayDrawer is true', () => {
        render(<Notifications {...defaultProps} displayDrawer={true} />);
        expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();

        // Check that all notifications are rendered
        const items = screen.getAllByTestId('notification-item');
        expect(items.length).toBe(3);
        expect(screen.queryByText('No new notification for now')).not.toBeInTheDocument();
    });

    test('displays "No new notification for now" when notifications list is empty', () => {
        render(
            <Notifications
                {...defaultProps}
                displayDrawer={true}
                notifications={[]}
            />
        );
        expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    });

    test('calls handleHideDrawer when clicking close button', () => {
        render(<Notifications {...defaultProps} displayDrawer={true} />);
        const closeButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);
        expect(defaultProps.handleHideDrawer).toHaveBeenCalled();
    });

    test('calls markNotificationAsRead with correct id when notification clicked', () => {
        render(<Notifications {...defaultProps} displayDrawer={true} />);
        const items = screen.getAllByTestId('notification-item');

        // Click first notification
        fireEvent.click(items[0]);
        expect(defaultProps.markNotificationAsRead).toHaveBeenCalledWith(1);

        // Click second notification
        fireEvent.click(items[1]);
        expect(defaultProps.markNotificationAsRead).toHaveBeenCalledWith(2);
    });
});

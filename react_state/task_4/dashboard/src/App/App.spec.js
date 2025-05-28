import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AppContext from '../Context/context';

describe('App component integration tests', () => {
    test('renders Login component by default and no CourseList', () => {
        render(<App />);
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
        expect(screen.queryByText('CourseList')).not.toBeInTheDocument();
    });

    test('logs in the user and displays CourseList', () => {
        render(<App />);

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /log in/i });

        // Fill form
        fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        fireEvent.click(submitButton);

        // CourseList is shown, Login form is gone
        expect(screen.getByText('CourseList')).toBeInTheDocument();
        expect(screen.queryByRole('textbox', { name: /email/i })).not.toBeInTheDocument();
    });

    test('logs out the user from Header and shows Login again', () => {
        // We need to render the full app, login the user, then trigger logout

        render(<App />);

        // Login first
        fireEvent.change(screen.getByRole('textbox', { name: /email/i }), {
            target: { value: 'user@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: 'password123' },
        });
        fireEvent.click(screen.getByRole('button', { name: /log in/i }));

        // Verify logged in UI
        expect(screen.getByText('CourseList')).toBeInTheDocument();

        // The logout link should be present in Header, get it by text "logout"
        const logoutLink = screen.getByText(/logout/i);

        fireEvent.click(logoutLink);

        // Login form is back, CourseList gone
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
        expect(screen.queryByText('CourseList')).not.toBeInTheDocument();
    });

    test('toggles notifications drawer on click and hides when closed', () => {
        render(<App />);

        // Notifications drawer should be hidden initially
        expect(screen.queryByText('New course available')).not.toBeVisible();

        // Click "Your notifications" (usually a text element or button)
        const notificationsMenu = screen.getByText(/your notifications/i);
        fireEvent.click(notificationsMenu);

        // Notifications drawer should be visible
        expect(screen.getByText('New course available')).toBeVisible();

        // Click close button in Notifications
        const closeBtn = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeBtn);

        // Drawer hidden again
        expect(screen.queryByText('New course available')).not.toBeVisible();
    });

    test('marks notification as read removes it from the list', () => {
        render(<App />);

        // Open the drawer
        const notificationsMenu = screen.getByText(/your notifications/i);
        fireEvent.click(notificationsMenu);

        // Notification with id 1 is present
        const notificationText = screen.getByText('New course available');
        expect(notificationText).toBeInTheDocument();

        // Assume mark as read button is associated per notification, e.g. with data-testid
        const markReadButton = screen.getByTestId('mark-read-1');
        fireEvent.click(markReadButton);

        // After clicking mark as read, notification should be removed
        expect(screen.queryByText('New course available')).not.toBeInTheDocument();
    });
});

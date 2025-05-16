// Notifications.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

// Silence Aphrodite style injection warnings
jest.mock('aphrodite', () => {
    const original = jest.requireActual('aphrodite');
    return {
        ...original,
        StyleSheetTestUtils: {
            suppressStyleInjection: jest.fn(),
            clearBufferAndResumeStyleInjection: jest.fn(),
        },
    };
});

describe('Notifications component', () => {
    const notifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    test('renders correctly with list of notifications', () => {
        render(<Notifications listNotifications={notifications} />);
        expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
        expect(screen.getByText(/New course available/i)).toBeInTheDocument();
        expect(screen.getByText(/New resume available/i)).toBeInTheDocument();
    });

    test('renders default message when listNotifications is empty', () => {
        render(<Notifications listNotifications={[]} />);
        expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
    });

    test('does not re-render if listNotifications length stays the same', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'Initial notification' },
        ];

        const { rerender } = render(<Notifications listNotifications={initialList} />);
        const renderSpy = jest.spyOn(Notifications.prototype, 'render');

        // Trigger rerender with same length
        const updatedListSameLength = [
            { id: 1, type: 'default', value: 'Changed text' },
        ];
        rerender(<Notifications listNotifications={updatedListSameLength} />);

        expect(renderSpy).toHaveBeenCalledTimes(0);
        renderSpy.mockRestore();
    });

    test('re-renders if listNotifications length changes', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'Only one' },
        ];

        const { rerender } = render(<Notifications listNotifications={initialList} />);
        const renderSpy = jest.spyOn(Notifications.prototype, 'render');

        const longerList = [
            { id: 1, type: 'default', value: 'Only one' },
            { id: 2, type: 'urgent', value: 'Second notification' },
        ];
        rerender(<Notifications listNotifications={longerList} />);

        expect(renderSpy).toHaveBeenCalledTimes(1);
        renderSpy.mockRestore();
    });
});

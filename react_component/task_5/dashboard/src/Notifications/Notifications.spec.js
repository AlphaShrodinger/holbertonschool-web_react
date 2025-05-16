// Notifications.spec.js
import React from 'react';
import { render, screen, rerender } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component re-rendering', () => {
    test('does not re-render if listNotifications length remains the same', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
        ];

        const { rerender } = render(<Notifications listNotifications={initialList} />);
        const renderSpy = jest.spyOn(Notifications.prototype, 'render');

        // Re-render with same length, different content
        const newListSameLength = [
            { id: 1, type: 'default', value: 'Updated course info' },
            { id: 2, type: 'urgent', value: 'Updated resume info' },
        ];
        rerender(<Notifications listNotifications={newListSameLength} />);

        expect(renderSpy).toHaveBeenCalledTimes(0);

        renderSpy.mockRestore();
    });

    test('re-renders when listNotifications length changes', () => {
        const initialList = [
            { id: 1, type: 'default', value: 'New course available' },
        ];

        const { rerender } = render(<Notifications listNotifications={initialList} />);
        const renderSpy = jest.spyOn(Notifications.prototype, 'render');

        // Re-render with more notifications
        const newList = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
        ];
        rerender(<Notifications listNotifications={newList} />);

        expect(renderSpy).toHaveBeenCalledTimes(1);

        renderSpy.mockRestore();
    });
});

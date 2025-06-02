import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

jest.mock('axios');

describe('App Component', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        axios.get.mockResolvedValue({
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "Urgent requirement - complete by EOD" }
            ]
        });
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        jest.clearAllMocks();
    });

    test('markNotificationAsRead removes the notification from the UI', async () => {
        const consoleSpy = jest.spyOn(console, 'log');

        render(<App />);

        await waitFor(() => {
            fireEvent.click(screen.getByText('Your Notifications'));
        });

        await waitFor(() => {
            const notifications = screen.getAllByRole('listitem');
            expect(notifications).toHaveLength(3);

            fireEvent.click(notifications[0].querySelector('button'));

            expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
            expect(screen.getAllByRole('listitem')).toHaveLength(2);
        });
    });
});

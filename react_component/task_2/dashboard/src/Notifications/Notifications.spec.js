import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

test('logs message when notification is clicked', () => {
    console.log = jest.fn();
    const notifications = [{ id: 1, type: 'default', value: 'Test notification' }];
    render(<Notifications notifications={notifications} />);

    fireEvent.click(screen.getByText('Test notification'));
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
});
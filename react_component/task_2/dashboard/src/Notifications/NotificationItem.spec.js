import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('calls markAsRead with correct ID when clicked', () => {
    const markAsReadMock = jest.fn();
    const { getByText } = render(
        <NotificationItem id={42} value="New course available" markAsRead={markAsReadMock} />
    );

    fireEvent.click(getByText('New course available'));
    expect(markAsReadMock).toHaveBeenCalledWith(42);
});
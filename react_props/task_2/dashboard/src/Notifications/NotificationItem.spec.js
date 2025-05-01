import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
    test('renders with type "default", has color blue and correct data attribute', () => {
        const { getByText } = render(<NotificationItem type="default" value="Test message" />);
        const listItem = getByText('Test message');

        expect(listItem).toHaveAttribute('data-notification-type', 'default');
        expect(listItem).toHaveStyle('color: blue');
    });

    test('renders with type "urgent", has color red and correct data attribute', () => {
        const { getByText } = render(<NotificationItem type="urgent" value="Urgent message" />);
        const listItem = getByText('Urgent message');

        expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
        expect(listItem).toHaveStyle('color: red');
    });
});

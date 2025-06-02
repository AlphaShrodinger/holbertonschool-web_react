import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without errors', () => {
        render(<NotificationItem type="default" value="test" />);
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('renders correct type and value props', () => {
        render(<NotificationItem type="default" value="test" />);
        const li = screen.getByRole('listitem');
        expect(li).toHaveTextContent('test');
        expect(li).toHaveAttribute('data-notification-type', 'default');
    });

    it('renders html prop correctly', () => {
        render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(screen.getByRole('listitem')).toContainHTML('<u>test</u>');
    });

    it('calls markAsRead when clicked', () => {
        const markAsReadMock = jest.fn();
        const wrapper = shallow(
            <NotificationItem id={1} markAsRead={markAsReadMock} />
        );
        wrapper.find('li').simulate('click');
        expect(markAsReadMock).toHaveBeenCalledWith(1);
    });
});
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

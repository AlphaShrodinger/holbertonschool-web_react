import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        jest.clearAllMocks();
    });

    const testNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    it('calls handleDisplayDrawer when clicking on the menu item', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(
            <Notifications handleDisplayDrawer={handleDisplayDrawer} />
        );
        wrapper.find('div').first().simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalled();
    });

    it('calls handleHideDrawer when clicking on the close button', () => {
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(
            <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
        );
        wrapper.find('button').simulate('click');
        expect(handleHideDrawer).toHaveBeenCalled();
    });

    it("renders the text 'Here is the list of notifications' when notifications are provided", () => {
        const wrapper = shallow(
            <Notifications displayDrawer={true} notifications={testNotifications} />
        );
        expect(wrapper.find('p').first().text()).toEqual(
            'Here is the list of notifications'
        );
    });

    it('calls markNotificationAsRead with the right ID when notification is clicked', () => {
        const markNotificationAsRead = jest.fn();
        const wrapper = shallow(
            <Notifications
                displayDrawer={true}
                notifications={testNotifications}
                markNotificationAsRead={markNotificationAsRead}
            />
        );

        wrapper.find(NotificationItem).first().props().markAsRead();

        expect(markNotificationAsRead).toHaveBeenCalled();
    });

    it('renders no notifications message when notifications array is empty', () => {
        const wrapper = shallow(
            <Notifications displayDrawer={true} notifications={[]} />
        );
        expect(wrapper.find('p').text()).toEqual('No new notification for now');
    });

    it('renders NotificationItem components when notifications are provided', () => {
        const wrapper = shallow(
            <Notifications displayDrawer={true} notifications={testNotifications} />
        );
        expect(wrapper.find(NotificationItem)).toHaveLength(2);
    });
});

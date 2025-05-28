import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
    it('calls handleDisplayDrawer when menu item is clicked', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
        wrapper.find('.menuItem').simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalled();
    });

    it('calls handleHideDrawer when close button is clicked', () => {
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
        wrapper.find('button[aria-label="Close"]').simulate('click');
        expect(handleHideDrawer).toHaveBeenCalled();
    });
});

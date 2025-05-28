import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    it('handleDisplayDrawer sets displayDrawer to true', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('handleHideDrawer sets displayDrawer to false', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ displayDrawer: true });
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });
});

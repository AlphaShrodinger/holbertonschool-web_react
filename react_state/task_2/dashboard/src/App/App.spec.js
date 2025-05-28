import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from './Login';
import CourseList from './CourseList';

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders Login by default', () => {
        expect(wrapper.find(Login).exists()).toBe(true);
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });

    it('renders CourseList when user is logged in', () => {
        wrapper.setState({
            user: {
                email: 'test@example.com',
                password: '123456',
                isLoggedIn: true
            }
        });
        expect(wrapper.find(CourseList).exists()).toBe(true);
        expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('logIn sets user and isLoggedIn to true', () => {
        const instance = wrapper.instance();
        instance.logIn('test@example.com', '123456');
        expect(wrapper.state('user')).toEqual({
            email: 'test@example.com',
            password: '123456',
            isLoggedIn: true
        });
    });

    it('logOut resets user to default state', () => {
        wrapper.setState({
            user: {
                email: 'test@example.com',
                password: '123456',
                isLoggedIn: true
            }
        });
        wrapper.instance().logOut();
        expect(wrapper.state('user')).toEqual({
            email: '',
            password: '',
            isLoggedIn: false
        });
    });

    it('handleDisplayDrawer sets displayDrawer to true', () => {
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('handleHideDrawer sets displayDrawer to false', () => {
        wrapper.setState({ displayDrawer: true });
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext, defaultUser } from './AppContext';

describe('Header component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('does not display logoutSection when not logged in', () => {
        const contextValue = { user: defaultUser, logOut: jest.fn() };
        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
    });

    it('displays logoutSection when user is logged in', () => {
        const contextValue = {
            user: {
                email: 'test@holberton.io',
                password: '12345678',
                isLoggedIn: true,
            },
            logOut: jest.fn(),
        };

        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );

        const section = wrapper.find('#logoutSection');
        expect(section.exists()).toBe(true);
        expect(section.text()).toContain('Welcome test@holberton.io');
    });

    it('calls logOut when logout link is clicked', () => {
        const logOutSpy = jest.fn();
        const contextValue = {
            user: {
                email: 'test@holberton.io',
                password: '12345678',
                isLoggedIn: true,
            },
            logOut: logOutSpy,
        };

        const wrapper = mount(
            <AppContext.Provider value={contextValue}>
                <Header />
            </AppContext.Provider>
        );

        wrapper.find('#logoutSection a').simulate('click');
        expect(logOutSpy).toHaveBeenCalled();
    });
});

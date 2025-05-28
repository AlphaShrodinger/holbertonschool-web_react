import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
    it('calls logIn with correct credentials when form is submitted', () => {
        const mockLogIn = jest.fn();
        const wrapper = shallow(<Login logIn={mockLogIn} />);

        wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('input#password').simulate('change', { target: { value: 'password123' } });

        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });

    it('does not enable submit button with invalid password (< 8 chars)', () => {
        const wrapper = shallow(<Login logIn={() => { }} />);

        wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('input#password').simulate('change', { target: { value: 'short' } });

        const button = wrapper.find('button[type="submit"]');
        expect(button.prop('disabled')).toBe(true);
    });

    it('enables submit button with valid email and password', () => {
        const wrapper = shallow(<Login logIn={() => { }} />);

        wrapper.find('input#email').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('input#password').simulate('change', { target: { value: 'longpassword' } });

        const button = wrapper.find('button[type="submit"]');
        expect(button.prop('disabled')).toBe(false);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login logIn={() => { }} />);
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    });

    it('submit button is enabled when valid email and password are entered', (done) => {
        const wrapper = shallow(<Login logIn={() => { }} />);
        wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
        wrapper.find('#password').simulate('change', { target: { value: 'password123' } });
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
            done();
        });
    });
});
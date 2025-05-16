import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App keyboard behavior', () => {
    it('calls logOut when Ctrl+H is pressed', () => {
        const logOutMock = jest.fn();
        render(<App logOut={logOutMock} />);

        const event = new KeyboardEvent('keydown', {
            key: 'h',
            ctrlKey: true,
        });

        window.dispatchEvent(event);
        expect(logOutMock).toHaveBeenCalledTimes(1);
    });

    it('displays alert with correct message when Ctrl+H is pressed', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        render(<App />);

        const event = new KeyboardEvent('keydown', {
            key: 'h',
            ctrlKey: true,
        });

        window.dispatchEvent(event);
        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        alertMock.mockRestore();
    });
});
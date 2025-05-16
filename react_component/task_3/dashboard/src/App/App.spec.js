// App.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    test('displays title "Course list" above CourseList when isLoggedIn is true', () => {
        render(<App isLoggedIn={true} />);
        expect(screen.getByText(/course list/i)).toBeInTheDocument();
    });

    test('displays title "Log in to continue" above Login when isLoggedIn is false', () => {
        render(<App isLoggedIn={false} />);
        expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
    });

    test('displays "News from the School" and the news paragraph by default', () => {
        render(<App />);
        expect(screen.getByText(/news from the school/i)).toBeInTheDocument();
        expect(screen.getByText(/holberton school news goes here/i)).toBeInTheDocument();
    });
});

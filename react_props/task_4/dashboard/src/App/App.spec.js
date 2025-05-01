import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Login from './Login';
import CourseList from './CourseList';

describe('App component', () => {
    test('renders Login component when isLoggedIn is false', () => {
        render(<App isLoggedIn={false} />);

        // Check for content unique to Login component
        expect(screen.getByText(/log in to access the full dashboard/i)).toBeInTheDocument();
    });

    test('renders CourseList component when isLoggedIn is true', () => {
        render(<App isLoggedIn={true} />);

        // Check for content unique to CourseList component
        expect(screen.getByText(/available courses/i)).toBeInTheDocument();
    });
});

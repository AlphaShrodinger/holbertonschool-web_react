import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders the login form', () => {
    const { getByLabelText, getByText } = render(<Login />);

    // Verify formula has rigth elements
    expect(getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(getByText(/Login/i)).toBeInTheDocument();
});
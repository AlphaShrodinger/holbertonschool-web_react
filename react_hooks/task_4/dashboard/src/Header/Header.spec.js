import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header'; // Adjust path as needed
import { AppContext } from '../App/AppContext'; // Adjust path as needed

describe('Header component', () => {
    let defaultUser;
    let defaultNotifications;

    beforeEach(() => {
        defaultUser = {
            email: '',
            password: '',
            isLoggedIn: false,
        };

        defaultNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
        ];
    });

    it('renders Header component without crashing', () => {
        render(
            <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
                <Header />
            </AppContext.Provider>
        );
        expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
    });

    it('should show drawer when handleDisplayDrawer is triggered', () => {
        render(
            <AppContext.Provider value={{ user: defaultUser }}>
                <Header />
            </AppContext.Provider>
        );

        const openButton = screen.getByTestId('open-drawer-button');
        fireEvent.click(openButton);

        expect(screen.getByTestId('notifications-drawer')).toBeVisible();
    });

    it('should hide drawer when handleHideDrawer is triggered', () => {
        render(
            <AppContext.Provider value={{ user: defaultUser }}>
                <Header />
            </AppContext.Provider>
        );

        // Open drawer first
        fireEvent.click(screen.getByTestId('open-drawer-button'));
        expect(screen.getByTestId('notifications-drawer')).toBeVisible();

        // Then hide
        fireEvent.click(screen.getByTestId('close-drawer-button'));
        expect(screen.queryByTestId('notifications-drawer')).not.toBeInTheDocument();
    });

    it('updates user state on login', () => {
        const TestWrapper = () => {
            const [user, setUser] = React.useState(defaultUser);

            const logIn = (email, password) => {
                setUser({ email, password, isLoggedIn: true });
            };

            return (
                <AppContext.Provider value={{ user, logIn }}>
                    <Header />
                    <button onClick={() => logIn('test@example.com', '1234')}>Log In</button>
                </AppContext.Provider>
            );
        };

        render(<TestWrapper />);
        fireEvent.click(screen.getByText('Log In'));
        expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });

    it('resets user state on logout', () => {
        const loggedInUser = {
            email: 'test@example.com',
            password: '1234',
            isLoggedIn: true,
        };

        const TestWrapper = () => {
            const [user, setUser] = React.useState(loggedInUser);

            const logOut = () => {
                setUser({ email: '', password: '', isLoggedIn: false });
            };

            return (
                <AppContext.Provider value={{ user, logOut }}>
                    <Header />
                    <button onClick={logOut}>Log Out</button>
                </AppContext.Provider>
            );
        };

        render(<TestWrapper />);
        fireEvent.click(screen.getByText('Log Out'));
        expect(screen.queryByText(/Welcome/)).not.toBeInTheDocument();
    });
});

import React from 'react';
import AppContext from '../Context/context';
import './Footer.css';

const Footer = () => (
    <AppContext.Consumer>
        {({ user }) => (
            <footer className="App-footer">
                <p>© {new Date().getFullYear()} - Holberton School</p>
                {user.isLoggedIn && (
                    <p>
                        <a href="/contact">Contact us</a>
                    </p>
                )}
            </footer>
        )}
    </AppContext.Consumer>
);

export default Footer;
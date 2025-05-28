import React from 'react';
import { AppContext } from './AppContext';

class Header extends React.Component {
    static contextType = AppContext;

    render() {
        const { user, logOut } = this.context;

        return (
            <div className="App-header">
                <h1>Holberton Dashboard</h1>
                {user.isLoggedIn && (
                    <section id="logoutSection">
                        Welcome {user.email} (
                        <a href="#" onClick={logOut}>
                            logout
                        </a>
                        )
                    </section>
                )}
            </div>
        );
    }
}

export default Header;

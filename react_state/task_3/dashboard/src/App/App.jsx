import React from 'react';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import CourseList from './CourseList';
import { AppContext, defaultUser } from './AppContext';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
            user: defaultUser,
        };

        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleDisplayDrawer() {
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer() {
        this.setState({ displayDrawer: false });
    }

    logIn(email, password) {
        this.setState({
            user: {
                email,
                password,
                isLoggedIn: true,
            },
        });
    }

    logOut() {
        this.setState({ user: defaultUser });
    }

    render() {
        const { displayDrawer, user } = this.state;

        return (
            <AppContext.Provider value={{ user, logOut: this.logOut }}>
                <div className="App">
                    <Notifications
                        displayDrawer={displayDrawer}
                        handleDisplayDrawer={this.handleDisplayDrawer}
                        handleHideDrawer={this.handleHideDrawer}
                    />
                    <Header />
                    {user.isLoggedIn ? (
                        <CourseList />
                    ) : (
                        <Login
                            email={user.email}
                            password={user.password}
                            logIn={this.logIn}
                        />
                    )}
                    <Footer />
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;

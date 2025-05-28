import React, { Component, Fragment } from 'react';
import AppContext from '../Context/context';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
            notifications: [
                { id: 1, type: 'default', value: 'New course available' },
                { id: 2, type: 'urgent', value: 'New resume available' },
                { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
            ],
            courses: [
                { id: 1, name: 'ES6', credit: 60 },
                { id: 2, name: 'Webpack', credit: 20 },
                { id: 3, name: 'React', credit: 40 },
            ],
            user: {
                email: '',
                password: '',
                isLoggedIn: false,
            },
            logOut: () => this.logOut(),
        };

        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    }

    handleDisplayDrawer() {
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer() {
        this.setState({ displayDrawer: false });
    }

    logIn(email, password) {
        this.setState({
            user: { email, password, isLoggedIn: true },
        });
    }

    logOut() {
        this.setState({
            user: { email: '', password: '', isLoggedIn: false },
        });
    }

    markNotificationAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
        this.setState((prevState) => ({
            notifications: prevState.notifications.filter(notification => notification.id !== id)
        }));
    }

    render() {
        const { user } = this.state;
        return (
            <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
                <Fragment>
                    <Notifications
                        displayDrawer={this.state.displayDrawer}
                        handleDisplayDrawer={this.handleDisplayDrawer}
                        handleHideDrawer={this.handleHideDrawer}
                        markNotificationAsRead={this.markNotificationAsRead}
                        notifications={this.state.notifications}
                    />
                    <Header />
                    {user.isLoggedIn ? (
                        <div>CourseList</div>
                    ) : (
                        <Login logIn={this.logIn} email={user.email} password={user.password} />
                    )}
                    <Footer />
                </Fragment>
            </AppContext.Provider>
        );
    }
}

export default App;

// App.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import './App.css';

function App({ isLoggedIn }) {
    return (
        <>
            <Notifications />
            <div className="App">
                <Header />
                {isLoggedIn ? (
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseList />
                    </BodySectionWithMarginBottom>
                ) : (
                    <BodySectionWithMarginBottom title="Log in to continue">
                        <Login />
                    </BodySectionWithMarginBottom>
                )}
                <BodySection title="News from the School">
                    <p>Holberton School News goes here</p>
                </BodySection>
                <Footer />
            </div>
        </>
    );
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
    isLoggedIn: false,
};

export default App;

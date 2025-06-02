import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import axios from "axios";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import Login from "../Login/Login.jsx";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";
import { StyleSheet, css } from "aphrodite";
import { appReducer, initialState, APP_ACTIONS } from "./appReducer.js";

const App = () => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const logIn = (email, password) => {
        dispatch({
            type: APP_ACTIONS.LOGIN,
            payload: { email, password },
        });
    };

    const logOut = () => {
        dispatch({ type: APP_ACTIONS.LOGOUT });
    };

    const toggleDrawer = () => {
        dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
    };

    const markNotificationAsRead = (id) => {
        dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, payload: id });
    };

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get("/notifications.json");
                dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, payload: response.data });
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };
        fetchNotifications();
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("/courses.json");
                dispatch({ type: APP_ACTIONS.SET_COURSES, payload: response.data });
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, [state.user.isLoggedIn]);

    return (
        <>
            <Notifications
                notifications={state.notifications}
                displayDrawer={state.displayDrawer}
                handleDisplayDrawer={toggleDrawer}
                handleHideDrawer={toggleDrawer}
                markNotificationAsRead={markNotificationAsRead}
            />
            <Header user={state.user} onLogout={logOut} />
            {state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom className={css(styles.responsive)} title="Course list">
                    <CourseList courses={state.courses} />
                </BodySectionWithMarginBottom>
            ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                    <Login logIn={logIn} />
                </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
                <p>Lorem ipsum dolor sit amet...</p>
            </BodySection>
            <Footer user={state.user} />
        </>
    );
};

const styles = StyleSheet.create({
    responsive: {
        '@media (max-width: 899px)': {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column'
        }
    }
});

if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

export default App;

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
import AppContext from "../Context/context.js";

const App = () => {
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
        isLoggedIn: false
    });
    const [notifications, setNotifications] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchNOtifications = async () => {
            try {
                const response = await axios.get("/notifications.json");
                setNotifications(response.data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };
        fetchNOtifications();
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("/courses.json");
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, [user.isLoggedIn]);

    return (
        <AppContext.Provider value={{ user, logOut }}>
            <Notifications
                notifications={notifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={handleDisplayDrawer}
                handleHideDrawer={handleHideDrawer}
                markNotificationAsRead={markNotificationAsRead}
            />
            <Header />
            {user.isLoggedIn ? (
                <BodySectionWithMarginBottom className={css(styles.responsive)} title="Course list">
                    <CourseList courses={courses} />
                </BodySectionWithMarginBottom>
            ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                    <Login logIn={logIn} />
                </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </p>
            </BodySection>
            <Footer />
        </AppContext.Provider>
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

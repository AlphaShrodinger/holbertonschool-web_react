import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f4f4f4',
        padding: '20px',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#ffcccb',
    },
});

function App() {
    return (
        <div className={css(styles.body)}>
            <Header />
            <BodySectionWithMarginBottom />
            <Login />
            <Notifications />
            <footer className={css(styles.footer)}>Footer Content</footer>
        </div>
    );
}

export default App;
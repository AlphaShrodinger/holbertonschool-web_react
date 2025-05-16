// Header.jsx
import React from 'react';
import logo from '../assets/holberton-logo.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        color: '#e11d3f',
        borderBottom: '4px solid #e11d3f',
        padding: '1rem',
    },
    logo: {
        height: '200px',
        marginRight: '1rem',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
});

function Header() {
    return (
        <header className={css(styles.header)}>
            <img src={logo} alt="Holberton Logo" className={css(styles.logo)} />
            <h1 className={css(styles.title)}>School dashboard</h1>
        </header>
    );
}

export default Header;

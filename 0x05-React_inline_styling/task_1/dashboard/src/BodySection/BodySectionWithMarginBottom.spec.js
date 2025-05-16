import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#003366',
        padding: '10px',
    },
    logo: {
        fontSize: '24px',
        color: '#ffffff',
    },
});

function Header() {
    return (
        <header className={css(styles.header)}>
            <div className={css(styles.logo)}>My App</div>
        </header>
    );
}

export default Header;
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    // Keyframe animation for opacity change from 0.5 to 1
    opacityChange: {
        '0%': {
            opacity: 0.5,
        },
        '100%': {
            opacity: 1,
        },
    },

    // Keyframe animation for bounce effect
    bounceEffect: {
        '0%': {
            transform: 'translateY(0px)',
        },
        '50%': {
            transform: 'translateY(-5px)',
        },
        '100%': {
            transform: 'translateY(5px)',
        },
    },

    // Style for the notification panel
    notificationPanel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Style for the notification list (remove padding)
    notificationList: {
        padding: 0,
        listStyleType: 'none',
    },

    // Style for menu item
    menuItem: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: '#fff8f8',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 2000, // Ensure it’s above other elements
        animationDuration: '1s, 0.5s', // Set durations for both animations
        animationIterationCount: '3', // Repeat the animations 3 times
        display: 'block', // Default: menu item is visible
    },

    // When hovering over the menu item, trigger the animations
    menuItemHover: {
        animationName: [styles.opacityChange, styles.bounceEffect],
    },

    // Hide the menu item when the notification list is visible
    menuItemHidden: {
        display: 'none', // Hides the menu item when notifications are visible
    },
});

class Notifications extends Component {
    state = {
        open: true, // Assuming the panel starts open
        notifications: [
            'New message from John',
            'Your profile was updated',
            'You have a new friend request',
        ],
        showMenuItem: true, // Initially, the menu item is visible
    };

    closePanel = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, notifications, showMenuItem } = this.state;

        // If the notifications are visible, hide the menu item
        const menuItemClass = showMenuItem ? styles.menuItem : styles.menuItemHidden;

        return (
            <>
                <div className={css(styles.notificationPanel)}>
                    <button
                        onClick={this.closePanel}
                        className={css(menuItemClass, styles.menuItemHover)}
                    >
                        Close Notifications
                    </button>
                    <ul className={css(styles.notificationList)}>
                        {notifications.map((notification, index) => (
                            <li key={index}>{notification}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default Notifications;

// Notifications.jsx
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    // Style for the notification panel
    notificationPanel: {
        position: 'absolute', // Position it to cover the whole screen
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh', // Make it take the full height of the viewport
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
        color: 'white',
        zIndex: 1000, // Ensure it's on top of other content
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Style for the notification list (remove padding)
    notificationList: {
        padding: 0, // Remove padding from the ul element
        listStyleType: 'none', // Remove default list style
    },
    // Style for each notification item
    notificationItem: {
        fontSize: '20px', // Set the font size to 20px
        marginBottom: '10px', // Space between notifications
        padding: '10px',
        backgroundColor: '#444',
        borderRadius: '5px',
    },
    // Style for closing the notification panel
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
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
    };

    closePanel = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, notifications } = this.state;

        if (!open) return null;

        return (
            <div className={css(styles.notificationPanel)}>
                <button className={css(styles.closeButton)} onClick={this.closePanel}>
                    Close
                </button>
                <ul className={css(styles.notificationList)}>
                    {notifications.map((notification, index) => (
                        <li key={index} className={css(styles.notificationItem)}>
                            {notification}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Notifications;

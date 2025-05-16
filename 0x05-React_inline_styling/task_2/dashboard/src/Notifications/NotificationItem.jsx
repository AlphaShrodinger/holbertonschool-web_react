// NotificationItem.jsx
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    notification: {
        padding: '10px 8px',
        fontSize: '20px',
        borderBottom: '1px solid #ccc',
    },
    urgent: {
        backgroundColor: '#ff0000', // Red background for urgent notifications
        color: 'white',
    },
    default: {
        backgroundColor: '#ffffff', // White background for default notifications
        color: 'black',
    },
});

function NotificationItem({ type, value }) {
    // Apply styling conditionally based on the notification type
    const notificationStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
        <li className={css(styles.notification, notificationStyle)}>
            {value}
        </li>
    );
}

export default NotificationItem;

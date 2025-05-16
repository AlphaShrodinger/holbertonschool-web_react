// NotificationItem.jsx
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    notificationItem: {
        width: '100%', // Take up the entire screen width
        padding: '10px 8px', // Padding of 10px vertically, 8px horizontally
        fontSize: '20px', // Set font size to 20px
        borderBottom: '1px solid black', // Black border at the bottom
        backgroundColor: '#fff', // Optional: background color for better visibility
    },
    urgent: {
        backgroundColor: '#ff0000', // Red background for urgent notifications
    },
    default: {
        backgroundColor: '#ffffff', // White background for default notifications
    },
});

function NotificationItem({ type, value }) {
    return (
        <div
            className={css(
                styles.notificationItem,
                type === 'urgent' ? styles.urgent : styles.default
            )}
        >
            {value}
        </div>
    );
}

export default NotificationItem;

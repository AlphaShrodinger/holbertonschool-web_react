import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
    notificationsPanel: {
        width: '100%',
        padding: '0',
        backgroundColor: '#ffcccc',
        display: 'block',
        fontSize: '20px',
    },
});

function Notifications() {
    return (
        <div className={css(styles.notificationsPanel)}>
            <NotificationItem type="default" value="You have a new message" />
            <NotificationItem type="urgent" value="You have a meeting in 10 minutes" />
        </div>
    );
}

export default Notifications;
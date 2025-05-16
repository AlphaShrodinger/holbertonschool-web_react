// Notifications.jsx
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length !== this.props.listNotifications.length;
    }

    render() {
        const { listNotifications } = this.props;

        return (
            <div className={css(styles.notifications)}>
                <p>Here is the list of notifications</p>
                <ul>
                    {listNotifications.length === 0 ? (
                        <NotificationItem value="No new notification for now" />
                    ) : (
                        listNotifications.map((notif) => (
                            <NotificationItem
                                key={notif.id}
                                type={notif.type}
                                value={notif.value}
                                html={notif.html}
                            />
                        ))
                    )}
                </ul>
            </div>
        );
    }
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string,
            value: PropTypes.string,
            html: PropTypes.shape({ __html: PropTypes.string }),
        })
    ),
};

Notifications.defaultProps = {
    listNotifications: [],
};

const styles = StyleSheet.create({
    notifications: {
        border: '2px dashed red',
        padding: '1rem',
        position: 'absolute',
        right: '0',
        top: '2rem',
        width: '30vw',
        backgroundColor: 'white',
        zIndex: 1,
    },
});

export default Notifications;

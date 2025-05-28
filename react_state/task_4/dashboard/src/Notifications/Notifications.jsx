import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends PureComponent {
    render() {
        const { displayDrawer, handleDisplayDrawer, handleHideDrawer, notifications, markNotificationAsRead } = this.props;
        return (
            <div className="Notifications-container">
                <div className="menuItem" onClick={handleDisplayDrawer}>
                    Your notifications
                </div>
                {displayDrawer && (
                    <div className="Notifications">
                        <button
                            style={{ float: 'right' }}
                            aria-label="Close"
                            onClick={handleHideDrawer}
                        >
                            X
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {notifications.length === 0 ? (
                                <li>No new notification for now</li>
                            ) : (
                                notifications.map((notif) => (
                                    <NotificationItem
                                        key={notif.id}
                                        type={notif.type}
                                        value={notif.value}
                                        html={notif.html}
                                        markAsRead={() => markNotificationAsRead(notif.id)}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    notifications: PropTypes.array,
};

Notifications.defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => { },
    handleHideDrawer: () => { },
    markNotificationAsRead: () => { },
    notifications: [],
};

export default Notifications;

import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ displayDrawer, notifications }) {
    return (
        <div className="Notifications-container">
            <div className="notifications-title">
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    {notifications.length > 0 ? (
                        <>
                            <p>Here is the list of notifications</p>
                            <button aria-label="Close">X</button>
                            <ul>
                                {notifications.map((notif) => (
                                    <NotificationItem
                                        key={notif.id}
                                        type={notif.type}
                                        value={notif.value}
                                        html={notif.html}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>No new notification for now</p>
                    )}
                </div>
            )}
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    notifications: PropTypes.array,
};

Notifications.defaultProps = {
    displayDrawer: false,
    notifications: [],
};

export default Notifications;
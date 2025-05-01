import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications = [] }) => {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                {notifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                    />
                ))}
            </ul>
        </div>
    );
};

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string,
            html: PropTypes.shape({ __html: PropTypes.string }),
        })
    ),
};

Notifications.defaultProps = {
    notifications: [],
};

export default Notifications;

// Notifications.jsx
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length !== this.props.listNotifications.length;
    }

    render() {
        const { listNotifications } = this.props;

        return (
            <div className="Notifications">
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

Notifications.default

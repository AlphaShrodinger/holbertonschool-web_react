import React from 'react';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    render() {
        const { notifications } = this.props;

        return (
            <div className="Notifications">
                <p>Here is the list of notifications</p>
                <ul>
                    {notifications.map((notif) => (
                        <NotificationItem
                            key={notif.id}
                            id={notif.id}
                            type={notif.type}
                            value={notif.value}
                            html={notif.html}
                            markAsRead={this.markAsRead}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Notifications;
import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
    handleClick = () => {
        const { id, markAsRead } = this.props;
        markAsRead(id);
    };

    render() {
        const { type, value, html } = this.props;

        return (
            <li data-notification-type={type} onClick={this.handleClick}>
                {value ? value : <span dangerouslySetInnerHTML={html} />}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    id: PropTypes.number.isRequired,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => { },
};

export default NotificationItem;
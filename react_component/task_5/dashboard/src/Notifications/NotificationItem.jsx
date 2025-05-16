import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
    render() {
        const { type, html, value } = this.props;
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : undefined}>
                {!html && value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;

import React from 'react';
import Notifications from './Notifications';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
        };

        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
    }

    handleDisplayDrawer() {
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer() {
        this.setState({ displayDrawer: false });
    }

    render() {
        return (
            <div className="App">
                <Notifications
                    displayDrawer={this.state.displayDrawer}
                    handleDisplayDrawer={this.handleDisplayDrawer}
                    handleHideDrawer={this.handleHideDrawer}
                />
                {/* Other components like Header, Login, Footer, etc. */}
            </div>
        );
    }
}

export default App;

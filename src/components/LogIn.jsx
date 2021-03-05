import React, {Component} from "react"

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Welcome back! Please Log In to continue</h2>
                </div>
            </React.Fragment>

        );
    }
}

export default LogIn;
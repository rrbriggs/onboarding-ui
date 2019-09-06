import React from 'react';

class MessageComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className = 'message'>{this.props.statusMessage}</span>
        )
    }
}

export default MessageComponent;
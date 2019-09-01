import React from 'react';

// todo: if there is repeat message data the issue is probably here
// this is working in the sense that it is returning
// a span with the message for the date passed to it
// e.g.: ReactDOM.render(< MessageComponent statusMessage={message}/>, reactContainer);

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
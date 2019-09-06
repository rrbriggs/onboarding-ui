import React from 'react';
import DateComponent from './DateComponent';
import MessageComponent from './MessageComponent'

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='messageContainer'>
                <DateComponent date={this.props.date} />
                <MessageComponent statusMessage={this.props.statusMessage} />
            </div>
        )
    }
}

export default MessageContainer;
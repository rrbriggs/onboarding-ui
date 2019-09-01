import React from 'react';
import DateComponent from './DateComponent';
import MessageComponent from './MessageComponent'

// what if I consolidate other components to here?

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: this.props.date,
            statusMessage: this.props.statusMessage
        }
    }

    render() {
        return(
            <div className='messageContainer'>
                <DateComponent date={this.state.date} />
                <MessageComponent statusMessage={this.state.statusMessage} />
            </div>
        )
    }
}

export default MessageContainer;
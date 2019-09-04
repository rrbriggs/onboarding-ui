import React from 'react';
import PhotoContainer from './PhotoContainer';
import MessageContainer from './MessageContainer';

// todo: make oddPostBlock set programmatically
class PostFactoryComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoURL: this.props.photoURL,
            screenName: this.props.screenName,
            userHandle: this.props.userHandle,
            date: this.props.date,
            statusMessage: this.props.statusMessage,
            postStyle: this.props.postStyle
        }
    }

    render() {
        let styleClass = `${this.state.postStyle} postStyle`
        return(
            <div className={styleClass}>
                <PhotoContainer photoURL={this.state.photoURL} screenName={this.state.screenName} userHandle={this.state.userHandle} />
                <MessageContainer date={this.state.date} statusMessage={this.state.statusMessage} />
            </div>
        )
    }
}

export default PostFactoryComponent;
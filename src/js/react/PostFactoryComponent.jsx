import React from 'react';
import PhotoContainer from './PhotoContainer';
import MessageContainer from './MessageContainer';

class PostFactoryComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoURL: this.props.photoURL,
            screenName: this.props.screenName,
            userHandle: this.props.userHandle,
            date: this.props.date,
            statusMessage: this.props.statusMessage,
            postStyle: this.props.postStyle,
            postID: this.props.postID
        }
    }

    render() {
        let styleClass = `${this.state.postStyle} postStyle`
        return(
            <div className={styleClass} onClick={() => document.location.href = `http://twitter.com/${this.state.userHandle}/status/${this.state.postID}`}>
                <PhotoContainer photoURL={this.state.photoURL} screenName={this.state.screenName} userHandle={this.state.userHandle} />
                <MessageContainer date={this.state.date} statusMessage={this.state.statusMessage} />
            </div>
        )
    }
}

export default PostFactoryComponent;
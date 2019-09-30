import React from 'react';
import PhotoContainer from './PhotoContainer';
import MessageContainer from './MessageContainer';

class PostFactoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.props.userHandle;

        if (this.props.userTimeline == "true") {
            this.handle = "";
        }        
    }
    
    render() {
        let styleClass = `${this.props.postStyle} postStyle`;
        return(
            <div className={styleClass} onClick={this.handleClick}>
                <PhotoContainer photoURL={this.props.photoURL} screenName={this.props.screenName} userHandle={this.handle} />
                <MessageContainer date={this.props.date} statusMessage={this.props.statusMessage} />
            </div>
        )
    }
}

export default PostFactoryComponent;
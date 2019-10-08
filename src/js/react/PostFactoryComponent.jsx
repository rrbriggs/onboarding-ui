import React from 'react';
import PhotoContainer from './PhotoContainer';
import MessageContainer from './MessageContainer';

class PostFactoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.props.userHandle;     

        this.handleClick = () => {
            window.open(`http://twitter.com/${this.props.userHandle}/status/${this.props.postID}`, '_blank');
        }
    }
    
    render() {
        let styleClass = `${this.props.postStyle} postStyle`;
        return(
            <div className={styleClass} onClick={this.handleClick}>
                <PhotoContainer photoURL={this.props.photoURL} screenName={this.props.screenName} userHandle={this.handle} userTimeline={this.props.userTimeline} />
                <MessageContainer date={this.props.date} statusMessage={this.props.statusMessage} />
            </div>
        )
    }
}

export default PostFactoryComponent;
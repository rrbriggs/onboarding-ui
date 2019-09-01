import React from 'react';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoURL: this.props.photoURL,
            screenName: this.props.screenName,
            userHandle: this.props.userHandle
        }
    }

    render() {
        return (
            <div className='photoContainer'>
                <img src={this.state.photoURL} className='image' />
                <div className='screenName'>{this.state.screenName}</div>
                <div className='handle'>{this.state.userHandle}</div>
            </div>
        )
    }
}

export default PhotoContainer;
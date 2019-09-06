import React from 'react';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='photoContainer'>
                <img src={this.props.photoURL} className='image' />
                <div className='screenName'>{this.props.screenName}</div>
                <div className='handle'>{this.props.userHandle}</div>
            </div>
        )
    }
}

export default PhotoContainer;
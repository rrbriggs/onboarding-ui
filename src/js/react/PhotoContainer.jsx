import React from 'react';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHandle() {
        if(this.props.userTimeline != true) {
            return(
                <div className='handle'>{this.props.userHandle}</div>
            );
        }
    }

    render() {
        return (
            <div className='photoContainer'>
                <img src={this.props.photoURL} className='image' />
                <div className='screenName'>{this.props.screenName}</div>
                {this.renderHandle()}
            </div>
        )
    }
}

export default PhotoContainer;
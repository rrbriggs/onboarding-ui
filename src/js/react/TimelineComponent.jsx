import React from 'react';
import HomeTimeline from '../react/HomeTimelineComponent';
import UserTimeline from '../react/UserTimelineComponent';
import PostFactoryComponent from './PostFactoryComponent';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {         
        return (
            <div className = 'master'>
                <div className='title'>Lab for Briggs</div>
                <div id='timelineDiv' className='timelineDiv'>
                    <HomeTimeline />
                    <UserTimeline />
                </div> 
            </div>
        );
    }
}

export default TimelineComponent;
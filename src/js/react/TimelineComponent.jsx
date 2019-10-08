import React from 'react';
import HomeTimelineComponent from '../react/HomeTimelineComponent';
import UserTimelineComponent from '../react/UserTimelineComponent';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {         
        return (
            <div className = 'master'>
                <div className='title'>Lab for Briggs</div>
                <div className='tab-bar'>
                    <button className='tab'>Home Timeline</button>
                    <button className='tab'>User Timeline</button>
                    <button className='tab'>Post to Timeline</button>
                </div>
                <div id='timelineDiv' className='timelineDiv'>
                    <HomeTimelineComponent />
                    <UserTimelineComponent />
                </div> 
            </div>
        );
    }
}

export default TimelineComponent;
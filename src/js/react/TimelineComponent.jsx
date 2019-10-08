import React from 'react';
import HomeTimelineComponent from '../react/HomeTimelineComponent';
import UserTimelineComponent from '../react/UserTimelineComponent';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);

        this.state = {
            homeTimelineDisplay: '',
            userTimelineDisplay: 'none'
        }
    }

    handleTabClick(selectedTab) {
        switch(selectedTab) {
            case 'homeTimeline':
                this.setState({
                    homeTimelineDisplay: '',
                    userTimelineDisplay: 'none',
                }) ;
                break;
            case 'userTimeline':
                this.setState({
                    homeTimelineDisplay: 'none',
                    userTimelineDisplay: '',
                }) ;
                break;
            default:
                console.log("Tab value not handled");
        }
    }

    componentDidMount() {
        this.handleTabClick();
    }

    render() {         
        return (
            <div className = 'master'>
                <div className='title'>Lab for Briggs</div>
                <div className='tab-bar'>
                    <button className='tab' onClick={() => this.handleTabClick('homeTimeline')}>Home Timeline</button>
                    <button className='tab' onClick={() => this.handleTabClick('userTimeline')}>User Timeline</button>
                    <button className='tab'>Post to Timeline</button>
                </div>
                <div id='timelineDiv' className='timelineDiv'>
                    <HomeTimelineComponent display={this.state.homeTimelineDisplay}/>
                    <UserTimelineComponent display={this.state.userTimelineDisplay}/>
                </div> 
            </div>
        );
    }
}

export default TimelineComponent;
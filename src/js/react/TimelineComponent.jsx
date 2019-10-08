import React from 'react';
import HomeTimelineComponent from '../react/HomeTimelineComponent';
import UserTimelineComponent from '../react/UserTimelineComponent';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);

        this.state = {
            homeTimelineDisplay: '',
            userTimelineDisplay: 'none',
            homeTabClass: 'tab',
            userTabClass: 'tab',
            postTabClass: 'tab',
        }
    }

    handleTabClick(selectedTab) {
        switch(selectedTab) {
            case 'homeTimeline':
                this.setState({
                    homeTimelineDisplay: '',
                    userTimelineDisplay: 'none',
                    homeTabClass: 'tab-selected',
                    userTabClass: 'tab',
                    postTabClass: 'tab',
                }) ;
                break;
            case 'userTimeline':
                this.setState({
                    homeTimelineDisplay: 'none',
                    userTimelineDisplay: '',
                    homeTabClass: 'tab',
                    userTabClass: 'tab-selected',
                    postTabClass: 'tab',
                }) ;
                break;
            case 'postToTimeline':
                this.setState({
                    homeTimelineDisplay: 'none',
                    userTimelineDisplay: 'none',
                    homeTabClass: 'tab',
                    userTabClass: 'tab',
                    postTabClass: 'tab-selected',
                }) ;
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
                    <button className={this.state.homeTabClass} onClick={() => this.handleTabClick('homeTimeline')}>Home Timeline</button>
                    <button className={this.state.userTabClass} onClick={() => this.handleTabClick('userTimeline')}>User Timeline</button>
                    <button className={this.state.postTabClass} onClick={() => this.handleTabClick('postToTimeline')}>Post Tweet</button>
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
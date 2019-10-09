import React from 'react';
import HomeTimelineComponent from '../react/HomeTimelineComponent';
import UserTimelineComponent from '../react/UserTimelineComponent';
import PostTweetComponent from "./PostTweetComponent";

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.displaySelectedTab = this.displaySelectedTab.bind(this);

        this.state = {
            selectedTab: 'homeTab',
        }
    }

    displaySelectedTab() {
        switch(this.state.selectedTab) {
            case 'homeTab':
                return (<HomeTimelineComponent />);
            case 'userTab':
                return (<UserTimelineComponent />);
            case 'postTab':
                return (<PostTweetComponent />);
        }
    }

    handleTabClick(e) {
        this.setState({ selectedTab: e.target.id });
        e.target.className = "tab-selected";
    }

    render() {         
        return (
            <div className = 'master'>
                <div className='title'>Lab for Briggs</div>
                <div className='tab-bar'>
                    <button id="homeTab" className="tab" onClick={this.handleTabClick}>Home Timeline</button>
                    <button id="userTab" className="tab" onClick={this.handleTabClick}>User Timeline</button>
                    <button id="postTab" className="tab" onClick={this.handleTabClick}>Post Tweet</button>
                </div>
                <div id='timelineDiv' className='timelineDiv'>
                    {this.displaySelectedTab()}
                </div> 
            </div>
        );
    }
}

export default TimelineComponent;
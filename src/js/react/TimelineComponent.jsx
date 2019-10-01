import React from 'react';
import {timelineReq} from '../TimelineReq';
import {userTimelineReq} from '../TimelineReq';
import PostFactoryComponent from './PostFactoryComponent';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.homeButtonClick = this.homeButtonClick.bind(this);
        this.userButtonClick = this.userButtonClick.bind(this);

        this.prevData = null;
        this.prevUserData = null;

        this.state = { 
            data: [],
            userData: [],
            hasError: false
        }

        this.parseUserTimeline = (obj) => {
            if (obj != this.prevData) {
                this.prevUserData = obj;
                let jsonData = JSON.parse(obj);
                this.setState({
                    userData: jsonData
                });
            }
        }

        this.parseDataJson = (obj) => {
            if (obj != this.prevData) {
                this.prevData = obj;
                let jsonData = JSON.parse(obj);
                this.setState({
                    data: jsonData
                }); 
            } 
        }
    }

    async requestTimeline() {
        try {
            const data = await timelineReq();
            this.parseDataJson(data);
        } catch {
            this.prevData = "";
            this.setState({
                data: null
            });
        }
    }

    async requestUserTimeline() {
        try {
            const userData = await userTimelineReq();
            this.parseUserTimeline(userData);
        } catch {
            this.prevUserData = "";
            this.setState({
                userData: null
            });
        }
    }

    homeButtonClick() {
        this.requestTimeline();
    }

    userButtonClick() {
        this.requestUserTimeline();
    }

    componentDidMount() {
        this.requestTimeline();
        this.requestUserTimeline();
    }

    homeTimeline() {
        let count = 0;
        if (this.state.data != null) {
            return (
                this.state.data.map((post) => {
                    if(post != "") {
                        let postOddity = ((count % 2 == 0) ? 'evenPostBlock' : 'oddPostBlock')
                        count++;
                        return <PostFactoryComponent key={post.postID + 1} postID={post.postID} photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity}/>
                    }
                })
            );
        } else {
            return <div className='error'>No data currently available.</div>
        }
    }

    userTimeline() {
        let userTimeCount = 0;
        if (this.state.userData != null) {
            return (
                this.state.userData.map((post) => {
                    if(post != "") {
                        let postOddity = ((userTimeCount % 2 == 0) ? 'evenUserPost' : 'oddUserPost')
                        userTimeCount++;
                        return <PostFactoryComponent key={post.postID + 1} postID={post.postID} photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity} userTimeline="true"/>
                    }
                })
            );
        } else {
            return <div className='error'>No tweets are available, post a tweet!</div>
        }
    }

    render() {         
        return (
            <div className = 'master'>
                <div className='title'>Lab for Briggs</div>
                <div id='timelineDiv' className='timelineDiv'>
                    <div id='homeTimeline' className='homeTimeline'> 
                        <h2 className="timelineHeader"> Home Timeline </h2>
                        <div className='infoContainer'>
                            <button id="getTimelineButton" onClick={this.homeButtonClick} className='button'>Refresh</button>
                        </div>
                        {this.homeTimeline()} 
                    </div>
                    <div id='userTimeline' className='userTimeline'> 
                        
                        <div className='userInfoContainer'>
                            <h2 className="timelineHeader"> User Timeline </h2>
                            <button id="getUserTimelineButton" onClick={this.userButtonClick} className='button'>Refresh</button>
                        </div>
                        {this.userTimeline()} 
                    </div>
                </div> 
            </div>
        );
    }
}

export default TimelineComponent;
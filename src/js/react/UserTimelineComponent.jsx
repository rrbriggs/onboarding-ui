import React from 'react';
import {userTimelineReq} from '../TimelineReq';
import PostFactoryComponent from './PostFactoryComponent';

class UserTimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.userButtonClick = this.userButtonClick.bind(this);
        this.prevUserData = null;

        this.state = { 
            userData: [],
            hasError: false
        }

        this.processTimeline = (obj) => {
            if (obj != this.prevUserData) {
                this.prevUserData = obj;
                let jsonData = JSON.parse(obj);
                this.setState({
                    userData: jsonData
                });
            }
        }
    }

    componentDidMount() {
        this.requestUserTimeline();
    }

    async requestUserTimeline() {
        try {
            const userData = await userTimelineReq();
            this.processTimeline(userData);
        } catch {
            this.prevUserData = "";
            this.setState({
                userData: null
            });
        }
    }

    userButtonClick() {
        this.requestUserTimeline();
    }

    userTimeline() {
        let userTimeCount = 0;
        if (this.state.userData != null) {
            return (
                this.state.userData.map((post) => {
                    if(post != "") {
                        let postOddity = ((userTimeCount % 2 == 0) ? 'evenUserPost' : 'oddUserPost')
                        userTimeCount++;
                        return <PostFactoryComponent key={post.postID + 1} postID={post.postID} photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity} userTimeline={true}/>
                    }
                })
            );
        } else {
            return <div className='error'>No tweets are available, post a tweet!</div>
        }
    }

    render() {
        return(
            <div id='userTimeline' className='userTimeline'> 
                <div className='userInfoContainer'>
                    <h2 className="timelineHeader"> User Timeline </h2>
                    <button id="getUserTimelineButton" onClick={this.userButtonClick} className='button'>Refresh</button>
                </div>
                {this.userTimeline()} 
            </div>
        );
    }
}

export default UserTimelineComponent;
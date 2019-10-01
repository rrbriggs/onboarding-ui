import React from 'react';
import {timelineReq} from '../TimelineReq';
import PostFactoryComponent from './PostFactoryComponent';

class HomeTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.homeButtonClick = this.homeButtonClick.bind(this);
        this.prevData = null;

        this.state = { 
            data: [],
            userData: [],
            hasError: false
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

    componentDidMount() {
        this.requestTimeline();
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

    homeButtonClick() {
        this.requestTimeline();
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

    render() {
        return(
            <div id='homeTimeline' className='homeTimeline'> 
                        <h2 className="timelineHeader"> Home Timeline </h2>
                        <div className='infoContainer'>
                            <button id="getTimelineButton" onClick={this.homeButtonClick} className='button'>Refresh</button>
                        </div>
                        {this.homeTimeline()} 
                    </div>
        );
    }
}

export default HomeTimeline;
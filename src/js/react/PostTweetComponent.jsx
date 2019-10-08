import React from 'react';
import {filteredHomeTimeline, postTweet} from '../TimelineReq';

class PostTweetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleTweetKeyPress = this.handleTweetKeyPress.bind(this);
        this.handlePostTweetChange = this.handlePostTweetChange.bind(this);
        this.sendTweetButtonClick = this.sendTweetButtonClick.bind(this);
        this.sendTweet = this.sendTweet.bind(this);

        this.state = {
            tweet: "",
            data: null,
            filterNoData: null,
            hasError: false
        }

        this.processTimeline = (obj) => {
            if (obj != this.prevData) {
                this.prevData = obj;
                this.setState({
                    data: obj
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
            if (data != null) {
                this.processTimeline(data);
            }

        } catch {
            this.prevData = "";
            this.setState({
                data: null
            });
        }
    }

    sendTweetButtonClick() {
        this.sendTweet();
    }

    async sendTweet(e) {
        console.log('things');

        if(e) {
            e.preventDefault();
        }

        // this.setState({
        //     data: null,
        // });

        try {
            const data = await postTweet(this.state.tweet);
            if (data != null) {
                console.log('lets go!!!');

                if (data.length != 0) {
                    this.processTimeline(data);
                } else {
                    this.setState({
                        data: null,
                        filterNoData: true,
                    });
                }
            }
        } catch {
            console.log('failed stuff');
            this.setState({
                data: null,
            });
        }
    }

    handlePostTweetChange(e) {
        this.setState({ tweet: e.target.value});
    }

    handleTweetKeyPress(e) {
        if (e.key == "Enter" && this.state.tweet.valueOf()) {
            this.sendTweet();

        }
    }

    render() {
        return(
            <div id='postTweet' className='postTweet' style={{display: this.props.display}}>
                <div className='infoContainer'>
                    <div className='infoInner'>
                        <textarea id="tweetText" type="textarea" placeholder="Enter your tweet here." value={this.state.value} onChange={this.handlePostTweetChange} onKeyPress={this.handleTweetKeyPress}></textarea>
                        <button id="sendTweetButton" type="button" onClick={this.sendTweet} disabled={(this.state.tweet)? false : true}>Send Tweet</button>
                    </div>
                    {/*<button id="getTimelineButton" onClick={this.homeButtonClick} className='button'>Refresh</button>*/}


                </div>
                {this.state.data}
            </div>
        );
    }
}

export default PostTweetComponent;
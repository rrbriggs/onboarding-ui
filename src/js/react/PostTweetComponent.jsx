import React from 'react';
import {filteredHomeTimeline, postTweet} from '../TimelineReq';

class PostTweetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleTweetKeyPress = this.handleTweetKeyPress.bind(this);
        this.handlePostTweetChange = this.handlePostTweetChange.bind(this);
        this.sendTweet = this.sendTweet.bind(this);

        this.testMessage = this.testMessage.bind(this);

        this.state = {
            tweet: "",
            data: null,
            filterNoData: null,
            hasError: false
        }

        this.processTimeline = (obj) => {
            this.setState({
                data: obj
            });

        }
    }

    async sendTweet(e) {
        if(e) {
            e.preventDefault();
        }

        this.setState({
            data: null,
        });

        try {
            const data = await postTweet(this.state.tweet);
            if (data != null) {
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

    testMessage() {
        if(this.state.data != null && this.state.data != "") {
            return(<div>{this.state.data.message}</div>)
        }
    }

    render() {
        return(
            <div id='postTweet' className='postTweet' style={{display: this.props.display}}>
                <div className='postTweetContainer'>
                    <textarea rows={10} cols={50}  id="tweetTextArea" className="tweetTextArea" type="textarea" placeholder="Enter your tweet here." value={this.state.value} onChange={this.handlePostTweetChange} onKeyPress={this.handleTweetKeyPress}></textarea>
                    <button id="sendTweetButton" type="button" onClick={this.sendTweet} disabled={(this.state.tweet)? false : true}>Send Tweet</button>
                </div>
                <div className='infoContainer'>
                </div>

                {this.testMessage()}
            </div>
        );
    }
}

export default PostTweetComponent;
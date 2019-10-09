import React from 'react';
import {postTweet} from '../TimelineReq';

class PostTweetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleTweetKeyPress = this.handleTweetKeyPress.bind(this);
        this.handlePostTweetChange = this.handlePostTweetChange.bind(this);
        this.sendTweet = this.sendTweet.bind(this);
        this.messageCount = this.messageCount.bind(this);

        this.messageStatus = this.messageStatus.bind(this);

        this.state = {
            tweet: "",
            data: null,
            tweetNotSuccessful: null,
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
                    });
                }
            }
        } catch {
            this.setState({
                data: null,
                tweetNotSuccessful: true,
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

    messageCount() {
        return(
            <div className="charCount"><span>{this.state.tweet.length}</span></div>
        )
    }

    messageStatus() {
        if(this.state.data != null && this.state.data != "") {
            return(<div>Message successfully sent!</div>)
        }

        if(this.state.tweetNotSuccessful == true) {
            return(<div>Message not sent.</div>)

        }
    }

    render() {
        return(
            <div id='postTweet' className='postTweet' style={{display: this.props.display}}>
                <div className='postTweetContainer'>
                    {this.messageCount()}
                    <textarea rows={10} cols={50} maxlength="280" id="tweetTextArea" className="tweetTextArea" type="textarea" placeholder="Enter your tweet here." value={this.state.value} onChange={this.handlePostTweetChange} onKeyPress={this.handleTweetKeyPress}></textarea>
                    <button id="sendTweetButton" className="sendButton" type="button" onClick={this.sendTweet} disabled={(this.state.tweet)? false : true}>Send Tweet</button>
                    {this.messageStatus()}
                </div>
                <div className='infoContainer'>
                </div>

            </div>
        );
    }
}

export default PostTweetComponent;
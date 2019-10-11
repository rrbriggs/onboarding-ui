import React from 'react';
import {postTweet} from '../TimelineReq';

class PostTweetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleTweetKeyPress = this.handleTweetKeyPress.bind(this);
        this.handlePostTweetChange = this.handlePostTweetChange.bind(this);
        this.sendTweet = this.sendTweet.bind(this);
        this.maxCharCount = 280;
        this.msgSuccess = null;

        this.state = {
            tweet: "",
            data: null,
        };

    }

    async sendTweet() {
        this.setState({
            data: null,
        });

        try {
            const data = await postTweet(this.state.tweet);
            if (data != null) {
                if (data.length != 0) {
                    this.msgSuccess = true;
                    this.setState({
                        data: data,
                        tweet: "",
                    });
                }
            }
        } catch {
            this.msgSuccess = false;
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
                <div className='postTweetContainer'>
                    <div className="charCount"><span>{this.maxCharCount-this.state.tweet.length}</span></div>
                    <textarea
                        rows={10}
                        cols={50}
                        maxLength={this.maxCharCount}
                        id="tweetTextArea"
                        className="tweetTextArea"
                        type="textarea"
                        placeholder="Enter your tweet here."
                        value={this.state.tweet}
                        onChange={this.handlePostTweetChange}
                        onKeyPress={this.handleTweetKeyPress} />

                    <button id="sendTweetButton"
                            className="sendButton"
                            type="button"
                            onClick={this.sendTweet}
                            disabled={(this.state.tweet)? false : true}>
                            Send Tweet
                    </button>

                    {
                        this.msgSuccess !== null ?
                        <span
                            className={this.msgSuccess === true ? "messageSuccess" : "messageFail"}>
                                {this.msgSuccess === true ? "Message successfully sent!" : "Message not sent."}
                        </span> : ""
                    }
                </div>
            </div>
        );
    }
}

export default PostTweetComponent;
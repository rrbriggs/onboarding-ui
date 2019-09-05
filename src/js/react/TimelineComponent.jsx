import React from 'react';
import timelineRequest from '../TimelineRequest';
import PostFactoryComponent from './PostFactoryComponent';
import ErrorBoundary from './ErrorBoundary'

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClick = this.buttonClick.bind(this);

        let prevData = null;

        this.state = {
            data: [],
            hasError: false
        }

        this.parseDataJson = (obj) => {
            if (obj != false) {
                if (obj != prevData) {
                    prevData = obj;
                    let jsonData = JSON.parse(obj);
                    this.setState({
                        data: jsonData
                    }); 
                }
            } else {
                prevData = "";
                console.log("else")
                this.setState({
                    data: null
                });
            }
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    buttonClick () {
        timelineRequest(this.parseDataJson);
    }

    componentDidMount() {
        timelineRequest(this.parseDataJson);
    }

    render() {
        let count = 0;
        let timeline;
        if (this.state.data != null) {
            timeline = (
                this.state.data.map((post) => {
                    if(post != "") {
                        let postOddity = ((count % 2 == 0) ? 'evenPostBlock' : 'oddPostBlock')
                        count++;
                        return <PostFactoryComponent key={post.postID + 1} postID={post.postID} photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity}/>
                    }
                })
            );
        } else {
            timeline = <div className='error'>No data currently available.</div>
        }
         
        return (
            <ErrorBoundary data={this.state.data}>
                <div className = 'master'>
                    <div className='title'>Lab for Briggs</div>
                    <div className='infoContainer'>
                        <button id="getTimeline Button" onClick={this.buttonClick} className='button'>Get Timeline</button>
                    </div>
                    <div id='timelineDiv' className='timelineDiv'>
                        {timeline}
                    </div> 
                </div>
            </ErrorBoundary>
        );
        
    }
}

export default TimelineComponent;
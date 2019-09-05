import React from 'react';
import timelineRequest from '../TimelineRequest';
import PostFactoryComponent from './PostFactoryComponent';
import ErrorBoundary from './ErrorBoundary'

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClick = this.buttonClick.bind(this);
        this.timelineDiv = React.createRef();

        this.state = {
            data: [],
            hasError: false
        }

        this.parseDataJson = (obj) => {
            let jsonData = JSON.parse(obj);
            this.setState({
                data: jsonData
            });
        }
        
        this.timereq = timelineRequest(this.parseDataJson);

        
    }

    static getDerivedStateFromError(error) {

        return {hasError: true};
    }

    buttonClick () {
        timelineRequest(this.parseDataJson);

        let count = 0;
        let timeline = (
            this.state.data.map((post) => {
                if(post != "") {
                    let postOddity = ((count % 2 == 0) ? 'evenPostBlock' : 'oddPostBlock')
                    count++;
                    return <PostFactoryComponent key={post.postID} photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity}/>
                }
            })
        ); 

        let timelineDiv = this.refs.timelineDiv;
        return <div ref={timelineDiv}>{timeline}</div>;
    }

    componentDidMount() {
        timelineRequest(this.parseDataJson);
    }

    render() {
        
        let count = 0;
        let timeline = (
            this.state.data.map((post) => {
                if(post != "") {
                    let postOddity = ((count % 2 == 0) ? 'evenPostBlock' : 'oddPostBlock')
                    count++;
                    return <PostFactoryComponent key={post.postID} photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity}/>
                }
            })
        ); 
        
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
        )
        
    }
}

export default TimelineComponent;
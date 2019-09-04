import React from 'react';
import timelineRequest from './TimelineRequest';
import PostFactoryComponent from './PostFactoryComponent';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }

        this.parseDataJson = (obj) => {
            let jsonData = JSON.parse(obj);
            this.setState({
                data: jsonData
            });
        }
        
        this.timereq = timelineRequest(this.parseDataJson);

        this.buttonClick = () => {
            timelineRequest(this.parseDataJson);
        }
    }

    componentDidMount() {
        timelineRequest(this.parseDataJson);
    }

    render() {
        let count = 0;
        let timeline = (
                this.state.data.map((post) => {
                    let postOddity = ((count % 2 == 0) ? 'evenPostBlock' : 'oddPostBlock')
                    count++;
                    return <PostFactoryComponent photoURL={post.socialUser.profileImageUrl} screenName={post.socialUser.name} userHandle={post.socialUser.twitterHandle} date={post.createdAt} statusMessage={post.message} postStyle={postOddity}/>
                })
        ); 
        return (
            <div className = 'master'>
                <div className='title'>Lab for Briggs</div>
                <div className='infoContainer'>
                    <button id="getTimeline Button" onClick={this.buttonClick} className='button'>Get Timeline</button>
                </div>
                <div className='timelineDiv'>
                    {timeline}
                </div> 
            </div>
           
        )
        
    }
}

export default TimelineComponent;
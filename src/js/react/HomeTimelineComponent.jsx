import React from 'react';
import {timelineReq} from '../TimelineReq';
import {filteredHomeTimeline} from '../TimelineReq';
import PostFactoryComponent from './PostFactoryComponent';

class HomeTimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.homeButtonClick = this.homeButtonClick.bind(this);
        this.handleHomeFilterChange = this.handleHomeFilterChange.bind(this);
        this.handleHomeFilterKeyPress = this.handleHomeFilterKeyPress.bind(this);
        this.getFilteredResults = this.getFilteredResults.bind(this);
        this.prevData = null;

        this.state = {
            filter: "",
            data: null,
            hasError: false
        }

        this.processTimeline = (obj) => {
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
            this.processTimeline(data);
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

    handleHomeFilterChange(e) {
        this.setState({ filter: e.target.value});
    }

    handleHomeFilterKeyPress(e) {
        if (e.key == "Enter" && this.state.filter.valueOf()) {
            this.getFilteredResults();
        }
    }

    async getFilteredResults(e) {
        if(e) {
            e.preventDefault();
        }

        this.setState({
            data: [],
        });

        try {
            const data = await filteredHomeTimeline(this.state.filter.toLowerCase());
            this.processTimeline(data);
        } catch {
            this.prevData = "";
            this.setState({
                data: null,
            });
        }
    }

    render() {
        return(
            <div id='homeTimeline' className='homeTimeline'> 
                <h2 className="timelineHeader"> Home Timeline </h2>
                <div className='infoContainer'>
                    <div className='infoInner'>
                        <input id="filterHome" type="text" placeholder="Enter filter query." value={this.state.filter} onChange={this.handleHomeFilterChange} onKeyPress={this.handleHomeFilterKeyPress}></input>
                        <button id="filterHomeButton" type="button" onClick={this.getFilteredResults} disabled={(this.state.filter)? false : true}>Filter</button>
                    </div>
                    <button id="getTimelineButton" onClick={this.homeButtonClick} className='button'>Refresh</button>


                </div>
                {this.homeTimeline()} 
            </div>
        );
    }
}

export default HomeTimelineComponent;
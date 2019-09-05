import React from 'react';
import TimelineComponent from './TimelineComponent';
import ErrorBoundary from './ErrorBoundary';

export default class AppComponenet extends React.Component {
    constructor(props) {
        super();

        this.buttonClick = this.buttonClick.bind(this);
        this.timelineDiv = React.createRef();

        this.state = {
            count: 0
        }

    }

    buttonClick () {
        this.forceUpdate();
        // console.log('button pressed');
        // this.setState({
        //     count: (this.state.count + 1)
        // })
        // console.log(this.state.count);
        // let timelineDiv = this.refs.timelineComp;
        // this.forceUpdate();
        // return <div ref={timelineDiv}> asdf</div>;
    }

    rollOutTimeline() {
        this.setState{}
        return <TimelineComponent updated={}/>
    }

    render() {
        return (
            <ErrorBoundary>
                <div className = 'master'>
                    <div className='title'>Lab for Briggs {Math.random()}</div>
                    <div className='infoContainer'>
                        <button id="getTimeline Button" onClick={this.buttonClick} className='button'>Get Timeline</button>
                    </div>
                    <div id="timelineComp">
                        {this.rollOutTimeline()}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}
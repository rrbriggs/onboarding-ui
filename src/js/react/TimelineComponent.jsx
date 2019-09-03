import React from 'react';
import TimelineRequest from './TimelineRequest';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        let timelineReq = new TimelineRequest();
        // let timelinebs = JSON.parse(timelineReq);
        // console.log(`***timelineReq ::::: ${timelineReq}`)
        // console.log(`***timelineReq[0][0] ::::: ${timelineReq[0]}`)

        // try {
        //     if (timelineReq != null) {

        //         () => {
        //             for(let x = 0; x < timelineReq.length; x++) {
        //                 let socialPost = timelineReq[x];
        //                 console.log(socialPost.message);
        //             }
        //         };
        //     }
        //     else {
        //         // todo: handle if TimelineRequest is null
        //         consosle.log(`TimelineRequest is null`);
        //     }
        // } catch (e) {
        //     console.log(`**Error from timelineReq madness: ${e}`)
        // }
        

        this.state = {

        }
    }

    render() {
        
        return(
           <div className='timelineDiv'>
                test
            </div> 
        )
        
    }
}

export default TimelineComponent;
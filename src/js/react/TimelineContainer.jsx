import TimelineRequest from '../request';

class TimelineContainer extends React.Component {
   constructor(props) {
       super(props);

       this.state = {
           data: null,
       }

       this.getTimeline = (data) => {
           this.setState({
               data: JSON.parse(data)
           });
       }

       this.handleClick = (error) => {
           error.preventDefault();

           this.setState({
               data: null
           })
           TimelineRequest(this.getTimeline);
       } 
    } 

    componentDidMount() {
        TimelineRequest(this.getTimeline);
    }

    // render() {
    //     let TimelineContainer = (
    //         <div id = "timelineContainer">
    //             {this.state.data.map(obj => 
    //                 PostContainer key={status.postID} />)}
    //         </div>
    //     )
    // }
}

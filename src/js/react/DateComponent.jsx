import React from 'react';
// this is working in the sense that it is returning
// a span with the date for the date passed to it
// e.g.: ReactDOM.render(< DateComponent date={createdAt}/>, reactContainer);

class DateComponent extends React.Component {
    constructor(props) {
        super(props);

        let epochDate = parseInt(props.date);
        let date = new Date(epochDate);

        //using state instead of out of class var init
        this.state = {
            readableDate: date,
            postDate: ''
        }
    }
    
    componentDidMount() {
        this.setState({
            postDate: (this.state.readableDate.toLocaleString('default', {month: 'short'})) 
            + " " + this.state.readableDate.getDate()
        })
    }

    render() {
        return (
            <span className = 'date'>{this.state.postDate}</span>
        )
    }
}

export default DateComponent;
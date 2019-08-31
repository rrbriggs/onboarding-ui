import React from 'react';
// this is working in the sense that it is returning
// a span with the date for the date passed to it
// e.g.: ReactDOM.render(< DateComponent date={createdAt}/>, reactContainer);

let postDate;

class DateComponent extends React.Component {
    constructor(props) {
        super();
 
        let epochDate = parseInt(props.date);
        let readableDate = new Date(epochDate);
        postDate = (readableDate.toLocaleString('default', {month: 'short'})) 
                        + " " + readableDate.getDate();
    }

    render() {
        return (
            <span className = 'date'>{postDate}</span>
        )
    }
}

export default DateComponent;
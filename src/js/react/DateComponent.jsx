import React from 'react';

class DateComponent extends React.Component {
    constructor(props) {
        super(props);

        let epochDate = parseInt(props.date);
        this.date = new Date(epochDate);
        this.postDate = this.date.toLocaleString('default', {month: 'short'})
        + " " + this.date.getDate();   
    }

    render() {
        return (
            <span className = 'date'>{this.postDate}</span>
        );
    }
}

export default DateComponent;
import React from 'react';

class HelloReact extends React.Component {
    render() {
        let test = React.createElement('div');
        return (<div>Hello React!</div>);
    }
}

export default HelloReact;
import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            data: []
        };
    }

    static getDerivedStateFromError(error) {

        return { hasError: true};
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        if (this.state.hasError) {

        }

        return this.props.children;
    }
}
import  "../style/index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import TimelineComponent from './react/TimelineComponent';

document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById('root');
    ReactDOM.render(< TimelineComponent />, root);
});
import  "../style/index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from './react/hellomessage';
// import DateComponent from './react/DateComponent';
// import MessageContainer from './react/MessageContainer';
// import PostFactoryComponent from './react/PostFactoryComponent';
import TimelineComponent from './react/TimelineComponent';

document.addEventListener("DOMContentLoaded", function() {
    
    const infoContainer = document.getElementById("infoContainer");
    const button = document.createElement("button");
    const timelineDiv = document.getElementById("timelineData");
    
    ReactDOM.render(< TimelineComponent />, timelineDiv);
    
    // set up overall doc stuff (font)
    const parentDiv = document.getElementById("parentDiv");
    parentDiv.className = "master";

    // set up title formatting
    const titleDiv = document.getElementById("titleDiv");
    titleDiv.className = "title";

    button.innerHTML = "Get Timeline";
    button.id = "getTimeline Button";
    button.className = "button";
    infoContainer.className = "infoContainer";
    infoContainer.appendChild(button);

    button.addEventListener("click", event => {
        event.preventDefault();
        getTimeline(timelineDiv, request);
        // TimelineRequest();
    });
});
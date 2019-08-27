import  "../style/index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from '../js/hellomessage';

ReactDOM.render(< HelloReact />, document.getElementById('reactContainer'));


var request = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function() {
    const infoContainer = document.getElementById("infoContainer");
    const button = document.createElement("button");
    const timelineDiv = document.getElementById("timelineData");
    timelineDiv.className = "timelineDiv";

    //const reactContainer = document.getElementById("reactContainer");

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


    // trigger GET request at page load
    getTimeline(timelineDiv, request);

    // "load" = transfer is complete, all data is now in response
    request.addEventListener("load", function() {
        // set up new div per tweet/post
        buildTimeline(this.response, timelineDiv);
    });

    button.addEventListener("click", function(event) {
        event.preventDefault();
        getTimeline(timelineDiv, request);
    });
});

function getTimeline(timelineDiv, request) {
    timelineDiv.innerHTML = "";
    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.send();

    request.onerror = function() {
        if(request.status == 0) {
            timelineDiv.innerHTML = "";
            timelineDiv.className = "error"
            timelineDiv.append("No data currently available.")
        };
    };
}

function buildTimeline(response, timelineDiv) {
    let postJson = JSON.parse(response);
    var toAdd = document.createDocumentFragment();

    for(let x = 0; x < postJson.length; x++) {
        let socialPost = postJson[x];

        let postContainer = document.createElement("div");
        postContainer.id = x;
        
        // make each new post div a clickable link to the post itself
        if(socialPost.socialUser != null && socialPost.message != null) {
            let handle = socialPost.socialUser.twitterHandle;
            let screenName = socialPost.socialUser.name;
            let postID = socialPost.postID;
            postContainer.addEventListener("click", function() {
                location.href = `http://twitter.com/${handle}/status/${postID}`;
            });

            // alternating div colors
            if (x % 2 == 0) {

                postContainer.className = "oddPostBlock postStyle";
            } else {
                postContainer.className = "evenPostBlock postStyle";
            }

            let photoContainer = document.createElement("div");
            let photoElement = document.createElement("img");
            let photoScreenNameContainer = document.createElement("div");
            let photoHandleContainer = document.createElement("div");
            
            photoElement.src = socialPost.socialUser.profileImageUrl;
            let photoScreenName = document.createTextNode(screenName);
            let photoHandle = document.createTextNode(handle);

            photoScreenNameContainer.className = "screenName";
            photoHandleContainer.className = "handle";
            photoContainer.className = "photoContainer";
            photoElement.className = "image";

            photoScreenNameContainer.appendChild(photoScreenName);
            photoHandleContainer.appendChild(photoHandle);

            photoContainer.appendChild(photoElement);
            photoContainer.appendChild(photoScreenNameContainer);
            photoContainer.appendChild(photoHandleContainer);

            // postContainer is the entire post
            postContainer.appendChild(photoContainer);

            let messageContainer = document.createElement("div");
            let messageSpan = document.createElement("span");
            let newDateSpan = document.createElement("span");

            messageContainer.className = "messageContainer";

            // build date
            newDateSpan.className = "date";
            let epochDate = parseInt(socialPost.createdAt);
            let readableDate = new Date(epochDate);
            
            let postDate = (readableDate.toLocaleString('default', {month: 'short'})) + " " + readableDate.getDate();
            console.log(postDate);
            let date = document.createTextNode(postDate);
            newDateSpan.appendChild(date);
            messageContainer.appendChild(newDateSpan);

            // build message
            messageSpan.className = "message";
            let message = document.createTextNode(socialPost.message);
            messageSpan.appendChild(message);
            messageContainer.appendChild(messageSpan);

            postContainer.appendChild(messageContainer);

            toAdd.appendChild(postContainer);    
        }    
    }
    timelineDiv.append(toAdd);
}
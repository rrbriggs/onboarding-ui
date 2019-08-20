var request = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("getTimeline");
    const timelineDiv = document.getElementById("timelineData");

    // trigger GET request at page load
    getTimeline(timelineDiv, request);

    // "load" = transfer is complete, all data is now in response
    request.addEventListener("load", function() {
        // set up new div per tweet/post
        buildTimeline(this.response, timelineDiv);
    });

    button.addEventListener("error", function() {
        let textNode = document.createTextNode("Nothing here");
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    // put data into div 
    const appendTimelineDataBlob = function(textNode, container) {
        const timelineDataBlob = document.createElement("div").appendChild(textNode);
        container.append(timelineDataBlob);
    }

    button.addEventListener("click", function(event) {
        event.preventDefault();

        getTimeline(timelineDiv, request);
    });
});

function getTimeline(timelineDiv, request) {
    timelineDiv.innerHTML = "";
    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.responseType = 'json';
    request.send();

    request.onerror = function() {
        if(request.status == 0) {
            timelineDiv.innerHTML = "";
            timelineDiv.append("No data currently available.")
        };
    };
}

function buildTimeline(response, timelineDiv) {
    var toAdd = document.createDocumentFragment();

    for(let x = 0; x < response.length; x++) {
        let newDiv = document.createElement("div");
        newDiv.id = x;
        
        // make each new post div a clickable link to the post itself
        let handle = response[x]["socialUser"]["twitterHandle"];
        let postID = response[x]["postID"];
        newDiv.addEventListener("click", function() {
            location.href = `http://twitter.com/${handle}/status/${postID}`;
        });

        // alternating div colors
        if (x % 2 == 0) {
            newDiv.style.backgroundColor = "LightCyan";
        } else {
            newDiv.style.backgroundColor = "LightBlue";
        }

        let newPhotoSpan = document.createElement("IMG");
        newPhotoSpan.id = x;
        newPhotoSpan.src = response[x]["socialUser"]["profileImageUrl"];
        newDiv.appendChild(newPhotoSpan);

        let newMessageSpan = document.createElement("span");
        newMessageSpan.id = x;
        let message = document.createTextNode(response[x]["message"]);
        newMessageSpan.appendChild(message);
        newDiv.appendChild(newMessageSpan);

        let newDateSpan = document.createElement("span");
        newDateSpan.id = x;
        let epochDate = parseInt(response[x]["createdAt"]);
        let readableDate = new Date(epochDate);
        let date = document.createTextNode(readableDate);
        newDateSpan.appendChild(date);
        newDiv.appendChild(newDateSpan);

        toAdd.appendChild(newDiv);
    }
    timelineDiv.append(toAdd);
}
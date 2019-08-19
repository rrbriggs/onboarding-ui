var request = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("getTimeline");
    const timelineDiv = document.getElementById("timelineData");

    // trigger GET request at page load
    getTimeline(timelineDiv, request);

    // "load" = transfer is complete, all data is now in response
    request.addEventListener("load", function() {
        let textNode = document.createTextNode(this.responseText);
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    button.addEventListener("error", function() {
        let textNode = document.createTextNode("Nothing here");
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    // put data into div 
    const appendTimelineDataBlob = function(textNode, container) {
        const timelineDataBlob = document.createElement("p").appendChild(textNode);
        container.append(timelineDataBlob);
    };

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
            timelineDiv.append("Unable to connect to http://localhost:8080/api/1.0/twitter/timeline")
        } else {
            console.log(`Error ${request.status}: ${request.statusText}`)
        }
    };
};
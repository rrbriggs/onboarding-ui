document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();

    const button = document.getElementById("getTimeline");
    const timelineDiv = document.getElementById("timelineData");

    // trigger GET request at page load
    getTimeline(timelineDiv, request);

    // "load" = transfer is complete, all data is now in response
    request.addEventListener("load", function() {
        console.log(this.response);
        let textNode = document.createTextNode(this.response[0]["message"]);
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    button.addEventListener("error", function() {
        let textNode = document.createTextNode("Nothing here");
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    // put data into div 
    const appendTimelineDataBlob = function(textNode, container) {
        //textNode is 'object' type (eg typeof textNode == object)
        //console.log(textNode[0]);
        const timelineDataBlob = document.createElement("p").appendChild(textNode);
        container.append(timelineDataBlob);
    };

    button.addEventListener("click", function(event) {
        event.preventDefault();

        getTimeline(timelineDiv, request);
    });
})

function getTimeline(timelineDiv, request) {

    timelineDiv.innerHTML = "";
    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.responseType = 'json';
    request.send();
}
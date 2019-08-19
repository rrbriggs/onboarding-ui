document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();

    const button = document.getElementById("getTimeline");
    const timelineDiv = document.getElementById("timelineData");

    request.addEventListener("load", function() {
        let textNode = document.createTextNode(this.responseText);
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    button.addEventListener("error", function() {
        let textNode = document.createTextNode("Nothing here");
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    const appendTimelineDataBlob = function(textNode, container) {
            const timelineDataBlob = document.createElement("p").appendChild(textNode);
            container.append(timelineDataBlob);
        };

    button.addEventListener("click", function(event) {
        event.preventDefault();

        timelineDiv.innerHTML = "";
        request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        request.send();
    });
})
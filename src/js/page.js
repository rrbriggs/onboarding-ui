document.addEventListener("DOMContentLoaded", () => {
    var request = new XMLHttpRequest();

    const button = document.getElementById("getTimeline");
    const timelineDiv = document.getElementById("timelineData");

    const appendTimelineDataBlob = (textNode, container) => {
        const timelineDataBlob = document.createElement("timelineDataBlob").appendChild(textNode);
        container.append(timelineDataBlob);
    }

    request.addEventListener("load", function() {
        let textNode = document.createTextNode(this.responseText);
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    button.addEventListener("error", function() {
        let textNode = document.createTextNode("Nothing here");
        appendTimelineDataBlob(textNode, timelineDiv);
    });

    button.addEventListener("click", (event) => {
        event.preventDefault();

        timelineDiv.innerHTML = "";
        request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        request.send();
    });
})
document.addEventListener("DOMContentLoaded", () => {
    var request = new XMLHttpRequest();

    const button = document.getElementById("getTimeline");
    const timelineContainer = document.getElementById("timelineData");

    const appendTimelineDataBlob = (textNode, container) => {
        const timelineDataBlob = document.createElement("timelineDataBlob").appendChild(textNode);
        container.append(timelineDataBlob);
    }

    request.addEventListener("load", function() {
        let textNode = document.createTextNode(this.responseText);
        appendTimelineDataBlob(textNode, timelineContainer);
    });

    button.addEventListener("error", () => {
        let textNode = document.createTextNode("Nothing here");
        appendTimelineDataBlob(textNode, timelineContainer);
    });

    button.addEventListener("click", (event) => {
        event.preventDefault();

        timelineContainer.innerHTML = "";
        request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        request.send();
    });
})
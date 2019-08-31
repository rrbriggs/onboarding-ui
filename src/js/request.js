export default function TimelineRequest(callback) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", function() {
        request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        request.send();

        request.onerror = () => {
            if(request.status == 0) {
                timelineDiv.innerHTML = "";
                timelineDiv.className = "error";
                timelineDiv.append("No data currently available.");
            }
        };
        callback(request.response);
    });
}

// export default TimelineRequest();
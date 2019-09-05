export default function timelineRequest(callback) {
    const request = new XMLHttpRequest();
    let timelineDiv = document.getElementById("timelineDiv"); 

    if(timelineDiv) {
        timelineDiv.innerHTML = null;
        timelineDiv.className = "timelineDiv";
    }

    request.addEventListener("load", () => {
        callback(request.response);
        
    });

    request.onerror = () => {
        if(request.status == 0) {
            timelineDiv.innerHTML = "";
            timelineDiv.className = "error";
            timelineDiv.append("No data currently available.");
            callback(false);
        }
    };

    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.send();
}
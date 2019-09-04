export default function timelineRequest(callback) {
    const request = new XMLHttpRequest();
    let timelineDiv = document.getElementById("timelineDiv"); 

    if(timelineDiv) {
        timelineDiv.innerHTML = null;
    }

    request.addEventListener("load", () => {
        callback(request.response);
        timelineDiv.className = "timelineDiv";
        
    });

    request.onerror = () => {
        if(request.status == 0) {
            timelineDiv.innerHTML = "";
            timelineDiv.className = "error";
            timelineDiv.append("No data currently available.");
        }
    };

    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.send();
}
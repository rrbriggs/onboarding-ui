export default function timelineRequest(callback) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", () => {
        callback(request.response);
        
    });

    request.onerror = () => {
        if(request.status == 0) {
            callback(false);
        }
    };

    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.send();
}
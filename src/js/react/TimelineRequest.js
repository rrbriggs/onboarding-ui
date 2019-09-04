export default function timelineRequest(testStatus) {
    const request = new XMLHttpRequest();

    request.addEventListener("load", () => {
        testStatus(request.response);
    });

    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.send();
}
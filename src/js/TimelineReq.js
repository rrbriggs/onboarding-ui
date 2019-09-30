export async function timelineReq() {
    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(false);
        xhr.send();
    });
}

export async function userTimelineReq() {
    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/api/1.0/twitter/userTimeline");
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(false);
        xhr.send();
    });
}
export async function timelineReq() {
    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        xhr.onload = () => resolve(JSON.parse(xhr.response));
        xhr.onerror = () => reject();
        xhr.send();
    });
}

export async function userTimelineReq() {
    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/api/1.0/twitter/userTimeline");
        xhr.onload = () => resolve(JSON.parse(xhr.response));
        xhr.onerror = () => reject();
        xhr.send();
    });
}

export async function filteredHomeTimeline(key) {
    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://localhost:8080/api/1.0/twitter/timeline/filter?filterKey=${key}`);
        xhr.onload = () => resolve(JSON.parse(xhr.response));
        xhr.onerror = () => reject(false);
        xhr.send();
    });
}

export async function postTweet(tweet) {
    let body = {
        message: tweet
    };

    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `http://localhost:8080/api/1.0/twitter/tweet`, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        };
        xhr.onerror = () => reject(false);
        xhr.send(JSON.stringify(body));
    });
}
export async function timelineReq() {
    try {
        const response = await fetch("http://localhost:8080/api/1.0/twitter/timeline", {
            method: 'GET',
        });

        return await response.json();
    } catch {
        return false;
    }
}

export async function userTimelineReq() {
    try {
        const response = await fetch("http://localhost:8080/api/1.0/twitter/userTimeline", {
            method: 'GET',
        });

        return await response.json();
    } catch {
        return false;
    }
}

export async function filteredHomeTimeline(key) {
    try {
        const response = await fetch(`http://localhost:8080/api/1.0/twitter/timeline/filter?filterKey=${key}`, {
            method: 'GET',
        });

        return await response.json();
    } catch {
        return false;
    }
}

export async function postTweet(tweet) {
    try {
        let bodyMsg = {
            "message": tweet
        };
        const response = await fetch("http://localhost:8080/api/1.0/twitter/tweet", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyMsg // body data type must match "Content-Type" header
        });

        return await response.json();
    } catch {
        return false;
    }
}
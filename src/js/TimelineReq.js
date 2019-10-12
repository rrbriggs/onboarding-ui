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
    let body = {"message": tweet};
    return await new Promise((resolve, reject) => {
       fetch("http://localhost:8080/api/1.0/twitter/tweet", {
           method: 'POST',
           body: JSON.stringify(body),
           headers: {
               'Content-Type': 'application/json'
           },
       }).then(response => {
           resolve(response)
       }).catch(() => reject(false))
    });
}
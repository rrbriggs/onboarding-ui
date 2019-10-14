export async function timelineReq() {
    try {
        const response = await fetch("http://localhost:8080/api/1.0/twitter/timeline", {
            method: 'GET',
        });
        return await response.json();
    } catch {
        return new Error("No data currently available.");
    }
}

export async function userTimelineReq() {
    try {
        const response = await fetch("http://localhost:8080/api/1.0/twitter/userTimeline", {
            method: 'GET',
        });

        return await response.json();
    } catch {
        return new Error("No tweets are available, post a tweet!");
    }
}

export async function filteredHomeTimeline(key) {
    try {
        const response = await fetch(`http://localhost:8080/api/1.0/twitter/timeline/filter?filterKey=${key}`, {
            method: 'GET',
        });
        let filterResp = await response.json();
        if (filterResp !== []) {
            return await response.json();
        } else {
            return new Error("No data matching your filter query was found.");
        }
    } catch {
        return new Error("No data matching your filter query was found.");
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
       }).catch(() => reject(new Error("Having an issue posting tweets right now.")))
    });
}
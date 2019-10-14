export async function timelineReq() {
    try {
        const response = await fetch("http://localhost:8080/api/1.0/twitter/timeline", {
            method: 'GET',
        });
        let resp = await response;
        return await response.json();
    } catch {
        throw new Error("Having an issue getting the Home Timeline");
    }
}

export async function userTimelineReq() {
    try {
        const response = await fetch("http://localhost:8080/api/1.0/twitter/userTimeline", {
            method: 'GET',
        });

        return await response.json();
    } catch {
        throw new Error("Having an issue getting the User Timeline.");
    }
}

export async function filteredHomeTimeline(key) {
    try {
        const response = await fetch(`http://localhost:8080/api/1.0/twitter/timeline/filter?filterKey=${key}`, {
            method: 'GET',
        });

        return await response.json();
    } catch {
        throw new Error("Having an issue getting the Filtered Timeline.");
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
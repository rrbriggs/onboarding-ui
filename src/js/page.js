var request = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function() {
    const timelineDiv = document.getElementById("timelineData");
    timelineDiv.className = "timelineDiv";

    // set up overall doc stuff (font)
    const parentDiv = document.getElementById("parentDiv");
    parentDiv.className = "master";



    // set up title formatting
    const titleDiv = document.getElementById("titleDiv");
    titleDiv.className = "title master";

    // trigger GET request at page load
    getTimeline(timelineDiv, request);

    // "load" = transfer is complete, all data is now in response
    request.addEventListener("load", function() {
        // set up new div per tweet/post
        buildTimeline(this.response, timelineDiv);
    });
});

function getTimeline(timelineDiv, request) {
    timelineDiv.innerHTML = "";
    request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
    request.send();

    request.onerror = function() {
        if(request.status == 0) {
            timelineDiv.innerHTML = "";
            timelineDiv.append("No data currently available.")
        };
    };
}

function buildTimeline(response, timelineDiv) {
    let postJson = JSON.parse(response);
    var toAdd = document.createDocumentFragment();

    for(let x = 0; x < postJson.length; x++) {
        let socialPost = postJson[x];

        let newPostContainer = document.createElement("div");
        newPostContainer.id = x;
        
        // make each new post div a clickable link to the post itself
        if(socialPost.socialUser != null && socialPost.message != null) {
            let handle = socialPost.socialUser.twitterHandle;
            let postID = socialPost.postID;
            newPostContainer.addEventListener("click", function() {
                location.href = `http://twitter.com/${handle}/status/${postID}`;
            });

            // alternating div colors
            if (x % 2 == 0) {

                newPostContainer.className = "oddPostBlock postStyle";
            } else {
                newPostContainer.className = "evenPostBlock postStyle";
            }

            let photoContainer = document.createElement("div");
            let newPhotoElement = document.createElement("img");
            let photoSpanNameContainer = document.createElement("span");
            
            // todo: might need to remove/edit this class
            photoContainer.className = "image";
            photoSpanNameContainer.className = "image";
            
            newPhotoElement.src = socialPost.socialUser.profileImageUrl;

            photoContainer.appendChild(newPhotoElement);
            photoContainer.appendChild(photoSpanNameContainer);

            // newPostDiv is the entire
            newPostContainer.appendChild(photoContainer);

            //newPostContainer.appendChild(messageContainer);

            let messageContainer = document.createElement("div");
            let messageSpan = document.createElement("span");
            let newDateSpan = document.createElement("span");

            newDateSpan.className = "date";
            let epochDate = parseInt(socialPost.createdAt);
            let readableDate = new Date(epochDate);
            let date = document.createTextNode(readableDate);
            newDateSpan.appendChild(date);
            messageContainer.appendChild(newDateSpan);

            //let newMessageSpan = document.createElement("span");
            messageSpan.className = "message";
            let message = document.createTextNode(socialPost.message);
            messageSpan.appendChild(message);
            messageContainer.appendChild(messageSpan);

            newPostContainer.appendChild(messageContainer);

            toAdd.appendChild(newPostContainer);    
        }    
    }
    timelineDiv.append(toAdd);
}
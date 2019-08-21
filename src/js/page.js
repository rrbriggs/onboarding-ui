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

        let newPostDiv = document.createElement("div");
        newPostDiv.id = x;
        
        // make each new post div a clickable link to the post itself
        if(socialPost.socialUser != null && socialPost.message != null) {
            let handle = socialPost.socialUser.twitterHandle;
            let postID = socialPost.postID;
            newPostDiv.addEventListener("click", function() {
                location.href = `http://twitter.com/${handle}/status/${postID}`;
            });

            // alternating div colors
            if (x % 2 == 0) {
                //newDiv.style.backgroundColor = "LightCyan";
                newPostDiv.className = "oddPostBlock postStyle";
            } else {
                //newDiv.style.backgroundColor = "LightBlue";
                newPostDiv.className = "evenPostBlock postStyle";
            }

            let newPhotoSpan = document.createElement("span");
            let newPhotoDiv = document.createElement("div");
            let newPhotoElement = document.createElement("img");

            // newPhotoSpan.id = `photoSpan${x}`;
            // newPhotoDiv.id = `photoDiv${x}`;
            // newPhotoElement.id = `photoEle${x}`;
            
            newPhotoSpan.className = "image";
            newPhotoDiv.className = "image";

            newPhotoElement.src = socialPost.socialUser.profileImageUrl;

            newPostDiv.appendChild(newPhotoSpan)
                  .appendChild(newPhotoDiv)
                  .appendChild(newPhotoElement);

            let newDateSpan = document.createElement("span");
            //newDateSpan.id = x;
            newDateSpan.className = "date";
            let epochDate = parseInt(socialPost.createdAt);
            let readableDate = new Date(epochDate);
            let date = document.createTextNode(readableDate);
            newDateSpan.appendChild(date);
            newPostDiv.appendChild(newDateSpan);

            let newMessageSpan = document.createElement("span");
            //newMessageSpan.id = x;
            newMessageSpan.className = "message";
            let message = document.createTextNode(socialPost.message);
            newMessageSpan.appendChild(message);
            newPostDiv.appendChild(newMessageSpan);

            toAdd.appendChild(newPostDiv);    
        }    
    }
    timelineDiv.append(toAdd);
}
import { callbackify } from "util";

export default class TimelineRequest {
    constructor() {
        let request = new XMLHttpRequest();
        request.responseType = 'json';
        request.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        request.send();

        console.log(request.status);

        callback(request.response);

        // todo: handle error

        // let response = JSON.parse(request.response);
        // console.log(`response in TimelineRequest is ${request.response}`)

        // let asd = JSON.parse(request.response);
        // console.log(this.response);
        // return this.response;
    }

    // getResponse() {
    //     return this.request.response;
    // }
}

// export default TimelineRequest;
function timeline(callback) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/api/1.0/twitter/timeline");
        xhr.onload = () => resolve(callback(xhr.response));
        xhr.onerror = () => reject(callback(false));
        xhr.send();
    });
}
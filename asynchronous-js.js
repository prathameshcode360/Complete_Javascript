// Asynchronous JavaScript

// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}
fetchData((data) => {
    console.log(data);
});

// Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}
fetchData().then((data) => {
    console.log(data);
});

// Async/Await
async function fetchData() {
    let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
    console.log(data);
}
fetchData();

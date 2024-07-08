// Callbacks

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);

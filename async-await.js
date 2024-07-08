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

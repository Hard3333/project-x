const rp = require('request-promise');

let arr = [];

async function requestData(id) {
    var options = {         //Object amibe vannak a request beállitasai
        uri: 'https://jsonplaceholder.typicode.com/todos', //URL
        json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be
    };

    const response = await rp(options) //Tanultuk nemtom elmagyarázni
    for (let i = 0; i < response.length; i++) {
        if (response[i].userId == id) {
            arr.push(response[i]);
        }
    }

    return arr;
}

module.exports = {
    requestData
}
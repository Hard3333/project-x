const data = require('./input/input');
const id = data.findUserId();
const rp = require('request-promise');

let arr = [];

async function requestData() {
    var options = {         //Object amibe vannak a request beállitasai
        uri: 'https://jsonplaceholder.typicode.com/todos', //URL
        json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be
    };

    const response = await rp(options) //Tanultuk nemtom elmagyarázni
    console.log(response) //Aki ezt a sort nem érti menjen haza!
    for (let i = 0; i < response.length; i++) {
        if (response[i].userId == id) {
            arr.push(
                {
                    title: response[i].title
                }
            );
        }
    }

    return arr;
}

module.exports = {
    requestData
}
const data = require('./input/input');
const id = data.prompt();
const rp = require('request-promise');

let arr = [];

function requestData()
{
    var options = {         //Object amibe vannak a request beállitasai
        uri: 'https://jsonplaceholder.typicode.com/todos', //URL
        json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be
    };
    
    (async function main(){ //asyn wrapper
        
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
    })()
}

function returnData()
{
    module.exports = {
        arr
    };
}

requestData();
returnData();
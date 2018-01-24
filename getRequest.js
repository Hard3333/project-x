const rp = require('request-promise');

var options = {         //Object amibe vannak a request beállitasai
    uri: 'https://jsonplaceholder.typicode.com/users', //URL
    json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be
};

(async function main(){ //asyn wrapper
    
   const response = await rp(options) //Tanultuk nemtom elmagyarázni
   console.log(response) //Aki ezt a sort nem érti menjen haza!
})()


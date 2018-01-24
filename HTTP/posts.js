const data = require('./input/input');
const id = data.findUserId();
const rp = require('request-promise');

let arr = [];

async function requestData()
{
    var options = {
        uri: 'https://jsonplaceholder.typicode.com/posts',
        json: true
    };
      const response = await rp(options) 
       console.log(response) 
       for (let i = 0; i < response.length; i++) {
            if (response[i].userId == id) {
                arr.push(
                    {
                        title: response[i].title,
                        body: response[i].body
                    }
                );
            }
       }
    return arr;
}
    module.exports = {
        requestData
    };

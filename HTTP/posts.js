const rp = require('request-promise');

async function requestData(id) {
    let arr = [];
    var options = {
        uri: 'https://jsonplaceholder.typicode.com/posts',
        json: true
    };
    const response = await rp(options);
    for (let i = 0; i < response.length; i++) {
        if (response[i].userId == id) {
            arr.push(response[i]);
        }
    }
    return arr;
}
module.exports = {
    requestData
};

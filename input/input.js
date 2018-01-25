
const readline = require('readline-sync')

let answer;
async function getUserName() {
    do {
        answer = readline.question('add meg a felh. nevet: ');
        if (!userNameCheck(answer, await allUserName()))
            console.log('nincs ilyen felhasznalo!');
        else {
            return answer
            //answer = username;
        }
    } while (!userNameCheck(answer, await allUserName()))
}
async function getType() {
    let type = 0;
    while (true) {
        answer = readline.question('add meg az utastást(1: poszt, 2: teendo): ');
        if (answer == '1') {
            return 1;
        }
        else if (answer == '2') {
            return 2;
        }
        else
            console.log('Hibás utasitas!!!');
    }
}
async function allUserName() {
    const rp = require('request-promise');
    let arr = [];
    var options = {         //Object amibe vannak a request beállitasai 
        uri: 'https://jsonplaceholder.typicode.com/users', //URL 
        json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be 
    };


    const response = await rp(options) //Tanultuk nemtom elmagyarázni 
    //console.log(response) //Aki ezt a sort nem érti menjen haza!
    for (r of response) {
        arr.push(r.username);
    }
    return arr;
}
async function findUserId(username) {
    const rp = require('request-promise');
    let arr = [];
    var options = {         //Object amibe vannak a request beállitasai 
        uri: 'https://jsonplaceholder.typicode.com/users', //URL 
        json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be 
    };


    const response = await rp(options) //Tanultuk nemtom elmagyarázni 
    //console.log(response) //Aki ezt a sort nem érti menjen haza!
    for (r of response) {
        if (username == r.username)
            return r.id;
    }
}

function userNameCheck(name, allName) {
    for (current of allName) {
        if (name == current)
            return true;
    }
    return false;
}
module.exports = {
    getUserName,
    getType,
    findUserId
}




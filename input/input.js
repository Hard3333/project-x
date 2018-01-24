
const readline = require('readline-sync')

function prompt() {
    let answer ;
    let username = '';
    let type_ = 0;
    do{
        answer = readline.question('add meg a felh. nevet: ');
        if(!userNameCheck(answer))
            console.log('nincs ilyen felhasznalo!');
    }while(!userNameCheck(answer))
    while (true) {
        answer = readline.question('add meg az utastást(1: poszt, 2: teendo): ');

        if (answer == '1') {
            type_ = 1;
            break;
        }
        else if (answer == '2') {
            type_ = 1;
            break;
        }
        else
            console.log('Hibás utasitas!!!');
    }
    let obj = {
        type: type_,
        UserName: username
    }
    console.log(obj);
}
function findByName(){
    const rp = require('request-promise'); 
    var options = {         //Object amibe vannak a request beállitasai 
        uri: 'https://jsonplaceholder.typicode.com/users', //URL 
        json: true //Ezzel átkonvertálja a kapott adatokat automatikusan JSON-be 
     }; 
     (async function main(){ //asyn wrapper 
    
      const response = await rp(options) //Tanultuk nemtom elmagyarázni 
      console.log(response) //Aki ezt a sort nem érti menjen haza! 
    })();

}

function userNameCheck(name, allName = ['asd', 'asdasd', 'asdasdasd']) {
    for (current of allName) {
        if (name == current)
            return true;
    }
    return false;
}
findByName();


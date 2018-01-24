
const readline = require('readline-sync') 
 
 
 
 
function prompt(){ 
    let answer = readline.question('add meg a felh. nevet: '); 
    marcinak(answer); 
    console.log(userNameCheck(answer)); 
while(true){ 
    answer = readline.question('add meg az utastást(1: poszt, 2: teendo): '); 
 
    if(answer == '1'){ 
        break; 
    } 
    else if(answer == '2'){ 
        break; 
    } 
    else 
        console.log('Hibás utasitas!!!'); 
} 
} 
 
function userNameCheck(name, allName = ['asd','asdasd','asdasdasd']){ 
    for(current of allName){ 
        if(name == current) 
            return true; 
    } 
    return false; 
} 
prompt(); 
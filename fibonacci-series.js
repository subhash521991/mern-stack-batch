
function printFibonacci(n) {

let a = 0;
let b = 1;
let output = [0,1];

    for (let index = 2; index < n; index++) {

      c = a + b;

       a= b;
       b = c;
        
     output.push(c);
    }
console.log(output);
}


function checkFibonacci(m) {

let a = 0;
let b = 1;
let output = [0,1];

    for (let index = 2; index < 100; index++) {

      c = a + b;

       a= b;
       b = c;
        
     output.push(c);
    }

if(output.includes(m)){

console.log("given no " + m + "is a fibonacci series number");
    
}

    else {

console.log("given no " + m + " is not a  fibonacci series number");
        
    }

    
    
}

printFibonacci(20);
checkFibonacci(610);




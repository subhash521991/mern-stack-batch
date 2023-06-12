
let carr = [1,4,6,9,20];

function missarr(arr) {

let arrMin = Math.min(...arr);
let arrMax = Math.max(...arr);
let missarr = [];

for (let i = arrMin; i <= arrMax; i++) {

    if(arr.indexOf(i)<0){

        missarr.push(i);

        
    }   
}

    return missarr;
    
}

missarr(carr);
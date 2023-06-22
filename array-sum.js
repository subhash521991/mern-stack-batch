function sumArray (arr) {

    let sum = 0;

    for(i = 0; i<arr.length; i++){

      sum += arr[i];

    }

    if(sum == 0){

        console.log("Given Array Sum is Zero");



    }

    else {

        console.log("Given Array Sum is ===> " + sum);

    }



}

let myArray = [1,2,3,4,5,6,7,8,9,-9,-8,-7,-6,-5,-4,-3,-2,-1];
sumArray(myArray);



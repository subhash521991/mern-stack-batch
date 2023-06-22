function checkArrayElement (arr, key) {

    let arrElement;

    for(i = 0; i<= arr.length; i++) {
      if(i == key){

      arrElement = arr[i];

      }

    }

    
    console.log(key + " position element is = " + arrElement);

}

checkArrayElement([10,20,30,40,50,60], 3);




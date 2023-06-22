
function getUniqeArr(arr){

    let uniqeArr = [];  
  
  for(i=0; i<arr.length; i++) {
  
  if(uniqeArr.indexOf(arr[i]) == -1){
  
    uniqeArr.push(arr[i]);
  
  }
  
  }
  
  return console.log(uniqeArr);
  
  }
  
  let myArray = [1,2,3,4,5,6,7,8,9,2,4,5,6]
  
  getUniqeArr(myArray);
  
  
  
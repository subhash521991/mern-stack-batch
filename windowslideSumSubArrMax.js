function subArrSum(arr, n){

    let maxSum = 0;
    
    
        for(i=0; i<arr.length; i++) {
            let tempSum = 0;
    
          for(j=i; j<i+n; j++){
    
              tempSum += arr[j];
    
              
          }
    
            if(maxSum < tempSum){
                 maxSum = tempSum;
                
            }
            
        }
    
        return console.log(maxSum);
    
    }
    
    let arr = [1,3,5,6,8,20,9,12,15,];
    
    subArrSum(arr, 2);
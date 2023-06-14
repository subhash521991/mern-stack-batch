function fib(num) {
    // x is representing the first term

    // y is representing the second term

    // sum is representing the summation of first and second term
    let output = [];

    let x = 0;
    let y = 1;

    let sum;
// since first two terms are already fixed , hence storing two numbers in empty array
    output.push(x);
    output.push(y);

    let i =2;
    while (i<num) {
        sum = x + y;
        x = y;
        y = sum;

        output.push(sum);
        i = i + 1;
    }    

    return output;
    
}

output = fib(50);

console.log("fibonacci series is ", output);

// 0,1,1,2,3,5,8,13,21
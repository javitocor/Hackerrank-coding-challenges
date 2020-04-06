function fibonacci_even(number){
    var arr = [1,2];
    var count = 0;
    var count2 = 2;
    for (var i = 1; count <= number; i++){
        count = arr[i] + arr[i-1];
        arr.push(count);
        if (count % 2 == 0){
            count2 += count;
        }
    }
    return count2;
}


function fibonacci_even(number){
    var first = 0;
    var second = 1;
    var sum = 0;
    var count = 0;
    while (count <= number){
        count = first + second;
        if (count%2 == 0){
            sum += count;
        } 
        first = second;
        second = count;
    }
    return sum;
}

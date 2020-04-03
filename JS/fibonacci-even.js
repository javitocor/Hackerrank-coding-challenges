function fibonacci_even(number){
    var arr = [1,2];
    var count = 0;
    var count2 = 2;
    for (var i = 1; i <= number; i++){
        count = arr[i] + arr[i-1];
        if (count % 2 == 0){
            count2 += count;
        }
    }
    return count2;
}


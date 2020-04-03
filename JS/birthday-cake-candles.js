function birthdayCakeCandles(ar) {
    var blowCandles = 0;
    var largest = 0;
    for (var i = 0; i<= ar.length; i++){
        if(ar[i]>largest){
            largest = ar[i];
            blowCandles = 1;
        }else if(ar[i] === largest){
            blowCandles++;
        }
    }
    return blowCandles;
}
function divisibleSumPairs(n, k, ar) {
    var count=0;
    for (var i=0;i<ar.length;i++){
        for(var j=i+1; j<ar.length;j++){
            if ((ar[j]+ar[i])%k==0){
                count++
            }
        }
    }
    return count;
}
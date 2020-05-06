function pickingNumbers(a) {
    a.sort(function(a, b){return b - a});
    var max = 1;
    var count = 1;
    for (var i = 0 ; i< a.length; i++){
        count = 1;
        for (var j = i +1; j<a.length; j++){
            if (((Math.abs(a[i]-a[j])) == 0 ) || ((Math.abs(a[i]-a[j])) == 1 )) {
                count ++;
            } else {
                break;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

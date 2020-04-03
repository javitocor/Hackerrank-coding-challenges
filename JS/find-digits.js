function findDigits(n) {
    var counter = 0;
    var arr = [];
    arr = n.toString().split("");
    for (var i = 0; i<arr.length; i++)
        if (n%arr[i]==0){
            counter ++;
        }
    return counter
}
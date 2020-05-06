function equalizeArray(arr) {
    var result = 0;
    var max = 0;
    var count = 0;
    arr.sort(function(a, b){return b - a});
    for (var i = 0; i < arr.length; i++){
        count = 0;
        for (var j = i + 0; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                count++;
            } else  {
                break;
            }
        }
        if (count > max ){
            max = count;
        } 
    }
    result = arr.length - max;
    return result;
}

function findMedian(arr) {
    arr.sort(function(a, b){return a-b});
    var len = arr.length;
    var ba = Math.floor(len/2);
    return arr[ba];
}
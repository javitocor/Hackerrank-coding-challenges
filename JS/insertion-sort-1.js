function insertionSort1(n, arr) {
    var save = arr[n-1];
    for ( var i = n-2; i>=0;i--){
        if (save<arr[i]){
            arr[i+1] = arr[i];
            console.log(arr.join(" "));
            if (i === 0) {
                arr[i] = save;
                console.log(arr.join(" "))
            }
        } else {
            arr[i+1] = save;
            console.log(arr.join(" "));
            break
        }
    }
}
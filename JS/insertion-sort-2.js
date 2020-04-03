function insertionSort2(n, arr) {
    for (var i = 1; i < n; i++){
        if (arr[i-1]<arr[i]){
            console.log(arr.join(" "));
        } else {
            var save = arr[i];
            var save2 = arr[i-1];
            arr[i-1] = save;
            arr[i] = save2;
            if(i>1){
                for(var j = i-1; j>=1;j--){
                    if (arr[j-1]<save){
                        console.log(arr.join(" "));
                        break
                    } else {
                    arr[j] = arr[j-1]; 
                    arr[j-1] = save;
                        if ((j-1)==0) {console.log(arr.join(" "));}
                    }
                }
            } else {
                console.log(arr.join(" "));
            }
        }
    }
}

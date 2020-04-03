function happyLadybugs(b) {
    var arr = b.split("");
    var arr2 = [];
    var result = "YES"; 
    if ((arr.every( (val, i, arr) => val === "_" ))==true){
        return result;
    } else if (arr.includes("_")==false){
        if ((arr.every( (val, i, arr) => val === arr[0] ))==true){
            return result;
        } else {
            for (var k = 1; k < arr.length-1 ; k++) {                
                if (arr[k] != arr[k+1] && arr[k]!=arr[k-1]){
                    result = "NO";
                    return result;
                }
            }
            return result;
        }
            
        
    } else {
        for (var i = 0; i<arr.length; i++){
            var count = 1; 
            if(arr[i] === "_"){
                count = 0;
            }
            for ( var j = 0; j<arr.length; j++){
                if (i!=j && arr[i]==arr[j] && arr[i] != "_"){
                    count++;
                }
            }
        arr2.push(count);
        }
        if ((arr2.every( (val, i, arr) => val%2==0 ))==true){
            return result;
        } else if (arr2.includes(1)==true){
            result = "NO";
            return result;
        } else {
            return result;
        }
    }
}
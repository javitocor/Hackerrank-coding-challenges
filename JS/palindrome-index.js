function palindromeIndex(s) {
    var test = s.split("").reverse().join("");
    if (test === s){
        return "-1";
    } else {
        for (var i=0; i<s.length; i++){
            var ot = s.substring(0,i) + s.substring(i+1, s.length);
            var ot2 = ot.split("").reverse().join("");
            if (ot === ot2){
                return i;
            } 
        }        
        return "-1";
    }
}

function palindromeIndex(s){
     for (var i=0; i<s.length; i++){
            var ot = s.substring(0,i) + s.substring(i+1, s.length);
            var ot2 = ot.split("").reverse().join("");
            if (ot === ot2){
                return i;
            }              
        }  
        return "-1";      
}
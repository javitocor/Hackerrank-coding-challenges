function palindromeIndex(s) {
    var reverse = s.split("").reverse().join("");
    if (reverse === s || s.length > 100005) {
        return "-1";
    } else {
        for (var i=0; i < s.length; i++){
            var str = s.substring(0,i) + s.substring(i+1, s.length);
            var str_reverse = str.split("").reverse().join("");
            if (str === str_reverse){
                return i;
                break;
            } 
        }        
        return "-1";
    }
}

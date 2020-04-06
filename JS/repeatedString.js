function repeatedString(s, n) {
    var count = 0;
    var repeatedString = "";   
    if (s === "a"){
        return n
    } else if (!s.includes("a")) {
        return 0;
    }
    else {     
        repeatedString = s.repeat(n).slice(0,n);
        var arr = repeatedString.match(/a/g);
        count = arr.length;    
    }
    return count;
}


function repeatedString(s, n) {
    if (!s.includes("a")){
        return 0;
    } else {     
        var arr = s.match(/a/g);   
        var count = arr.length * Math.floor(n/s.length);
        var arr2 = s.slice(0, n % s.length).match(/a/g);
        if (arr2 == null){
            return count;
        } else {
            count += arr2.length;
            return count;
        }
    }
}

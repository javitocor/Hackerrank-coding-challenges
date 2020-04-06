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
    if (s === "a"){
        return n
    } else if (!s.includes("a")) {
        return 0;
    }
    else {     
        var arr = s.match(/a/g);
        var count = arr.length;    
        var x = count * Math.floor(n/s.length);
        var str = s.slice(0, n % s.length);
        var arr2 = str.match(/a/g);
        if (arr2 == null){
            return x;
        }else {
            var count2  = arr2.length;
            var total = x + count2;
            return total;
        }
    }
}

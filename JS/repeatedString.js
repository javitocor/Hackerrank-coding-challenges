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





 while (n > 0) { 
        repeatedString += s; 
        n--; 
    }


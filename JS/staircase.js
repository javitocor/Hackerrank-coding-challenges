function staircase(n) {
    for (var i=0; i<n;i++){
        var whitespace = "\x20";
        var stair = "#";
        var log = whitespace.repeat(n-1-i);
        var ot = stair.repeat(i+1);       
        var res = log.concat(ot);
        console.log(res);
    }
}
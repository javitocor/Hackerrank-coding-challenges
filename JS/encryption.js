function encryption(s) {
    s = s.replace(/\s/g, ""); 
    var length = s.length;
    var columns = 0;
    var rows = 0;
    var arr = s.split("");
    var subs = [];
    var final = [];
    if (Number.isInteger(Math.sqrt(length)) == true){
        columns = Math.sqrt(length);
        rows = Math.sqrt(length);
    } else {
        rows = Math.floor(Math.sqrt(length));
        columns = Math.ceil(Math.sqrt(length));
    }
    ((rows * columns) < length) && rows ++ ;
    for (var i = 0; i < arr.length; i+= columns){
        subs.push(arr.slice(i,(i+columns)));
    }
    for (var j = 0; j < columns; j++){
        for (var k = 0; k < rows; k++){            
            if (subs[k][j] != null){
                final.push(subs[k][j]);
            }else {
                final.push(" ");
            }
        }
    }
    final = final.join("");
    var final2 = "";
    for (var n = 0; n < final.length; n += rows){
        final2 += final.slice(n, n+rows )+" ";
    }
    final2 = final2.replace(/  +/g, ' ');
    return final2;
}


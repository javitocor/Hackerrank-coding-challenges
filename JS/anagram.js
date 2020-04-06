function anagram(s) {
    var count= 0;
    if (s.length%2 != 0){
        return -1;
    } else {
        var first = s.slice(0, (s.length/2));
        var second = s.slice((s.length/2));
        for (var i=0; i<first.length; i++){
            for (var j=0; j<second.length;j++){
                if (first[i]===second[j]){
                    count++;
                    break;
                }
            }
        }
        if (count==0){
            count=first.length;
        } else if (count==first.length){
            count=0;
        } else {
            count=first.length-count;
        }
        return count;
    }
}
function howManyGames(p, d, m, s) {
    var count= 0;
    while (s>=p){
        count ++;
        s = s-p;
        if ((p-d)>m){
            p = p-d;
        } else {
            p = m;
        }
    }
    return count;
}
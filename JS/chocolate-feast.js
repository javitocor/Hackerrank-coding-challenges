function chocolateFeast(n, c, m) {
    var wrap = 0;
    var total = 0;
    var extra = 0;
    total = Math.floor(n/c);
    wrap = total;
    while (wrap >= m){
        total = total + Math.floor(wrap/m);
        extra = wrap % m;
        wrap = Math.floor(wrap/m) + extra;
    }
    return total;
}
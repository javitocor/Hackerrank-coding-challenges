function pageCount(n, p) {
    var countStart = Math.floor(p/2);
    var countEnd = Math.floor(n/2) - countStart;
    return countStart > countEnd ? countEnd : countStart;
}
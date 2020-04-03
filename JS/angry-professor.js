function angryProfessor(k, a) {
    var onTime = 0;
    for (var i = 0; i<a.length; i++){
        if (a[i]<= 0){
            onTime ++;
        }
    }
    return onTime >= k ? "NO" : "YES"
}

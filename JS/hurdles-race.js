function hurdleRace(k, height) {
    var dose = 0;
    for (var i=0; i<= height.length; i++){
        if (k<height[i]){
            dose= dose+height[i]-k;
            k= height[i];
        }
    }
    return dose;
}
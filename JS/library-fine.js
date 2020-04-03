function libraryFine(d1, m1, y1, d2, m2, y2) {
    var fine = 0;
    if (y1 > y2){
        fine = 10000;
    }
    else if (m1 > m2 && y1===y2) {
        fine = (m1-m2)*500;
    }
    else if (d1 > d2 && m1===m2 && y1===y2){
        fine = (d1-d2)*15;
    }
    else if (y1 <= y2 || m1 <= m2 || d1 <= d2){
        fine = 0;
    }  
    return fine;
}

function bonAppetit(bill, k, b) {
    var total=0;
    for (var i=0; i<bill.length; i++){
        if (i != k){
            total+=bill[i];
        }
    }
    total = b - total*0.5
    if (total===0){
        console.log("Bon Appetit");
    }else{
        console.log(total);
    }
}  

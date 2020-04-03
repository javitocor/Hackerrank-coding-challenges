function getMoneySpent(keyboards, drives, b) {
    var total = [];
   for (var i = 0; i<keyboards.length; i++){
       for (var j = 0; j<drives.length; j++){
           if (keyboards[i] + drives[j] <= b){
           total.push(keyboards[i] + drives[j]);
           }           
       }
   } 
   total.sort(function(a, b){return b-a});
   return total.length > 0 ? total[0] : -1;
}

function timeInWords(h, m) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];
    let hour = h.toString();
    let minute = m.toString();
    if ( m === 0 ) {
        return ones[h] + " o' clock";
    }
    if ( m === 1 ) {
        return ones[m] + " minute past " + ones[h];
    }
    if ( minute == "15" ) {
        return "quarter past " + ones[h];
    }
    if ( m === 30 ) {
        return "half past " + ones[h];
    }
    if ( m === 45 ) {
        return "quarter to " + ones[h+1];
    }
    if ( m == 59){
        return "one minute to " + ones[h+1]
    }
    if (m > 1 && m < 30){
        if (m < 20){
            return ones[m] + " minutes past " + ones[h];
        } else if (m >= 20 && m < 30){
            return tens[minute[0]] + " " + ones[minute[1]] + " minutes past " + ones[h];
        }
    } else if ( m >= 31 && m < 59 ){
        m = 60 - m;
        if (m < 20){
            return ones[m] + " minutes to " + ones[h+1];
        } else if (m >= 20 && m < 30){
            minute = m.toString();
            return tens[minute[0]] + " " + ones[minute[1]] + " minutes to " + ones[h+1];
        }
    }
}
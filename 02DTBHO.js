function dtbho(n, base) {
    switch (base)  {  
        case 'B':  
           return parseInt(n, 10).toString(2);
          break;  
        case 'H':  
            return parseInt(n, 10).toString(16);
            break;  
        case 'O':  
            return parseInt(n, 10).toString(8);
            break;  
        default:  
            return("Wrong input..!!");  
    }  
}

console.log(dtbho(404,'B')); 
console.log(dtbho(404,'H')); 
console.log(dtbho(404,'O')); 

console.log(dtbho(404,'S')); 

console.log(dtbho(405,'S')); 
 


// Calculator Functionality Code
// 1. It can Add n numbers
// It Can treat strings
function add(){
 var sum = 0;
    for(var i = 0 ; i<arguments.length; i++){
        sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i])); 
    }
    return sum;
}
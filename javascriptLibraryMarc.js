var _ = {
  map: function(arr, callback) {
    for(i = 0; i < arr.length; i++){
        var result = callback(arr[i]);
        arr[i] = result;
    }
    return arr;
  },
  reduce: function(arr, callback) {
   var memo = 0;
   for (var i= 0; i < arr.length - 1; i++){
       var results = callback(arr[i], arr[arr.length-1]);
       memo += arr[i];
   }
   var num = arr[arr.length -1];
   return memo + num;
   
  },
  find: function(arr, callback) {  
    for(i = 0; i < arr.length; i++){
        var result = callback(arr[i]);
        if(result){
            return arr[i];
        }
    }
  },
  filter: function(arr, callback) {
   var returnArr = [];
    for(i = 0; i < arr.length; i++){
        var result = callback(arr[i]);
        if(result){
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
  },
  reject: function(arr, callback) {
   //Made without creating a temp array
    for(i = 0; i < arr.length; i++){
       var result = callback(arr[i]);
       if(result){
           arr.splice(i,1);
       }
    }
    return arr;
  }
 
}

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var detect = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var collect = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 3 });
var inject = _.reduce([1, 2, 3], function(memo, num){ return memo + num });
console.log(evens);
console.log(odds);
console.log(detect);
console.log(collect);
console.log(inject);
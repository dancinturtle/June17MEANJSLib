
var _ = {

   map: function(arr, callBack) {

     for(var i = 0; i < arr.length; i++){
       var results = callBack(arr[i]);
       arr[i] = results;
       }
       return arr;
   },

   reduce: function(arr, callBack) {
     var memo = 0;
     for(var i = 0; i < arr.length - 1; i++){
       var results = callBack(arr[i], arr[arr.length-1]);
       memo += arr[i];
     }
     var num = arr[arr.length - 1];
     return memo + num;
   },

   find: function(arr, callBack) {

     for(var i = 0; i < arr.length; i++){
       var results = callBack(arr[i]);
       if(results){
         return arr[i]
       }
     }
   },

   filter: function(array, callBack) {
    var newArr = [];

    for(var i = 0; i < array.length; i++){
      var results = callBack(array[i]);
      if(results){
        newArr.push(array[i]);
      }
    }
    return newArr;
   },

   reject: function(arr, callBack) {
      for(var i = 0; i < arr.length; i++){
        var results = callBack(arr[i]);
        if(results){
          arr.splice(i, 1);
        }
      }
      return arr;
    }
 }


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
  return num % 2 == 0;
});
// console.log(evens); 

var odds = _.reject([1, 2, 3, 4, 5, 6, 7], function(num){
  return num % 2 == 0;
});
// console.log(odds);

var find = _.find([1, 2, 3, 4, 5, 6], function(num){
  return num % 2 == 0;
});
// console.log(find);

var maps = _.map([1, 2, 3], function(num){
  return num * 3;
});
// console.log(maps);

var sum = _.reduce([1, 2, 2, 4, 3], function(memo, num){
  return memo + num;
});
// console.log(sum);

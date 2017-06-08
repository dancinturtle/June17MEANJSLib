var _ = {
   map: function(arr, callback) {
     //code here;
     for(var i = 0; i < arr.length;i++){
         arr[i] = callback(arr[i]);
     }
     return arr;
   },
   reduce: function(arr, callback, memo) { 
     // code here;
     var index = 0;
     if(!memo){
        memo = arr[0];
        index = 1;
        
     }  
     for(var i = index; i < arr.length;i++){
        memo = callback(memo,arr[i]);
     }
     return memo

   },
   find: function(arr,callback) {   
     // code here;
     for(var i = 0 ; i < arr.length;i++){
         if(callback(arr[i])){
             return arr[i];
         }
     }

   },
   filter: function(arr,callback) { 
     // code here;
     var newarr = [];
     for(var i = 0 ; i < arr.length;i++){
         if(callback(arr[i])){
             newarr.push(arr[i]);
         }
     }
     return newarr;
   },
   reject: function(arr,callback) { 
     // code here;
     var newarr = [];
     for(var i = 0 ; i < arr.length;i++){
         if(!callback(arr[i])){
             newarr.push(arr[i]);
         }
     }
     return newarr;
   }
}


var a = _.map([1,2,3],function(num){ return num * 3});
console.log(a);

var even = _.find([1, 1, 1, 4, 5, 6], function(num){ return num % 2 == 0; })
console.log(even);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens)

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds)

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 1);
console.log(sum);
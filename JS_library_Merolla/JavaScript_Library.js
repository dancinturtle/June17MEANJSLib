// Underscore assignment
// After function definitions are example calls (using console.log)

var _ = {
	// Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
	map: function(arr, callback) {
		for (index in arr) {
			arr[index] = callback(arr[index]);
		}
		return arr;
	},
	// Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
	reduce: function(arr,callback) {
		if (arr.length == 0) {
			return 0;
		}
		if (arr.length == 1) {
			return arr[0];
		}
		else {
			var memoizer = arr[0]; // set memoizer to start as the first element
			for (var i = 1; i<arr.length; i++) {
				memoizer += arr[i];
			}			
		}
		return memoizer;
	},
	// Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
	find: function(arr,callback) {   
		for (var i = 0; i<arr.length; i++) {
			if (callback(arr[i])) {
				return arr[i];
			}
		}
	},
	// Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
	filter: function(arr, callback) {
		var filterArray = [];
		for (var i = 0; i<arr.length; i++) {
			if (callback(arr[i])) { // if true, array element is EVEN (based on our callback)
				filterArray.push(arr[i]);
			}
		}
		return filterArray;
	},
	// Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
	reject: function(arr, callback) { // returns only ODD values
		var rejectArray = [];
		for (var i = 0; i<arr.length; i++) {
			if (typeof(arr[i])!="number") {
				rejectArray.push(arr[i]);
			}
			else if (arr[i]%2==1) { // this means the element is odd
				rejectArray.push(arr[i]);
			}
		}
		return rejectArray;
	},
	// As-is, the "where" function below will be able to accept multiple key:value pairs in the properties dictionary however if they are in a different order from the order in the dictionaries in the list of plays it will not work (ordering is needed to resolve this issue)
	where: function(arr,properties) { // where will look through an array of dictionaries and return an array of the dictionaries which matched our properties input
		var whereArray = [];
		var hashedArray = [];
		var hashedProperty = "undefined";
		for (key in properties) {
			hashedProperty += key;
			hashedProperty += properties[key];
		}
		for (var i = 0; i<arr.length; i++) { // loop through array of dictionaries
			for (key in arr[i]) { // loop through each key in the dict (from array)
				for (key2 in properties) { // loop through each key in prop dict
					if (key == key2) {
						if (arr[i][key] == properties[key2]){
							hashedArray[i] += key+arr[i][key];
						}
					}
				}
			}
		}
		for (var i = 0; i<hashedArray.length; i++) {
			if (hashedArray[i] == hashedProperty) {
				whereArray.push(arr[i]);
			}
		}
		return whereArray;
	}
}

// // Example for the "map" method
// console.log(_.map([1,2,3],function(num){ return num*3; }));

// // Example of the reduce method
// console.log(_.reduce([1,2,3],function(memoizer,num){ return memoizer + number }));

// // Example of the find method
// console.log(_.find([1,5,3,4,8],function(num){ return num%2==0; })); // function callback here returns num if even

// // Example of the filter method
// console.log(_.filter([1,2,3,4,5,6,7,8,9],function(num){ return num%2==0; }));

// // Example of the reject method
// console.log(_.reject([1,2,3,4,5,6,7,8,9],function(num){ return num%2==0; }));

// // Example for use of "where" method
// var listOfPlays = [{title:"SomeStuff",author:"Kris",year:1986},{title:"Things and Stuff",author:"Jerome",year:2015},{title:"Can of Beans",author:"Kris",year:2011}]
// console.log(_.where(listOfPlays,{author:"Kris", year:1986}))








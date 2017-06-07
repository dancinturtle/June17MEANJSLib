


var _ = {
	map: function(arr) {
		for (var i = 0; i<arr.length; i++) {
			console.log(arr[i]);
		}
	},
	reduce: function(arr,numRemove) {
		if (arr.length < numRemove) {
			arr.length = 0;
		}
		else {
			arr.length = arr.length - numRemove;
		}
		return arr
	},
	find: function(arr,value) {   
		for (var i = 0; i<arr.length; i++) {
			if (arr[i] == value) {
				console.log("Item found!");
				return;
			}
		}
		console.log("Item not found");
	},
	filter: function(arr, callback) {
		var filterArray = [];
		for (var i = 0; i<arr.length; i++) {
			if (callback(arr[i])) { // if true, array element is EVEN (based on our callback)
				filterArray.push(arr[i]);
			}
		}
		return filterArray;
	},
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

var listOfPlays = [{title:"SomeStuff",author:"Kris",year:1986},{title:"Things and Stuff",author:"Jerome",year:2015},{title:"Can of Beans",author:"Kris",year:2011}]

console.log(_.where(listOfPlays,{author:"Kris", year:1986}))

// var evens = _.filter([1,2,"Kris",4,5,6],function(num){ return typeof(num)=="string" })
// console.log(evens);

// console.log(_.reject(["Kris",1,2,3,4,5,6,7,8,9]));

// console.log(_.filter([1,2,4],1));

// _.find([1,"Kris",4,7],"Kris");

// _.map([1,2,3,4,"hello"]);

// console.log(_.reduce([1,2,3,4,5],6));


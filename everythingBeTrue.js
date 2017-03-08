/*Check if the predicate (second argument) is truthy on all 
elements of a collection (first argument). */
function truthCheck(collection, pre) {
	let count = 0;
	for (key of collection) {
		if(key[pre]) {
    		count++;
    	}  
	}
	return (count === collection.length) ? true : false;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, 
	{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

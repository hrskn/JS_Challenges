/*Given an array of integers, remove the smallest value. 
Do not mutate the original array/list. If there are multiple elements with the same value, 
remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.*/

function removeSmallest(numbers) {
	let smallest = numbers[0];
	for (num of numbers) {   
		if (smallest > num) {
	    	smallest = num;
	   	}
	}
	smallest = numbers.indexOf(smallest);
	if (smallest >= 0) {
	  numbers.splice(smallest, 1 );
	}
	return smallest;     
    }
removeSmallest([2, 2, 1, 2, 1]);
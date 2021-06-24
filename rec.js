//an example of a recursive function

/* rec() is a function that takes a num (int prefered for no reason)
 and keeps multiplying it until the result (num itself)
 is less than 1000*/

// no user input sanitation for now

 const rec = (num)=> {
	if(num >= 10000) {
		return num;
	} else {
		return num + rec(num+1);
	}
};
console.log('Final result: ',  rec(0));
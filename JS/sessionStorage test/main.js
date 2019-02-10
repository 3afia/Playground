let field = document.getElementsByName('feild')[0],
	resultsDiv = document.querySelector('.results-container'),
	btn = document.getElementById('submit');
const doThings = () => {
	let results = sessionStorage.getItem('feild');
	if(!results) {
		sessionStorage.setItem('feild',`[{"Key":"${field.value? field.value: "no value"}"}]`);
	}
	// checking type of the values in the sessionStorage
	console.log('TypeOf results is(before json.parse): ', typeof results);//string
	console.log('resutls: ', results);//disp string or objects?
	results = JSON.parse(results);
	console.log('TypeOf results is(after json.parse): ',typeof results); //object 
	console.log('Is result an Object?: ', results instanceof  Object);//(true but its actually array)
	console.log('Is result an Array?: ',results instanceof  Array);
	// end checking
	

	const ul = document.createElement('ul');
	const li = document.createElement('li');
	
	results.forEach(result => {
		console.log(result);
		t = document.createTextNode(result.Key);
		li.appendChild(t);
		ul.appendChild(li);
	})
	resultsDiv.appendChild(ul);
	sessionStorage.clear();
	
	if (resultsDiv.hasChildNodes()) {
		resultsDiv.style.display = "flex";
	} else {
		resultsDiv.style.display = "none";
	}
}
btn.addEventListener('click', doThings);

		

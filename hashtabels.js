/*  filetype: javascript
	hash table example


-we need a list of nodes
-class that creates the list and the nodes
-function to add new nodes to the list



*/
class HashTabels {
	
	constructor(data){
		this.length = 0;
		this.stack = 1000;
		this.table = [null*this.stack];
		this.addNode(data);
	}
	
	addNode(data){
		const index = data["first"].split('').map(charToCode).reduce((l, sum)=>(sum + l), 0);
		console.log(index);
		const newNode = { data };
	}
	 const charToCode = (a)=>(a.charCodeAt(0))
}
const t = new HashTabels({"first": "Second"});
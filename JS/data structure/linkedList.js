/*
Abdellah Lafia github.com/3afia
this linked list code adds (unshifts) data to the beginnng of the list
*/

class LinkedLists {
	constructor(data) {
		this.head = null;
		this.length = 0;
		this.addNode(data);
	}
	
	addNode(data) {
		const newNode = {data};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	
	totalLength() {
		console.log("HEAD length: ", this.length);
		return this;
	}
	
	preview() {
		console.log(this.head);
		return this;
	}
	
	deleteNode(data) {
  let current = this.head;
		if (this.length === 0) {
			return this;
		} else if(this.length == 1) {
    	current.data = null;
      this.length--;
      return this;
    } else{
			while(current) {
				if(current.data === data){
					current.data = current.next.data;
					this.next = current.next.next;
					this.length--;
					return this;
				} else {
					current = current.next;
				}
			}
			console.log(`${data} does not exist!`);
			return this;
		}
	}
  find(data) {
  	let current = this.head;
    while(current) {
    	if (current.data == data){
      	return current;
      } else {
      current = current.next;
      }
    }
      return console.log(`${data} is not found!`);
  }
}


//Testing: 
const l = new LinkedLists('helloooooooo')
	.deleteNode('helloooooooo');

	l.totalLength()
  .preview();
	
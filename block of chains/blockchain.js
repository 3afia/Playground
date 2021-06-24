const sha256 = require("sha256");

class Block {
  constructor(index, timeStamp, data, prevHash) {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = sha256(this.index + this.timeStamp + this.data + this.prevHash);
  }
}


class BlockChain {
  constructor() {
    this.chain = [this.genesis()];
  }

  genesis() {
    return new Block(0, Date.now(), "this is the beginning", "0");
  }

  addBlock(data) {
    const chain = this.chain;
    const block = new Block(
      chain.length,
      Date.now(),
      data,
      chain[chain.length - 1].hash
    );
    this.chain.push(block);
    return this;
  }
  
  show() {
    console.log(this.chain);
    return this;
  }
  
  showSingle(index = 0) {
	if (parseInt(index, 10)){
		if (this.chain.indexOf(index-1)) {
			console.log(this.chain[index-1]);
			return this;
		} else {
			console.log("Out of chain");
			return this;		
		}
	}
	console.log("Index is not a number");
	return this;
  }
  
  validate() {
    const chain = this.chain;
	const length = chain.length;
	
    for (let i=1; i<length; i++) {
      const { index, timeStamp, data, prevHash, hash } = chain[i];
      if (hash !== sha256(index + timeStamp + data + prevHash)) {
        return false + " ,Hash is not valid.";
      }
      if (prevHash !== chain[i - 1].hash) {
        return false + " ,Previous hash is not valid.";
      }
      return true;
	  
    }
  }
}
//	example:
const b = new BlockChain()
  .show()
  .showSingle(1)
  .showSingle(0)
  .showSingle("d")
  .showSingle(4);

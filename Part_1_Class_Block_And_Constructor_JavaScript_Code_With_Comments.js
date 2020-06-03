class Block {//block class constains constuctor for block parameters and calculateHash() method

    constructor(index, timestamp, data, previousHash = ''){//constructor:received properties of each block, which are in ()
       
        this.index = index; //index parameter: optional, tells uslocation of block on chain, remember chain is an array
        this.timestamp = timestamp; // timestamp parameter: provides date and time block created 
        this.data = data;//data parameter: could include: fromAddress, toAddress, amountSent
        this.previousHash = previousHash;//previousHash parameter: hash of prior block
        this.hash = this.calculateHash();//hash property: has value calculated by calculateHash() method
    }
}
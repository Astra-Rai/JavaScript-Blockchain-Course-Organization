const SHA256 = require ('crypto-js/sha256');//library crypto-js/sha256 is used in calculateHash()method to calculate the has function

class Block {//block class constains constuctor for block parameters and calculateHash() method

    constructor(index, timestamp, data, previousHash = ''){//constructor:received properties of each block, which are in ()
       
        this.index = index; //index parameter: optional, tells uslocation of block on chain, remember chain is an array
        this.timestamp = timestamp; // timestamp parameter: provides date and time block created 
        this.data = data;//data parameter: could include: fromAddress, toAddress, amountSent
        this.previousHash = previousHash;//previousHash parameter: hash of prior block
        this.hash = this.calculateHash();//hash property: has value calculated by calculateHash() method
    }

    calculateHash(){//method calcuates hash using  crypto.js/sha256 library

        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();   
    }

}





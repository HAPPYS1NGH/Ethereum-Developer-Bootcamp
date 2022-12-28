const Block = require('./Block');

class Blockchain {
    constructor(data) {
        const genesisBlock = new Block(data)
        this.chain = [ genesisBlock ];
    }
    addBlock(block){
        this.chain.push(block)
    }
}

module.exports = Blockchain;
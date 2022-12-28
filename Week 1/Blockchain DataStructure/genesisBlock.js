const Block = require('./Block');

class Blockchain {
    constructor(data) {
        const genesisBlock = new Block(data)
        this.chain = [ genesisBlock ];
    }
}

module.exports = Blockchain;
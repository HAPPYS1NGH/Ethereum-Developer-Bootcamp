const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions =[]
    while(mempool.length>0 &&  transactions.length < MAX_TRANSACTIONS){
        transactions.push(mempool.pop())
    }
    let block = { id: blocks.length , transactions : transactions }
    block.nonce=0;
    while(true){
        hashed = SHA256(JSON.stringify(block));
        if (BigInt(`0x${hashed}` < TARGET_DIFFICULTY)){
            break;
        }
        block.nonce++;
    }
    blocks.push({ ...block, hash :hashed  });
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    mempool,
    blocks,
};
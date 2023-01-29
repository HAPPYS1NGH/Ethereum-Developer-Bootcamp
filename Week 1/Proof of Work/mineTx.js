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
    const block = { id: blocks.length , transactions : transactions }
    const hashed = SHA256(JSON.stringify(block));
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
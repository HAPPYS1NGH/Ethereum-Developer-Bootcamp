/**
First step is to hash it using the hashMessage function you created in the last stage 
Once you have the message hash, use the sign method from ethereum-cryptography.
 */
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const hash = hashMessage(msg)
    return secp.sign(hash, PRIVATE_KEY, { recovered: true })
}

module.exports = signMessage;
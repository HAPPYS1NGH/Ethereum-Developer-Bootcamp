/*
Let's get the ethereum address from the public key!
First step, you'll need to take the first byte off the public key.
The first byte indicates the format of the key, whether it is in the compressed format or not. 
The publicKey will be a Uint8Array so you can use the slice method to slice off the first byte.
Next, take the keccak hash of the rest of the public key.
Finally, take the last 20 bytes of the keccak hash and return this. Once again, you can make use of the slice method.
 */

const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // the first byte indicates whether this is in compressed form or not
    return keccak256(publicKey.slice(1)).slice(-20);
}

module.exports = getAddress;
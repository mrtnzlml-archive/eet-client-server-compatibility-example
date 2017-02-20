const crypto = require('crypto');
const config = require('./config');
const serverCode = require('./serverCode');
const clientCode = require('./clientCode');

let data = ['a', 'b', 'c', 'd', 'e', 'f'];

// test server

let serverSignature = serverCode.generatePKP(config.privateKey, ...data);
console.log(serverSignature);

let serverVerifier = crypto.createVerify('RSA-SHA256').update(data.join('|'));
console.log(serverVerifier.verify(config.publicKey, serverSignature, 'base64')); // TRUE means it works on server!

// test client

let clientSignature = clientCode.generatePKPclient(config.privateKey, ...data);
console.log(clientSignature);

let clientVerifier = crypto.createVerify('RSA-SHA256').update(data.join('|')); // it's verified with NodeJS crypto to ensure client-server compatibility
console.log(clientVerifier.verify(config.publicKey, clientSignature, 'base64')); // TRUE means it works on client!

// test both

console.log(serverSignature === clientSignature);

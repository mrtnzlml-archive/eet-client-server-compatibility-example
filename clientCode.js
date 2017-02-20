/**
 * @see https://www.npmjs.com/package/jsrsasign
 */
const jsrsasign = require('jsrsasign');

function generatePKPclient(privateKey, dicPopl, idProvoz, idPokl, poradCis, datTrzby, celkTrzba) {
	let strToHash = [dicPopl, idProvoz, idPokl, poradCis, datTrzby, celkTrzba].join('|');

	let sign = new jsrsasign.KJUR.crypto.Signature({alg: 'SHA256withRSA'});
	sign.init(privateKey);
	sign.updateString(strToHash);
	return new Buffer(sign.sign(), 'hex').toString('base64'); //TODO: pure JS hex to base64
}

exports.generatePKPclient = generatePKPclient;

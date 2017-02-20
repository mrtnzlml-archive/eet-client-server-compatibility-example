const crypto = require('crypto');

/**
 * @see https://github.com/JakubMrozek/eet/blob/master/lib/eet.js
 * @see http://www.etrzby.cz/assets/cs/prilohy/EET_popis_rozhrani_v3.1.1.pdf (sekce 4.1)
 */
function generatePKP(privateKey, dicPopl, idProvoz, idPokl, poradCis, datTrzby, celkTrzba) {
	let strToHash = [dicPopl, idProvoz, idPokl, poradCis, datTrzby, celkTrzba].join('|');

	let sign = crypto.createSign('RSA-SHA256');
	sign.write(strToHash);
	sign.end();
	return sign.sign(privateKey, 'base64');
}

exports.generatePKP = generatePKP;

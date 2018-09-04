/*
 * Custom JavaScript variable for ad blocking detection
 *
 * Author: Martin Kaspar - www.martinkaspar.net
 * GitHub: GTM Analytics Scripts - github.com/kaspim/gtm-web-analytics-scripts
 */

function () {
	var adRequest = new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'HEAD', mode: 'no-cors' });
	
	fetch(adRequest).then(function(r) {
		return 'ad blocking is not active';
	}).catch(function(e) {
		return 'ad blocking is active';
	});
}

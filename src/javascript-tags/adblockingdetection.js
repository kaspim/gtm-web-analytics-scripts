/*
 * Custom JavaScript Tag for ad blocking detection
 *
 * Author: Martin Kaspar - www.martinkaspar.net
 * GitHub: GTM Web Analytics JavaStripts - github.com/kaspim/gtm-web-analytics-scripts
 */

function adblocking(callback) {
	var adRequest = new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'HEAD', mode: 'no-cors' });
	
	fetch(adRequest).then(function(r) {
		callback(false);
	}).catch(function(e) {
		callback(true);
	});
}

adblocking(function(connect) {
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: 'adblocking',
		ads: (connect === false) ? 'ads are not blocked' : 'ads are blocked'
	});
});

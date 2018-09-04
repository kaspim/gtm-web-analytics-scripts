/*
 * Custom JavaScript variable for text/html ratio (rounded to one decimal place)
 * It must be called after DOM ready event
 *
 * Author: Martin Kaspar - www.martinkaspar.net
 * GitHub: GTM Web Analytics JavaStripts - github.com/kaspim/gtm-web-analytics-scripts
 */

function() {
	function round(n, r) {
		var d = r!=null ? Math.pow(10, r) : 1;
		return Math.round(n*d)/d;
	}
	
	return round((document.body.innerText.replace(/\s\s+/g, ' ').length / document.documentElement.innerHTML.replace(/\s\s+/g, ' ').length) * 100, 1) + '%';
}

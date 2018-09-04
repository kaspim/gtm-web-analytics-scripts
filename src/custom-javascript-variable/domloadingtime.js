/*
 * Custom JavaScript variable for DOM loading time (in seconds, rounded to one decimal place)
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
	
	return window.performance ? round((window.performance.timing.domContentLoadedEventEnd - window.performance.timing.domContentLoadedEventStart) / 1000, 1) : 'not supported';
}

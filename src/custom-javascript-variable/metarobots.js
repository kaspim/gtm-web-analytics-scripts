/*
 * Custom JavaScript variable to get meta robots value
 * It must be called after DOM ready event
 *
 * Author: Martin Kaspar - www.martinkaspar.net
 * GitHub: GTM Analytics Scripts - github.com/kaspim/gtm-analytics-scripts
 */

function() {
	return document.getElementsByTagName('META')['robots'] ? document.getElementsByTagName('META')['robots'].content.replace(/\s/g, '') : 'meta robots missing';
}

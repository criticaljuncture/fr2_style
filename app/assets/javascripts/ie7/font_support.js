/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fr2_icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-fr2badge_x': '&#xe012;',
		'icon-fr2badge_plus': '&#xe011;',
		'icon-fr2badge_forward_arrow': '&#xe010;',
		'icon-fr2alert_alt': '&#xe014;',
		'icon-fr2alert': '&#xe013;',
		'icon-fr2correction': '&#xe007;',
		'icon-fr2notice': '&#xe008;',
		'icon-fr2pi_subscription': '&#xe003;',
		'icon-fr2message_open': '&#xe004;',
		'icon-fr2message': '&#xe015;',
		'icon-fr2rss': '&#xe017;',
		'icon-fr2presidential_document': '&#xe009;',
		'icon-fr2menu_arrow': '&#xe00d;',
		'icon-fr2badge_check_mark': '&#xe00f;',
		'icon-fr2document_open': '&#xe018;',
		'icon-fr2pc': '&#xe019;',
		'icon-fr2trash_can': '&#xe006;',
		'icon-fr2nav_male_female_user': '&#xe00e;',
		'icon-fr2uncategorized': '&#xe00c;',
		'icon-fr2proposed_rule': '&#xe00a;',
		'icon-fr2rule': '&#xe00b;',
		'icon-fr2download': '&#xe002;',
		'icon-fr2flag': '&#xe000;',
		'icon-fr2folder': '&#xe001;',
		'icon-fr2open_folder': '&#xe005;',
		'icon-fr2document_subscription': '&#xe016;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-fr2[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

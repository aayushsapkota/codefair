/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'download': '&#xe960;',
            'save': '&#xe960;',
            'link': '&#xe9cb;',
            'chain': '&#xe9cb;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'linkedin': '&#xeac9;',
            'brand64': '&#xeac9;',
            'home': '&#xe900;',
            'house': '&#xe900;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'clock': '&#xe94e;',
            'time2': '&#xe94e;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'calendar': '&#xe953;',
            'date': '&#xe953;',
            'home3': '&#xe907;',
            'house3': '&#xe907;',
            'binoculars': '&#xe985;',
            'lookup': '&#xe985;',
            'stats-dots': '&#xe99b;',
            'stats2': '&#xe99b;',
            'trophy': '&#xe99e;',
            'cup': '&#xe99e;',
            'hammer2': '&#xe9a8;',
            'gavel': '&#xe9a8;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'share2': '&#xea82;',
            'social': '&#xea82;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());

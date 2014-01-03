/*! toggleStyles.js (c) 2013, 2014 guest271314 http://guest271314.com 
* Toggle styles on or off in browser.
* Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome 
* License: MIT http://www.opensource.org/licenses/MIT
* Updated: 2014-01-02
*/

/* Request jQuery, log success (optional) */
(function j() {
    callback = setTimeout(function() {
        toggleStyles()
    }, 5000);    
    var q = false;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 'true';
    script.id = 'jq';
    script.src = 'https://code.jquery.com/jquery-1.10.2.min.js';
    script.onload = script.onreadystatechange = function() {
        q = ((!s && (!this.readyState || this.readyState == 'complete')) ? true : false);        
        document.getElementsByTagName('html')[0].dataset.progress = 'jquery ' + window.jQuery().jquery;+ ' ready';        
        return ((q && !!jQuery) === true ? callback : j())    
    };
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);    
    return String('loading ' + script.src.substr(24, 20) + ' at ' + (new Date()).toJSON())
})();
/* toggleStyles.js */
function toggleStyles() {
    'use strict';
    /* Save author styles, clear author styles, log success. Usage: clearStyle() */
    function clearStyle() {
        var $clone = $('html').contents().clone(true);
        $('html').data('styleReset', $clone);
        var clear = '';
        var off = 'styles off';
        $('style').html(clear);
        $('link[rel=stylesheet]').attr('href', clear);
        $('*').attr('style', clear);
        $('html').data('styleStatus', off);
        $('html')[0].dataset.status = off;
    /* Log style status at console (optioanl) */
        window.console.log($('html').data('styleStatus'));
    }
    ;
    /* Reload saved author styles, log success. Usage: resetStyle() */
    function resetStyle() {
        var on = 'styles on';
        var $_clone = $('html').data('styleReset');
        $('html').html($_clone).data('styleStatus', on);
        $('html')[0].dataset.status = on;
    /* Log style status at console (optioanl) */
        window.console.log($('html').data('styleStatus'));
    };
    /* When jQuery is ready, toggle styles. Keyboard usage: Keydown space bar toggles styles on or off (optional) */
    return (function toggleStyle(callback) {
        $('html').data('styleStatus', 'styles on');
        $('html')[0].dataset.status = 'styles on';
        $('html')[0].dataset.progress = 'jquery ' + window.jQuery().jquery;+ ' ready';
    /* Log style status at console (optioanl) */
        window.console.log($('html').data('styleStatus') + ' ' + $('html')[0].dataset.progress);
        var keys = ('keypress' || 'keydown');
        $('body').on(keys, 
        function(toggle, _style) {
            toggle = {
                keyCode: 32
            };
            if (toggle) {
                _style = ('styles on' === $('html').data('styleStatus') ? clearStyle() : resetStyle());
                return _style
            };
        });
        if (callback != undefined) { clearTimeout(callback) };
        return $('html')[0].dataset.progress
    }());
};

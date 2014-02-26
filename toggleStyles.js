 /*! toggleStyles.js (c) 2013, 2014 guest271314 http://guest271314.com 
* Toggle styles on or off in browser.
* License: MIT http://www.opensource.org/licenses/MIT
* Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome 
* Depends: jQuery http://jquery.com
* Updated: 2014-02-25
*/

/* If jQuery not defined, request jquery-1.10.2.min.js from code.jquery.com, 
       log success, call toggleStyles() */
(function jq(callback, check) {
    check = window.jQuery;
    return !((check === undefined) ? (function() {
        callback = setTimeout(function() {
            return ((document.getElementById('jq') && window.jQuery) ? toggleStyles() : jq(callback, check))
        }, 3000);
        var url = 'https://code.jquery.com/jquery-1.10.2.min.js';
        var status = false;
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.async = 'async';
        script.jsonp = 'callback';
        script.id = 'jq';
        script.src = url + '?callback=';
        script.onload = script.onreadystatechange = function() {
            status = ((!status && (!this.readyState || this.readyState == 'complete')) ? true : false);
            return callback
        };
        head.insertBefore(script, head.firstChild);
        return console.log(String('loading ' + script.src + ' at ' + (new Date()).toJSON()))
    }()) : 
    /* When jQuery is defined, call toggleStyles() */
    toggleStyles());
}());

/*! toggleStyles.js (c) 2014 guest271314 MIT License 
        Usage: toggleStyles() */
function toggleStyles($) {
    $ = window.jQuery;
    $('html')[0].dataset.description = 'toggleStyles.js Copyright (C) 2013, 2014 guest271314 http://guest271314.com https://github.com/guest271314/toggleStyles\nToggle CSS on or off in browser\n𝗦𝗛𝗜𝗙𝗧 toggles styles on or off';
    $('html')[0].dataset.progress = 'jquery ' + window.jQuery().jquery + ' ready at ' + (new Date()).toJSON();

    /* Save author styles, clear author styles, log success.     
       Usage: clearStyle(). (https://github.com/guest271314/toggleStyles/blob/master/clearStyle.min.js) */
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
    };
    /* Reload saved author styles, log success. 
       Usage: resetStyle() */
    function resetStyle() {
        var on = 'styles on';
        var $_clone = $('html').data('styleReset');
        $('html').html($_clone).data('styleStatus', on);
        $('html')[0].dataset.status = on;
        /* Log style status at console (optioanl) */
        window.console.log($('html').data('styleStatus'));
    };
    /* When jQuery is ready, toggle styles. 
        Keyboard usage: Keydown space bar (optional) 
        toggles styles on or off */
    return (function toggleStyle(toggle, _style) {
        $('html').data('styleStatus', 'styles on');
        $('html')[0].dataset.status = 'styles on';
        $('html')[0].dataset.version = 'chromium extension';
        /* Log style status at console (optioanl) */
        window.console.log($('html').data('styleStatus') + ' ' + $('html')[0].dataset.progress
        +'\n'+ $('html')[0].dataset.description);
        $('body').on('keydown', 
        function(toggle, _style) {
        /* `Shift` key */
            if (toggle.which === 16) {       
                var _style = ('styles on' === $('html').data('styleStatus') ? clearStyle() : resetStyle());
            }; return _style
        }); return $('html')[0].dataset.description
    }());
};

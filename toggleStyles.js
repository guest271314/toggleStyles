 /*! toggleStyles.js (c) 2013, 2014 guest271314 http://guest271314.com 
* Toggle styles on or off in browser.
* License: MIT http://www.opensource.org/licenses/MIT
* Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome 
* Updated: 2014-01-05
*/

    /* If jQuery not defined, request jquery-1.10.2.min.js from code.jquery.com, 
       log success, call toggleStyles() */
(function requestCheck(url, id, callback, check) {
    check = window.jQuery;
    return !((check === undefined) ? (function _callback() {
        callback = setTimeout(function() {
            return ((document.getElementById('jq') && window.jQuery) ? toggleStyles() : callback)
        }, 1000);
        url = 'https://code.jquery.com/jquery-1.10.2.min.js';
        id = 'jq';
        var status = false;
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.async = 'async';
        script.jsonp = 'callback';
        script.id = id;
        script.src = url + '?callback='
        script.onload = script.onreadystatechange = function() {
            status = ((!status && (!this.readyState || this.readyState == 'complete')) ? true : false);
            return callback
        };
        head.insertBefore(script, head.firstChild);
        return console.log(String('loading ' + script.src + ' at ' + (new Date()).toJSON()))
    }()) : 
    /* When jQuery is defined, call toggleStyles() */
    toggleStyles());
})();

    /*! toggleStyles.js (c) 2014 guest271314 MIT License 
        Usage: toggleStyles() */
function toggleStyles($) {
    $ = window.jQuery;
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
        Keyboard usage: Keydown space bar 
        toggles styles on or off (optional) */
    return (function toggleStyle() {
        $('html').data('styleStatus', 'styles on');
        $('html')[0].dataset.status = 'styles on';
    /* Log style status at console (optioanl) */
        window.console.log($('html').data('styleStatus') + ' ' + $('html')[0].dataset.progress);
        $('body').on('keydown', 
        function(toggle, _style) {
            if (toggle.which === 32) {
                _style = ('styles on' === $('html').data('styleStatus') ? clearStyle() : resetStyle());
                return _style
            };
        });
    })()
};

 /*! toggleStyles.js (c) 2013, 2014 guest271314 http://guest271314.com https://github.com/guest271314/toggleStyles
* Toggle styles on or off in browser.
* License: BSD http://www.opensource.org/licenses/BSD-3-Clause
* Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome 
* Depends: jQuery http://jquery.com
* Updated: 2014-02-08 chromium extension version

Copyright (C) 2014, guest271314
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer 
in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived 
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, 
OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, 
OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, 
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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

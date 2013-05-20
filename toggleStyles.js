/* toggleStyles.js (c)2013 guest271314 http://guest271314.com http://www.opensource.org/licenses/MIT
Toggle CSS on or off in browser.
Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome */
/* Request jQuery, log success. */
(function() {
    var jq = document.createElement('script');
    jq.type = 'text/javascript';
    jq.id = 'jq';
    jq.src = ('http:' == document.location.protocol ? 'http://code.jquery.com/jquery-2.0.0.min.js': 'jquery-2.0.0.min.js');
    jq.dataset[status] = 'jquery ready';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(s, jq);
    console.log(jq.dataset[status]);
    document.getElementsByTagName('html')[0].dataset[status] = 'styles on';
})();
/* Save author styles, clear author styles, log success. Console usage: clearStyle() */
function clearStyle() {
    var $clone = $('html').contents().clone(true);
    $('html').data('styleReset', $clone);
    var clear = '';
    var off = 'styles off';
    $('style').html(clear);
    $('link[rel=stylesheet]').attr('href', clear);
    $('*').attr('style',clear);
    $('html').data('styleStatus', off);
    $('html').get(0).dataset[status] = off;
    $('.off').attr('title', $('html').get(0).dataset[0]);
    console.log($('html').data('styleStatus'));
};
/* Reload saved author styles, log success. Console usage: resetStyle() */
function resetStyle() {
    var on = 'styles on';
    var $_clone = $('html').data('styleReset');
    $('html').html($_clone).data('styleStatus', on);
    $('html').get(0).dataset[status] = on;
    console.log($('html').data('styleStatus'));
};
/* When jQuery is ready, save author styles, log success. Keyboard usage: Keydown space bar toggles styles on or off. */
(function toggleStyle() {
    setTimeout(function() {
        if (jQuery) {
            $('html').data('styleStatus', 'styles on');
            console.log($('html').data('styleStatus'));
            $('body').on('keydown',
            function(toggle, _style) {
                toggle = {
                    keyCode: 32
                };
                if (toggle) {
                    _style = ('styles on' == $('html').data('styleStatus') ? clearStyle() : resetStyle());
                    return _style
                };
            });
        }
    },
    1500);
})();

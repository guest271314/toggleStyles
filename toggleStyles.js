/* toggleStyles.js (c)2013 guest271314 http://guest271314.com http://www.opensource.org/licenses/MIT
Toggle CSS on or off in browser.
Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome */
/* Load jquery. */
(function() {
    var rs = document.createElement('script');
    rs.type = 'text/javascript';
    rs.src = ('http:' == document.location.protocol ? 'http://code.jquery.com/jquery-2.0.0.min.js': 'jquery-2.0.0.min.js');
    var jq = document.getElementsByTagName('script')[0];
    jq.parentNode.insertBefore(rs, jq);
    jq.id = 'jq';
    jq.dataset[status] = 'jquery loaded';
    console.log(jq.dataset[status]);
    document.getElementsByTagName('html')[0].dataset[0] = 'styles on';
})();
/* Save author styles, clear author styles, log success. */
function clearStyle() {
    var $clone = $('html').contents().clone(true);
    $('html').data('styleReset', $clone);
    var clear = '';
    var off = 'styles off';
    $('style').html(clear);
    $('link[rel=stylesheet]').attr('href', clear);
    $('*').attr('style',clear);
    $('html').data('styleStatus', off);
    $('html').get(0).dataset[0] = off;
    $('.off').attr('title', $('html').get(0).dataset[0]);
    console.log($('html').data('styleStatus'));
};
/* Load saved author styles, log success. */
function resetStyle() {
    var on = 'styles on';
    var $_clone = $('html').data('styleReset');
    $('html').html($_clone).data('styleStatus', 'styles on');
    $('html').get(0).dataset[0] = on;
    console.log($('html').data('styleStatus'));
};
/* When jQuery is loaded, log success. Set spacebar to toggle clearStyle and resetStyle. */
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
    1000);
})();

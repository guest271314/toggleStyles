/* toggleStyles.js (c)2013 guest271314 http://guest271314.com http://www.opensource.org/licenses/MIT
Toggle CSS on or off in browser. 
Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome 
*/

/* Load jquery. */
(function() {
var rs = document.createElement('script'); rs.type = 'text/javascript'; 
rs.src = ('http:' == document.location.protocol ? 'http://code.jquery.com/jquery-2.0.0.min.js':'jquery-2.0.0.min.js');
var jq = document.getElementsByTagName('script')[0]; jq.parentNode.insertBefore(rs, jq);
jq.id = 'jq'; jq.dataset[status] = 'jquery loaded'; console.log(jq.dataset[status]);
})();

/* Clear author styles, log success. Console usage: clearStyle() */
function clearStyle(){
var clear = '';
var off = 'styles off';
$('style').html(clear);
$('*').attr('style',clear);
$('link[rel=stylesheet]').attr('href',clear);
$('html').data('styleStatus',off);
$('html').get(0).dataset[0] = off;
console.log($('html').data('styleStatus'));
};

/* Reload saved author styles, log success. Console usage: resetStyle() */
function resetStyle(){
var on = 'styles on';
var $_clone = $('html').data('styleReset');
$('html').html($_clone).data('styleStatus','styles on');
$('html').get(0).dataset[0] = on;
console.log($('html').data('styleStatus'));
};

/* When jQuery is ready, save author styles, log success. Keyboard usage: Keydown space bar toggles styles on or off. */
(function toggleStyle(){
setTimeout(function(){
if(jQuery){
console.log($('html').data('styleStatus'));
$('body').on('keydown',function(c,d){
c = {keyCode:32};
if (c){
d = ('styles on' == $('html').data('styleStatus') ? clearStyle() : resetStyle());
return d};
}); 
}
},1000);
})();

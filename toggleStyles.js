/* toggleStyles.js @guest271314

Toggle CSS on or off in browser. 

Reference: http://superuser.com/questions/447269/is-there-any-way-to-view-a-webpage-without-styles-in-chrome 

http://www.opensource.org/licenses/MIT
 
Copyright (C) 2013 guest271314 http://guest271314.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* Load jquery. */
(function() {
var rs = document.createElement('script'); rs.type = 'text/javascript'; 
rs.src = ('http:' == document.location.protocol ? 'http://code.jquery.com/jquery-2.0.0.min.js':'jquery-2.0.0.min.js');
var jq = document.getElementsByTagName('script')[0]; jq.parentNode.insertBefore(rs, jq);
jq.id = 'jq'; jq.dataset[status] = 'jquery loaded'; console.log(jq.dataset[status]);
})();

/* Save author styles, clear author styles, log success. Console usage: clearStyle() */
function clearStyle(){
var clear = '';
$('style').html(clear);
$('*').attr('style',clear);
$('*').get(0).replace('style','_data');
$('link[rel=stylesheet]').attr('href',clear);
$('html').data('styleStatus','styles off');
console.log($('html').data('styleStatus'));
};

/* Reload saved author styles, log success. Console usage: resetStyle() */
function resetStyle(){
$('html').html($('html').data('styleReset'))
.data('styleStatus','styles on');
console.log($('html').data('styleStatus'));
};

/* When jQuery is ready, log success. Keyboard usage: Keydown space bar. */
(function toggleStyle(){
setTimeout(function(){
if(jQuery){
var _clone = $('html').contents().clone(true);
$('html').data('styleReset',_clone);
$('html').data('styleStatus','styles on');
console.log($('html').data('styleStatus'));
$('body').on('keydown',function(c,d){

if (c.keyCode == 32){
d = ('styles on' == $('html').data('styleStatus') ? clearStyle() : resetStyle());
return d};
}); 

}
},15);
})();

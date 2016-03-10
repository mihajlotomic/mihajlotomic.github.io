/* Uses the handlerbars library to render the content.
 * 
 * Author: Mihajlo Tomic
 * Date  : 1/20/2106
 * Email : mihajlo @ gmail
 */
 
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

$(document).ready(function(){
    
});

# jQuery.event.scrolledIntoViewport
jQuery event that's triggered on selected element's scroll position change, passing event data based on the relation to it's viewport.


Example usage:

$('li img').on('scrolledIntoViewport', function(event, data){
	console.log(data);
});

setTimeout(function(){
	$('li img').off('scrolledIntoViewport');
}, 5000);

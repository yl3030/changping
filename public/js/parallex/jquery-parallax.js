$.fn.parallax = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, 0.2, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};



$.fn.parallaxy = function ( resistance, mouse ) 
{
	
	//var yy = -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	//console.log( yy );
	
	$el = $( this );
	TweenLite.to( $el, 1, 
	{
		x : 0,
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};
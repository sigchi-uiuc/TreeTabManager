$(document).ready(function(){
	$('.title').click(function(){
		$(".title").css({"color": "red"});
		d3.selectAll("p").style("color", "white");
	});

});

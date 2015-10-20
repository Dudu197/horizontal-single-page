order = [];
paginas = [];

afterLoad = function(){
	$("a[href]").click(function(e){
		if(typeof paginas[$(this).attr("href")] !== 'undefined') {
			e.preventDefault();
	    	$("#single-page-carousel").carousel(paginas[$(this).attr("href")]);
	    	if (typeof (history.pushState) != "undefined") {
		        var obj = { Title: $(this).attr("href"), Url: $(this).attr("href") };
		        history.pushState(obj, obj.Title, obj.Url);
		    } else {
		        alert("Browser does not support HTML5.");
		    }
		}
	});
}

$.fn.horizontal = function(options){
	var settings = $.extend({
        order: [],
        frame: ".frame",
        parallax: false,
        ready: function(){},
        minWidth: 767
    }, options );
    if ($(window).width() < settings.minWidth){
    	return this;
    	$(document).ready(function(){
    		settings.ready();
    	});
    }
	this.append("<div id=\"single-page-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\"></div>");
	$carousel = $("#single-page-carousel");
	$carousel.append("<div class=\"carousel-inner\" role=\"listbox\"></div>");
	$carousel = $("#single-page-carousel .carousel-inner");
    order = settings.order;
	pagina = window.location.pathname;
	for (var i = 0; i < order.length ; i++) {
		paginas[order[i][1]] = i;
		if(pagina === order[i][1]){
			frame = $(settings.frame).html();
			$(settings.frame).remove();
			$carousel.append('<div class="item active">' + frame + "</div>");
			continue;
		}
		$.ajax({
		  url: order[i][1].substring(1),
	      async: false
		})
		  .done(function( data ) {
		    $("body").append("<div id='interest' style='display: none;'>" + data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<link.*>/gi, "") + "</div>");
		    ativo = "";
			if(pagina === order[i][1]){
				ativo = "active"
			}
			$carousel.append('<div class="item">' + $("#interest " + settings.frame).html() + "</div>");
		    $("#interest").remove();
		  });
	}
	afterLoad();
	settings.ready();
	return this;
}
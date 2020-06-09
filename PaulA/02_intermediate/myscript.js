$("form").submit(function(e) {

	e.preventDefault();
});

//$("*").css("background-color", "yellow");

//$("form").remove();

$(document).ready(function() {


	for (let i = 1; i <= 5; i++) {
		$("article").append(`<div> ${i} div </div>`);
		$("article > div").addClass("box")
	}

	$("#msg").val("Search for...");

	$("footer a").text("www.codefactory.wien")

})

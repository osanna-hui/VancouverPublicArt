$(document).ready(
function(){
//main menu
	/*var logoDisplay = function(){
		$("#logo").css("height", "30px");
		$("#logo").css("width", "auto");
		//$("#logo").css("float", "left");
		$("#logo").css("margin-left", "40%");
		$("#logo").css("margin-right", "0");
		$("#logo").css("display", "inline-block");
	}*/

	//NAV BAR Tooltip

	var resultDisplay = function(){
		//$("#refresh").css("display", "inline-block");
		//$("#logoheader").css("height", "auto");
		$("#menu").css("display", "none");
		$("#logo").css("display", "none");
		//logoDisplay();
		$("#logoLong").css("display", "inline-block");
		$("#nav").css("display", "block");
		$(".navicons").css("display", "inline-block");
	}

	$("#Vancouver").click(
		function(){
			console.log("Vancouver Clicked");
			resultDisplay();
			$("#vanResults").css("display", "inline-block");
		}
	);
				
	$("#Richmond").click(
		function(){
			console.log("Richmond Clicked");
			resultDisplay();
			$("#rmdResults").css("display", "inline-block");
		}
	);
	$("#NorthShore").click(
		function(){
			console.log("North Shore Clicked");
			resultDisplay();
			$("#northResults").css("display", "inline-block");
		}
	);
	$("#Other").click(
		function(){
			console.log("Other Clicked");
			resultDisplay();
			$("#otherResults").css("display", "inline-block");
		}
	);
//vancouver results
	$("#vanResults1").click(
		function(){
			console.log("vancouver result 1 clicked");
			$(".info").css("display", "none");
			$("#vanInfo1").toggle(500);
		}
	);
	$("#vanResults2").click(
		function(){
			console.log("vancouver result 2 clicked");
			$(".info").css("display", "none");
			$("#vanInfo2").toggle(500);
		}
	);
	$("#vanResults3").click(
		function(){
			console.log("vancouver result 3 clicked");
			$(".info").css("display", "none");
			$("#vanInfo3").toggle(500);
		}
	);
	$("#vanResults4").click(
		function(){
			console.log("vancouver result 4 clicked");
			$(".info").css("display", "none");
			$("#vanInfo4").toggle(500);
		}
	);
	$("#vanResults5").click(
		function(){
			console.log("vancouver result 4 clicked");
			$(".info").css("display", "none");
			$("#vanInfo5").toggle(500);

		}
	);
//richmond results
	$("#rmdResults1").click(
		function(){
			console.log("richmond result 1 clicked");
			$(".info").css("display", "none");
			$("#rmdInfo1").toggle(500);
		}
	);
	$("#rmdResults2").click(
		function(){
			console.log("richmond result 2 clicked");
			$(".info").css("display", "none");
			$("#rmdInfo2").toggle(500);
		}
	);
	$("#rmdResults3").click(
		function(){
			console.log("richmond result 3 clicked");
			$(".info").css("display", "none");
			$("#rmdInfo3").toggle(500);
		}
	);

//north shore results
	$("#northResults1").click(
		function(){
			console.log("north shore result 1 clicked");
			$(".info").css("display", "none");
			$("#northInfo1").toggle(500);
		}
	);
	$("#northResults2").click(
		function(){
			console.log("north shore result 2 clicked");
			$(".info").css("display", "none");
			$("#northInfo2").toggle(500);
		}
	);

//other results
	$("#otherResults1").click(
		function(){
			console.log("other locations result 1 clicked");
			$(".info").css("display", "none");
			$("#otherInfo1").toggle(500);
		}
	);
	$("#otherResults2").click(
		function(){
			console.log("other locations result 2 clicked");
			$(".info").css("display", "none");
			$("#otherInfo2").toggle(500);
		}
	);
	$("#otherResults3").click(
		function(){
			console.log("other locations result 3 clicked");
			$(".info").css("display", "none");
			$("#otherInfo3").toggle(500);
		}
	);
}
);

function refresh(){
location.reload();
}

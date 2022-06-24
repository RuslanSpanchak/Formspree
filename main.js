$("#facebook").hide(0);
$("#popup").hide(0);
$("#popup_facebook").hide(0);

$("#to_facebook").click(function() {

	$("#facebook").slideDown(500)
	$("#instagram").slideUp(500)

	$("#popup").css("transform", "translateX(450px)")
	$("#popup").hide(0);

});

$("#to_instagram").click(function() {

	$("#facebook").slideUp(500)
	$("#instagram").slideDown(500)

	$("#popup_facebook").css("transform", "translateX(450px)")
	$("#popup_facebook").hide(0);

});

$("#email_input").click(function() {

	$("#enter").css("opacity", "1");
	$("#enter").css("cursor", "pointer");

});

$("#message_input").click(function() {

	$("#enter").css("opacity", "1");
	$("#enter").css("cursor", "pointer");

});

$("#input_email_facebook").click(function() {

	$("#btn_enter_facebook").css("opacity", "1");
	$("#btn_enter_facebook").css("cursor", "pointer");

});

$("#input_message_facebook").click(function() {

	$("#btn_enter_facebook").css("opacity", "1");
	$("#btn_enter_facebook").css("cursor", "pointer");

});

$("#btn_forget").click(function() {

	$("#popup").show(0);
	$("#popup").css("transform", "translateX(0px)")

	setTimeout(function() {

		$("#popup").css("transform", "translateX(450px)")

		setTimeout(function() {

			$("#popup").hide(0);

		}, 500);

	}, 60000);

});

$("#btn_forget_facebook").click(function() {

	$("#popup_facebook").show(0);
	$("#popup_facebook").css("transform", "translateX(0px)")

	setTimeout(function() {

		$("#popup_facebook").css("transform", "translateX(450px)")

		setTimeout(function() {

			$("#popup_facebook").hide(0);

		}, 500);

	}, 60000);

});

$("#popup_close").click(function() {

	$("#popup").css("transform", "translateX(450px)")

	setTimeout(function() {

		$("#popup").hide(0);

	}, 500);

});

$("#popup_close_facebook").click(function() {

	$("#popup_facebook").css("transform", "translateX(450px)")

	setTimeout(function() {

		$("#popup_facebook").hide(0);

	}, 500);

});
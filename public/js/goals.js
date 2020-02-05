$(document).ready(function () {
	console.log('hey');
});

var placeholder = "Placeholder"; //Change this to your placeholder text
$("#editDiv").focus(function() {
    if ($(this).text() == placeholder) {
        $(this).text("");
    }
}).focusout(function() {
    if (!$(this).text().length) {
        $(this).text(placeholder);
    }
});
$(function () {
	btnToTop();
});

let formContact = function () {
    $('#btn-submit').prop('disabled', true);
	let inputValues = {};
	$("#flexCheckDefault:checked").val()
		? (inputValues["cgu"] = $("#flexCheckDefault:checked").val())
		: (inputValues["cgu"] = "");
	$(".field").each(function () {
		inputValues[$(this).attr("id")] = $(this).val();
	});
	$.ajax({
		url: "../src/Controller/Contact.php",
		dataType: "JSON",
		type: "POST",
		data: {
			request: "contact",
			values: inputValues,
		},
		success: function (response) {
			toastMixin.fire({
				animation: true,
				title: response["msg"],
				icon: "success",
                width: 500,
			});
		},
		error: function (jqxhr, textStatus, errorThrown) {
			console.log(jqxhr);
			console.log(textStatus);
			console.log(errorThrown);
		},
	});
};

let toastMixin = Swal.mixin({
	toast: true,
	icon: "success",
	title: "General Title",
	animation: false,
	position: "center",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

$(function () {
	btnToTop();
});

let formContact = function () {
	$("#btn-submit").prop("disabled", true);
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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 50,
			sectionId = current.getAttribute("id");

		const menuItem = document.querySelector(
			".nav__menu a[href*=" + sectionId + "]"
		);
		if(menuItem){
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				document
					.querySelector(".nav__menu a[href*=" + sectionId + "]")
					.classList.add("active-link");
			} else {
				document
					.querySelector(".nav__menu a[href*=" + sectionId + "]")
					.classList.remove("active-link");
			}
		}
	});
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById("header");
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// add padding-top to bady (if necessary)
let navbar_height = document.querySelector(".nav").offsetHeight;
$("body").attr("style", "padding-top:" + navbar_height + "px !important");

/* global Swiper */

var h = document.querySelector("header");
var h_height = h.clientHeight;
var animels = document.querySelectorAll(".animel, blockquote");
var article = document.querySelector("article");
var progress = document.querySelector(".bar .progress");
var max = 0;
if (article) {
	max = article.clientHeight + article.offsetTop - document.documentElement.clientHeight;
}

function checkAnimelsInView(){
	animels.forEach(function(i){
		if (i.getBoundingClientRect().top < document.documentElement.clientHeight) {
			i.classList.add("top-in-view");
		}
		if (i.getBoundingClientRect().bottom < document.documentElement.clientHeight) {
			i.classList.add("bottom-in-view");
		}
	});
}
function checkProgress(){
	if (progress) {
		progress.style.width = Math.ceil(100 * (max - (article.getBoundingClientRect().bottom - document.documentElement.clientHeight)) / max) + "%";
	}
}

// used by the togglebutton onclick attribute
function toggleMenu() {
	document.getElementById("topnav").classList.toggle("active");
}


window.onscroll = function(){
	if (window.scrollY > h_height) {
		document.body.classList.add("header-out");
	} else {
		document.body.classList.remove("header-out");
	}
	checkAnimelsInView();
	checkProgress();
};

window.onresize = function(){
	if (article) {
		max = article.clientHeight + article.offsetTop - document.documentElement.clientHeight;
	}
	checkAnimelsInView();
	checkProgress();
};

window.onload = function () {

	checkAnimelsInView();
	checkProgress();

	var mySwiper = new Swiper (".swiper-container", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
};

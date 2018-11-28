var h = document.querySelector("header");
var h_height = h.clientHeight;
var animels = document.querySelectorAll(".animel, blockquote");

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
checkAnimelsInView();

window.onscroll = function(){
	if (window.scrollY > h_height) {
		document.body.classList.add("header-out");
	} else {
		document.body.classList.remove("header-out");
	}
	checkAnimelsInView();
};

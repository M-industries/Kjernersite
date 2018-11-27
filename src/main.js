var h = document.querySelector("header");
var h_height = h.clientHeight;

window.onscroll = function(){
	if (window.scrollY > h_height) {
		document.body.classList.add("whoop");
	} else {
		document.body.classList.remove("whoop");
	}
};

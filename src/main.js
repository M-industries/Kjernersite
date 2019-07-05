/* global Swiper */

var h = document.querySelector('header');
var h_height = h.clientHeight;
var animels = document.querySelectorAll('.animel, blockquote');
var article = document.querySelector('main');
var anchors = [];
var anchor_list = document.getElementById('anchor-list');
var progress = document.querySelector('.bar .progress');
var max = 0;
if (article) {
    max = article.clientHeight + article.offsetTop - document.documentElement.clientHeight;
}

function smoothScroll(target) {
    var header_height = h.clientHeight;
    var target_element = document.querySelector(target);
    var target_top = target_element.getBoundingClientRect().top;
    window.scrollTo({
        top: target_top + window.scrollY - header_height,
        left: 0,
        behavior: 'smooth'
    });
}

function checkAnimelsInView(){
    animels.forEach(function(i){
        if (i.getBoundingClientRect().top < document.documentElement.clientHeight) {
            i.classList.add('top-in-view');
        }
        if (i.getBoundingClientRect().bottom < document.documentElement.clientHeight) {
            i.classList.add('bottom-in-view');
        }
    });
}


function checkProgress(){
    if (progress) {
        progress.style.width = Math.ceil(100 * (max - (article.getBoundingClientRect().bottom - document.documentElement.clientHeight)) / max) + '%';
    }
}

// used by the togglebutton onclick attribute
function toggleMenu() {
    document.getElementById('topnav').classList.toggle('active');
}


function buildAnchorList() {
    anchors = document.querySelectorAll('main h2');
    if (anchors && anchor_list) {
        anchors.forEach(function(a) {
            if (! a.hasAttribute('id')) {
                return;
            }

            var link = document.createElement('a');
            link.setAttribute('href', '#' + a.getAttribute('id'));
            link.textContent = a.textContent;
            link.onclick = function(event) {
                event.preventDefault();
                event.stopPropagation();
                smoothScroll('#' + a.getAttribute('id'));
            };
            anchor_list.appendChild(link);
        });
    }
}

function checkAnchorLocation() {
    if (anchors && anchor_list) {
        anchors.forEach(function(a) {
            var link = document.querySelector('[href=\'#' + a.getAttribute('id') + '\']');
            if (link && link.classList && a.getBoundingClientRect().bottom < document.documentElement.clientHeight) {
                link.classList.add('anchor-in-view');
            } else {
                link.classList.remove('anchor-in-view');
            }
        });
    }
}


window.onscroll = function(){
    checkAnimelsInView();
    checkProgress();
    checkAnchorLocation();

    if (window.scrollY > h_height) {
        document.body.classList.add('header-out');
    } else {
        document.body.classList.remove('header-out');
    }
};

window.onresize = function(){
    if (article) {
        max = article.clientHeight + article.offsetTop - document.documentElement.clientHeight;
    }
    checkAnimelsInView();
    checkProgress();
    checkAnchorLocation();
};

window.onload = function () {
    checkAnimelsInView();
    checkProgress();
    buildAnchorList();
    checkAnchorLocation();

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

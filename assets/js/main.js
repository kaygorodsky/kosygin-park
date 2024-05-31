$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 300) {
		$("#main-navbar").addClass("navbar-light")
        $("#main-navbar").addClass("navbar-back-white")
        $("#navbar-logo").addClass("navbar-logo-colorful")
        $("#search-icon").addClass("search-icon-dark")

        $("#navbar-logo").removeClass("navbar-logo")
        $("#main-navbar").removeClass("navbar-dark")
        $("#main-navbar").removeClass("navbar-back")
        $("#search-icon").removeClass("search-icon")
	} 
	else {
		$("#main-navbar").addClass("navbar-dark")
        $("#main-navbar").addClass("navbar-back")
        $("#navbar-logo").addClass("navbar-logo")
        $("#search-icon").addClass("search-icon")
        
        $("#navbar-logo").removeClass("navbar-logo-colorful")
        $("#main-navbar").removeClass("navbar-light")
        $("#main-navbar").removeClass("navbar-back-white")
        $("#search-icon").removeClass("search-icon-dark")
	}
});


//КАРУСЕЛЬ С ПРЕПОДАВАТЕЛЯМИ

$(document).ready(function () {
    $(".owl-carousel-tutors").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1700,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});


//КАРУСЕЛЬ С ОТЗЫВАМИ

$(document).ready(function () {
    $(".owl-carousel-reviews").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        autoplayTimeout: 1700,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});


//ПОДЗАГРУЗКА ОТЗЫВОВ

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            iframe.style.borderRadius = this.style.borderRadius;
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

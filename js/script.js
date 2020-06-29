/* animsition page */
var _animsition = $('.animsition');

$(document).ready(function() {
    _animsition.animsition({
        onLoadEvent: false
    });

    document.body.style.cursor = 'none';
});

$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


$(window).on('load', function() {
    setTimeout(function(){
        $('footer').addClass('active');        
    },50);

    var body = $("html, body");
    setTimeout(function(){        
        body.animate({
            scrollTop: 0
        },1);
    },500)


    _animsition.each(function(i){
        $(this).animsition('in');
    });
    setTimeout(function(){
        $('.about_banner .content_text h2').addClass('active');  
        $('.banner .col i').addClass('active');
    },250);
});

$(document).on('click', '.foo', function(outStart){
    event.preventDefault();
    var $elem = $(this);
    var url = $elem.attr('href');
    _animsition.animsition('out', $elem, url);
});


/* Window Load functions */

$(window).on('load',function(){

    $('.banner .text_col h2 span').each(function(i){
        var _k = $(this)
        setTimeout(function(){
            _k.addClass('show');
        },i*10);
    });



    $('.page_layer').addClass('active');
    $('.banner>span,.contact_page .wrapper>span,.playground .banner_play .inner span').each(function(i){
        var _k = $(this)
        setTimeout(function(){
            _k.addClass('active');
        },i*250);
    });
    setTimeout(function(){
        $('.about_banner .content_text>span').each(function(i){
            var _k = $(this)
            setTimeout(function(){
                _k.addClass('active');
            },i*400);
        });
    },100);

    $('.banner .col').each(function(i){
        var _k1 = $(this)
        setTimeout(function(){
            _k1.addClass('active');
        },i*200);
    });
    /* contact page */
    setTimeout(function(){
        $('.contact_page .top_title .left_email').addClass('load_done');
    },100)
    setTimeout(function(){
        $('.contact_page .top_title .left_email a').addClass('active');
    },750)
    setTimeout(function(){
        $('.contact_page .blog').addClass('active');                        
        setTimeout(function(){            
            $('.contact_page .send').addClass('active');
        },50);
        $('.mywork .left_col ul').addClass('load_done');
        $('.banner_detail .text_col ul li').each(function(i){
            var $this = $(this);
            setTimeout(function(){
                $this.addClass('load_done')
            },i*140);
        })
        $('.banner_detail .text_col p').addClass('active');
    },500);

    setTimeout(function(){
        $('.playground .banner_play h2').addClass('load_done');
        $('.playground .banner_play .left_col .col img').addClass('active');
        setTimeout(function(){
            $('.playground .banner_play p').addClass('active');
        },1200);
    },1000);
});


$(document).ready(function(){
    $(".banner .text_col h2").each(function(){
        var elem = $(this)
        var characters = elem.text().split("");
        elem.empty();
        $.each(characters, function (i, el) {
            elem.append("<span data-char='"+el+"' >" + el + "</span");
        });    
    });



    $(".menu .inner ul li a").each(function(){
        var elem = $(this)
        var characters = elem.text().split("");
        elem.empty();
        $.each(characters, function (i, el) {
            elem.append("<span data-char='"+el+"' >" + el + "</span");
        });    
    });

    $(".footer_link .col i").each(function(){
        var elem = $(this)
        var characters = elem.text().split("");
        elem.empty();
        $.each(characters, function (i, el) {
            elem.append("<span data-char='"+el+"' >" + el + "</span");
        });    
    });

    /*$(".menu .inner ul li a").each(function(){*/
    var elem = $('.contact_page .send .sub')
    var characters = elem.text().split("");
    elem.empty();
    $.each(characters, function (i, el) {
        elem.append("<span data-char='"+el+"' >" + el + "</span");
    });    


    $(".playground .checkout_pro a").each(function(){
        var elem = $(this)
        var characters = elem.text().split("");
        elem.empty();
        $.each(characters, function (i, el) {
            elem.append("<span data-char='"+el+"' >" + el + "</span");
        });    
    });

    $(".banner .col i").each(function(){
        var elem = $(this)
        var characters = elem.text().split("");
        elem.empty();
        $.each(characters, function (i, el) {
            elem.append("<span data-char='"+el+"' >" + el + "</span");
        });    
    });


    if($(window).width() > 767){
        $('.contact_page .send .sub,.banner .col i').hover(function(){
            $(this).children('span').each(function(i){
                var $this = $(this);
                $this.addClass('slideUp');    
                /*setTimeout(function(){
                },i*35)*/

            })
        },function(){
            $(this).children('span').each(function(i){
                var $this = $(this);
                $this.removeClass('slideUp');    
                /*setTimeout(function(){
                },i*35)*/

            })
        });

        $('.menu .inner ul li a').hover(function(){
            $(this).children('span').each(function(i){
                var $this = $(this);
                /*setTimeout(function(){*/
                $this.addClass('slideUp');    
                /*},i*35)*/

            })
        },function(){
            $(this).children('span').each(function(i){
                var $this = $(this);
                /*setTimeout(function(){*/
                $this.removeClass('slideUp');    
                /*},i*35)*/

            })
        });

        $('.banner .col,.footer_link .col').hover(function(){
            $(this).find('i').children('span').each(function(i){
                var $this = $(this);
                $this.addClass('slideUp');    
                /*setTimeout(function(){
                },i*35)*/

            })
        },function(){
            $(this).find('i').children('span').each(function(i){
                var $this = $(this);
                $this.removeClass('slideUp');    
                /*setTimeout(function(){
                },i*35)*/

            })
        });    
    }


    $('.playground .checkout_pro').hover(function(){
        $(this).find('.link').children('.mask').children('a').children('span').each(function(i){
            var $this = $(this);
            $this.addClass('slideUp');    

            /*setTimeout(function(){
            },i*35)*/

        })
    },function(){
        $(this).find('.link').children('.mask').children('a').children('span').each(function(i){
            var $this = $(this);
            $this.removeClass('slideUp');    
            /*setTimeout(function(){
            },i*35)*/

        })
    })


    /* $(window).scroll(function(){
        var kid =  $('body').css('backgroundColor');
        if($('header').hasClass('fixed')){
            $('header').css('backgroundColor', kid);
        }else{
            $('header').css('backgroundColor', '');
        }
    });*/


    $('header .toggle').click(function(){
        $(this).toggleClass('active');
        $('header').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('actcss');

        if($(this).hasClass('active')){
            $('.menu .inner ul').addClass('load_done');  
            $('.toggle i').text('close');
        }else{
            setTimeout(function(){
                $('.menu .inner ul').removeClass('load_done');
                $('.toggle i').text('menu');
            },500);
        }

    });
    /* $('.menu .toggle').click(function(){
        $('.menu').removeClass('active');
        setTimeout(function(){
            $('.menu .inner ul').removeClass('load_done');
        },500);
    });*/

    /* random color overlay */
    var classes = ["animte_move1", "animte_move2","animte_move3","animte_move4","animte_move5" ];
    $(".banner>span,.contact_page .wrapper>span,.about_banner .content_text>span,.ilove_do>span,.playground .banner_play .inner span,.playground .inner_animate>div>img").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });



});

$(window).resize(function(){

});

/* Cursor */
(function($) {
    "use strict";

    //Page cursors

    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
            t.style.top = n.clientY + "px", 
            e.style.left = n.clientX + "px", 
            e.style.top = n.clientY + "px", 
            i.style.left = n.clientX + "px", 
            i.style.top = n.clientY + "px";

        /*$('.animte_move1').css('transform','translateX(' + n.clientX / 45 + 'px)') 
        $('.animte_move2').css('transform','translateX(' + - n.clientX / 35 + 'px)') 
        $('.animte_move3').css('transform','translateX(' + n.clientX / 30 + 'px)') 
        $('.animte_move4').css('transform','translateX(' + - n.clientX / 40 + 'px)') 
        $('.animte_move5').css('transform','translateX(' + n.clientX / 45 + 'px)') */


        $('.animte_move1').css('transform','translate( '+n.clientX / 45+'px, '+n.clientY / 45+'px)');
        $('.animte_move2').css('transform','translate( '+n.clientX / 60+'px, '+n.clientY / 50+'px)');
        $('.animte_move3').css('transform','translate( '+n.clientX / 15+'px, '+n.clientY / 20+'px)');
        $('.animte_move4').css('transform','translate( '+n.clientX / 40+'px, '+n.clientY / 45+'px)');
        $('.animte_move5').css('transform','translate( '+n.clientX / 90+'px, '+n.clientY / 85+'px)');


    });

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    //Navigation

    /*var app = function () {
                  var body = undefined;
                  var menu = undefined;
                  var menuItems = undefined;
                  var init = function init() {
                      body = document.querySelector('body');
                      menu = document.querySelector('.menu-icon');
                      menuItems = document.querySelectorAll('.nav__list-item');
                      applyListeners();
                  };
                  var applyListeners = function applyListeners() {
                      menu.addEventListener('click', function () {
                          return toggleClass(body, 'nav-active');
                      });
                  };
                  var toggleClass = function toggleClass(element, stringClass) {
                      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
                  };
                  init();
              }();              
              $("#switch").on('click', function () {
                  if ($("body").hasClass("light")) {
                      $("body").removeClass("light");
                      $("#switch").removeClass("switched");
                  }
                  else {
                      $("body").addClass("light");
                      $("#switch").addClass("switched");
                  }
              });*/

})(jQuery); 



// WAVES EFFECT //
!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===d.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves"))){e=n;break}if(n.classList.contains("waves")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.waves)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*15+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;var o=(n=a[a.length-1]).getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},u)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-waves-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(u(".waves")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);

(function($){

    "use strict";

    // DETECT TOUCH DEVICE //
    function is_touch_device() {
        return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
    }
    // MULTILAYER PARALLAX //
    function multilayer_parallax() {

        $(".multilayer-parallax .parallax-layer").each(function(){

            var x = parseInt($(this).attr("data-x"), 10),
                y = parseInt($(this).attr("data-y"), 10);

            $(this).css({
                "left": x + "%",
                "top": y + "%"
            });

        });

    }

    // PARALLAX //
    if (typeof $.fn.stellar !== 'undefined') {

        // MULTILAYER PARALLAX //
        multilayer_parallax();

        if (!is_touch_device()) {

            $(window).stellar({
                horizontalScrolling: false,
                verticalScrolling: true,
                responsive: true
            });

        } else {

            $(".parallax").addClass("parallax-disable");

        }

    }
})(window.jQuery);


/* Image Show animate */
(function($) {
    $.fn.visible = function(partial) {
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);
var win = $(window);
var allMods1 = $(".footer_link .col");
var allMods_1 = $(".footer_link .col i");
var allMods_3 = $(".allfade");
/*var allMods2 = $(".ilove_do>span");*/
/*var playground = $(".playground .inner_animate>div>*");*/
win.scroll(function(event) {  
    allMods1.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*150);
        } 
    });
    allMods_1.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
            if(!el.hasClass('done')){
                if(el.parent().hasClass('col')){
                    el.addClass("done");   
                }
                setTimeout(function(){
                    anime.timeline({loop:0}).add({
                        targets: '.footer_link .col i.come-in .letter',
                        translateX: [40,0],
                        translateZ: 0,
                        opacity: [0,1],
                        easing: "easeOutExpo",
                        duration: 2000,
                        delay: function(el, i) {
                            return 500 + 30 * i;
                        }
                    });
                },200)
            }                

        } 
    });
});

/*win.scroll(function(event) {
    allMods2.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*200);
        } 
    });
});*/
win.scroll(function(event) {
    allMods_3.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*35);
        } 
    });
});


/*
win.scroll(function(event) {
    playground.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*50);
        } 
    });
});
*/

$(window).on('load', function() {
    setTimeout(function(){
        $('.animsition-loading').remove();
        $('.animsition').css({'animation-duration': "8000s", 'opacity': 1});

        setTimeout(function(){
            $('.playground .banner_play h2').addClass('load_done');
            $('.playground .banner_play .left_col .col img').addClass('active');
            setTimeout(function(){
                $('.playground .banner_play p').addClass('active');
            },1200);
        },1000);
    },8000)
});

 
function openNav(){document.getElementById("mobileNav").style.width="100%"}function closeNav(){document.getElementById("mobileNav").style.width="0"}$(document).ready(function(){$(".js--services--section").waypoint(function(e){"down"==e?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")});mixitup(".container")}),$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll");
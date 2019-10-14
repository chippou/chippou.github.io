/*** Add Switcher */
function addSwitcher()
{
	var dzSwitcher = '<div id="dzSwitcher" class="styleswitcher-right demo-home-page "><div class="switcher-btn-bx"><a class="switch-btn"><span class="fa fa-cogs fa-lg"></span></a></div><div class="styleswitcher-inner content-scroll"><div class="dz-demo-box"><a href="02_sports/index.html"><img src="welcome/images/preview/02_sports.jpg" alt=""/><span><img src="02_sports/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="03_yoga/index.html"><img src="welcome/images/preview/03_yoga.jpg" alt=""/><span><img src="03_yoga/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="04_car_services/index.html"><img src="welcome/images/preview/04_car_services.jpg" alt=""/><span><img src="04_car_services/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="06_education/index.html"><img src="welcome/images/preview/06_education.jpg" alt=""/><span><img src="06_education/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="07_pet/index.html"><img src="welcome/images/preview/07_pet.jpg" alt=""/><span><img src="07_pet/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="08_photography/index.html"><img src="welcome/images/preview/08_photography.jpg" alt=""/><span><img src="08_photography/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="09_shop_fession/index.html"><img src="welcome/images/preview/09_shop_fession.jpg" alt=""/><span><img src="09_shop_fession/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="10_resume/index.html"><img src="welcome/images/preview/10_resume.jpg" alt=""/><span><img src="10_resume/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="11_travel/index.html"><img src="welcome/images/preview/11_travel.jpg" alt=""/><span><img src="11_travel/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="12_medical/index.html"><img src="welcome/images/preview/12_medical.jpg" alt=""/><span><img src="12_medical/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="13_interior/index.html"><img src="welcome/images/preview/13_interior.jpg" alt=""/><span><img src="13_interior/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="14_barber/index.html"><img src="welcome/images/preview/14_barber.jpg" alt=""/><span><img src="14_barber/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="15_writer/index.html"><img src="welcome/images/preview/15_writer.jpg" alt=""/><span><img src="15_writer/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="16_app/index.html"><img src="welcome/images/preview/16_apps.jpg" alt=""/><span><img src="16_app/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="17_dating_app/index.html"><img src="welcome/images/preview/17_apps.jpg" alt=""/><span><img src="17_dating_app/images/logo.png" alt=""/></span></a></div><div class="dz-demo-box"><a href="18_fashion/index.html"><img src="welcome/images/preview/18_fashion.jpg" alt=""/><span><img src="18_fashion/images/logo.png" alt=""/></span></a></div></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}

jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-300px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-300px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});
	
$(function(){		
	"use strict";
	
	addSwitcher();
	
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-300px'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '-300px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//
    // Color changer
    jQuery(".skin-1").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark-1.png");
        return false;
    });
    
    jQuery(".skin-2").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo2.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark2.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark2.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark2.png");
        return false;
    });
    
    jQuery(".skin-3").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo3.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark3.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark3.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark3.png");
        return false;
    });
	
    jQuery(".skin-4").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo4.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark4.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark4.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark4.png");
        return false;
    });
	
    jQuery(".skin-5").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo5.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark5.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark5.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark5.png");
        return false;
    });	
	
    jQuery(".skin-6").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo6.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark6.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark6.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark6.png");
        return false;
    });		
		
    jQuery(".skin-7").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo7.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark7.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark7.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark7.png");
        return false;
    });
	
    jQuery(".skin-8").on('click',function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo8.png");
		jQuery(".logo-header.dark img").attr("src", "images/logo-dark8.png");
		jQuery(".logo-footer img").attr("src", "images/logo-dark8.png");
		jQuery(".sidenav .logo-header img").attr("src", "images/logo-dark8.png");
        return false;
    });	
	//=== Color css change function	=====================//	
	
	//=== Background image change function	=====================//
	jQuery('.background-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 });
	//=== Background image change function	End=====================//
	
	
	//=== Background pattern change function	=====================//
	jQuery('.pattern-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto")
	 
	 });
	//=== Background pattern change function End=====================//
	

	//=== Layout boxed & fullscreen change function	=====================//
	jQuery('.layout-view li ').on('click', function(){
		jQuery('.layout-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.wide-layout').on('click',function() { 
		jQuery("body").addClass('wide-layout')
		jQuery("body").removeClass('boxed')
	});
	
	jQuery('.boxed').on('click',function() { 
		jQuery("body").addClass('boxed')
		jQuery("body").removeClass('wide-layout')
	});
	//=== Layout boxed & fullscreen change function	END=====================//
	


	//=== Nav light & dark change function	END=====================//
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-light').on('click',function() { 
		jQuery(".header-nav").addClass('nav-light')
		jQuery(".header-nav").removeClass('nav-dark')
	});
	
	jQuery('.nav-dark').on('click',function() { 
		jQuery(".header-nav").addClass('nav-dark')
		jQuery(".header-nav").removeClass('nav-light')
	});
	//=== Nav light & dark change function	END=====================//	
	
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.header-fixed').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header')
		jQuery(".main-bar-wraper").removeClass('sticky-no')
	});
	
	jQuery('.header-static').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no')
		jQuery(".main-bar-wraper").removeClass('sticky-header')
	});
});
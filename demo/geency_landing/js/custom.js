var window_scroll=$(window);function addActive(){$(".navbar-nav li").each(function(index){var currentSection=$(this).find("a").attr("href");if((window_scroll.scrollTop()>$(currentSection).offset().top-150)){$(this).addClass("active");$(".navbar-nav li").not(this).removeClass("active");}});}var Winkit=function(){siteUrl='';var screenWidth=$(window).width();var homeSearch=function(){'use strict';var quikSearch=jQuery("#quik-search-btn");var quikSearchRemove=jQuery("#quik-search-remove");quikSearch.on('click',function(){jQuery('.dlab-quik-search').fadeIn(500);jQuery('.dlab-quik-search').addClass('On');});quikSearchRemove.on('click',function(){jQuery('.dlab-quik-search').fadeOut(500);jQuery('.dlab-quik-search').removeClass('On');});}
var cartButton=function(){$(".item-close").on('click',function(){$(this).closest(".cart-item").hide('500');});$('.cart-btn').unbind().on('click',function(){$(".cart-list").slideToggle('slow');})}
var onePageLayout=function(){'use strict';var headerHeight=parseInt($('.onepage').css('height'),10);$(".scroll").unbind().on('click',function(event){event.preventDefault();if(this.hash!==""){var hash=this.hash;var seactionPosition=$(hash).offset().top;var headerHeight=parseInt($('.onepage').css('height'),10);$('body').scrollspy({target:".navbar",offset:headerHeight+2});var scrollTopPosition=seactionPosition-(headerHeight);$('html, body').animate({scrollTop:scrollTopPosition},800,function(){});}});$('body').scrollspy({target:".navbar",offset:headerHeight+2});}
var handleResizeElement=function(){var HeaderHeight=$('.header').height();$('.header').css('height',HeaderHeight);}
var dzTheme=function(){'use strict';var loadingImage='<img src="images/loading.gif">';jQuery('.dzload').each(function(){var dzsrc=siteUrl+$(this).attr('dzsrc');jQuery(this).hide(function(){jQuery(this).load(dzsrc,function(){jQuery(this).fadeIn('slow');});})});if(screenWidth<991){var logoData=jQuery('<div>').append($('.mo-left .logo-header').clone()).html();jQuery('.mo-left .header-nav').prepend(logoData);jQuery('.mo-left .header-nav .logo-header > a > img').attr('src','images/logo.png');jQuery('.mo-left.lw .header-nav .logo-header > a > img').attr('src','images/logo-white.png');}}
var scrollTop=function(){'use strict';var scrollTop=jQuery("button.scroltop");scrollTop.on('click',function(){jQuery("html, body").animate({scrollTop:0},1000);return false;})
jQuery(window).bind("scroll",function(){var scroll=jQuery(window).scrollTop();if(scroll>900){jQuery("button.scroltop").fadeIn(1000);}else{jQuery("button.scroltop").fadeOut(1000);}});}
var handleAccordian=function(){jQuery('#accordion').on('hidden.bs.collapse',function(e){jQuery(e.target).prev('.panel-heading').find("i.indicator").toggleClass('glyphicon-minus glyphicon-plus');});jQuery('#accordion').on('shown.bs.collapse',function(e){jQuery(e.target).prev('.panel-heading').find("i.indicator").toggleClass('glyphicon-minus glyphicon-plus');});}
var handlePlaceholder=function(){jQuery.support.placeholder=('placeholder'in document.createElement('input'));if(!jQuery.support.placeholder){jQuery("[placeholder]").focus(function(){if(jQuery(this).val()==jQuery(this).attr("placeholder"))jQuery(this).val("");}).blur(function(){if(jQuery(this).val()=="")jQuery(this).val(jQuery(this).attr("placeholder"));}).blur();jQuery("[placeholder]").parents("form").submit(function(){jQuery(this).find('[placeholder]').each(function(){if(jQuery(this).val()==jQuery(this).attr("placeholder")){jQuery(this).val("");}});});}}
var equalHeight=function(container){if(jQuery(container).length==0){return false}var currentTallest=0,currentRowStart=0,rowDivs=new Array(),$el,topPosition=0;$(container).each(function(){$el=$(this);$($el).height('auto')
topPostion=$el.position().top;if(currentRowStart!=topPostion){for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}rowDivs.length=0;currentRowStart=topPostion;currentTallest=$el.height();rowDivs.push($el);}else{rowDivs.push($el);currentTallest=(currentTallest<$el.height())?($el.height()):(currentTallest);}for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}});}
var footerAlign=function(){'use strict';jQuery('.site-footer').css('display','block');jQuery('.site-footer').css('height','auto');var footerHeight=jQuery('.site-footer').outerHeight();jQuery('.footer-fixed > .page-wraper').css('padding-bottom',footerHeight);jQuery('.site-footer').css('height',footerHeight);}
var fileInput=function(){'use strict';jQuery(document).on('change','.btn-file :file',function(){var input=jQuery(this);var numFiles=input.get(0).files?input.get(0).files.length:1;var label=input.val().replace(/\\/g,'/').replace(/.*\//,'');input.trigger('fileselect',[numFiles,label]);});jQuery('.btn-file :file').on('fileselect',function(event,numFiles,label){input=jQuery(this).parents('.input-group').find(':text');var log=numFiles>10?numFiles+' files selected':label;if(input.length){input.val(log);}else{if(log)alert(log);}});}
var headerFix=function(){'use strict';jQuery(window).bind('scroll',function(){if(jQuery('.sticky-header').length){var menu=jQuery('.sticky-header');if($(window).scrollTop()>menu.offset().top){menu.addClass('is-fixed');}else{menu.removeClass('is-fixed');}}addActive();});}
var masonryBox=function(){'use strict';if(jQuery('#masonry, .masonry').length){var self=$("#masonry, .masonry");if(jQuery('.card-container').length){self.imagesLoaded(function(){self.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});}}if(jQuery('.filters').length){jQuery(".filters").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");self.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}}
var handleMasonryFilter=function(){'use strict';if(jQuery('#masonry1').length){var masonry1=$("#masonry1");masonry1.imagesLoaded(function(){masonry1.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters1").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry1.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry2').length){var masonry2=$("#masonry2");masonry2.imagesLoaded(function(){masonry2.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters2").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry2.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry3').length){var masonry3=$("#masonry3");masonry3.imagesLoaded(function(){masonry3.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters3").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry3.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry4').length){var masonry4=$("#masonry4");masonry4.imagesLoaded(function(){masonry4.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters4").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry4.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry5').length){var masonry5=$("#masonry5");masonry5.imagesLoaded(function(){masonry5.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters5").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry5.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry6').length){var masonry6=$("#masonry6");masonry6.imagesLoaded(function(){masonry6.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters6").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry6.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry7').length){var masonry7=$("#masonry7");masonry7.imagesLoaded(function(){masonry7.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters7").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry7.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry8').length){var masonry8=$("#masonry8");masonry8.imagesLoaded(function(){masonry8.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters8").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry8.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry9').length){var masonry9=$("#masonry9");masonry9.imagesLoaded(function(){masonry9.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters9").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry9.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry10').length){var masonry10=$("#masonry10");masonry10.imagesLoaded(function(){masonry10.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters10").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry10.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry11').length){var masonry11=$("#masonry11");masonry11.imagesLoaded(function(){masonry11.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters11").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry11.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry12').length){var masonry12=$("#masonry12");masonry12.imagesLoaded(function(){masonry12.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters12").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry12.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry13').length){var masonry13=$("#masonry13");masonry13.imagesLoaded(function(){masonry13.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters13").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry13.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry14').length){var masonry14=$("#masonry14");masonry14.imagesLoaded(function(){masonry14.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters14").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry14.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry15').length){var masonry15=$("#masonry15");masonry15.imagesLoaded(function(){masonry15.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters15").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry15.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry16').length){var masonry16=$("#masonry16");masonry16.imagesLoaded(function(){masonry16.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters16").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry16.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry17').length){var masonry17=$("#masonry17");masonry17.imagesLoaded(function(){masonry17.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters17").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry17.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}if(jQuery('#masonry18').length){var masonry18=$("#masonry18");masonry18.imagesLoaded(function(){masonry18.masonry({gutterWidth:15,isAnimated:true,itemSelector:".card-container"});});jQuery(".filters18").on('click','li',function(e){e.preventDefault();var filter=$(this).attr("data-filter");masonry18.masonryFilter({filter:function(){if(!filter)return true;return $(this).hasClass(filter);}});});}}
var setDivHeight=function(){'use strict';var allHeights=[];jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function(e){allHeights.push(jQuery(this).height());})
jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function(e){var maxHeight=Math.max.apply(Math,allHeights);jQuery(this).css('height',maxHeight);})
allHeights=[];if(screenWidth<991){jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function(e){jQuery(this).css('height','');})}}
var counter=function(){if(jQuery('.counter').length){jQuery('.counter').counterUp({delay:10,time:3000});}}
var handleVideo=function(){jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');}
var handleFilterMasonary=function(){if(jQuery('#image-gallery-mix').length){jQuery('.gallery-filter').find('li').each(function(){$(this).addClass('filter');});jQuery('#image-gallery-mix').mixItUp();};if(jQuery('.gallery-filter.masonary').length){jQuery('.gallery-filter.masonary').on('click','span',function(){var selector=$(this).parent().attr('data-filter');jQuery('.gallery-filter.masonary span').parent().removeClass('active');jQuery(this).parent().addClass('active');jQuery('#image-gallery-isotope').isotope({filter:selector});return false;});}}
var handleBootstrapSelect=function(){if(jQuery('select').length){jQuery('select').selectpicker();}}
var handleBootstrapTouchSpin=function(){jQuery("input[name='demo_vertical2']").TouchSpin({verticalbuttons:true,verticalupclass:'ti-plus',verticaldownclass:'ti-minus'});}
var handleBannerResize=function(){$(".full-height").css("height",$(window).height());}
var handleCountDown=function(WebsiteLaunchDate){if($(".countdown").length){$('.countdown').countdown({date:WebsiteLaunchDate+' 23:5'},function(){$('.countdown').text('we are live');});}}
var handleCustomScroll=function(){if($(".content-scroll").length){$(".content-scroll").mCustomScrollbar({setWidth:false,setHeight:false,axis:"y"});}}
var wow_animation=function(){if($('.wow').length>0){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:50,mobile:false});wow.init();}}
var handleSideBarMenu=function(){$('.openbtn').on('click',function(e){e.preventDefault();if($('#mySidenav').length>0){document.getElementById("mySidenav").style.left="0";}if($('#mySidenav1').length>0){document.getElementById("mySidenav1").style.right="0";}})
$('.closebtn').on('click',function(e){e.preventDefault();if($('#mySidenav').length>0){document.getElementById("mySidenav").style.left="-300px";}if($('#mySidenav1').length>0){document.getElementById("mySidenav1").style.right="-820px";}})}
var priceslider=function(){if($(".price-slide, .price-slide-2").length>0){$("#slider-range,#slider-range-2").slider({range:true,min:300,max:4000,values:[0,5000],slide:function(event,ui){var min=ui.values[0],max=ui.values[1];$('#'+this.id).prev().val("$"+min+" - $"+max);}});}}
var handleBGElements=function(){if(screenWidth>1023){if(jQuery('.bgeffect').length){var s=skrollr.init({edgeStrategy:'set',easing:{WTF:Math.random,inverted:function(p){return 1-p;}}});}}}
var boxHover=function(){jQuery('.box-hover').on('mouseenter',function(){jQuery('.box-hover').removeClass('active');jQuery(this).addClass('active');})}
var reposition=function(){'use strict';var modal=jQuery(this),dialog=modal.find('.modal-dialog');modal.css('display','block');dialog.css("margin-top",Math.max(0,(jQuery(window).height()-dialog.height())/2));}
var handelResize=function(){jQuery(window).on('resize',function(){jQuery('.modal:visible').each(reposition);equalheight('.equal-wraper .equal-col');footerAlign();});}
var handleSupport=function(){var support='<a href="https://themeforest.net/item/winkit-winners-development-kit/21905564" target="_blank" class="bt-buy-now theme-btn"><i class="ti-shopping-cart"></i><span>Buy Now</span></a><a href="https://w3itexperts.ticksy.com" target="_blank" class="bt-support-now theme-btn"><i class="ti-headphone-alt"></i><span>Support</span></a><!-- Go to www.addthis.com/dashboard to customize your tools --><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b221c5e31b4e54b"></script>';jQuery('body').append(support);}
var WebsiteLaunchDate=new Date();monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth()+1);WebsiteLaunchDate=WebsiteLaunchDate.getDate()+" "+monthNames[WebsiteLaunchDate.getMonth()]+" "+WebsiteLaunchDate.getFullYear();return{init:function(){boxHover();wow_animation();priceslider();onePageLayout();dzTheme();handleResizeElement();homeSearch();handleAccordian();scrollTop();handlePlaceholder();footerAlign();fileInput();headerFix();setDivHeight();handleVideo();handleFilterMasonary();handleCountDown(WebsiteLaunchDate);handleCustomScroll();handleSideBarMenu();cartButton();handleBannerResize();handelResize();jQuery('.modal').on('show.bs.modal',reposition);},handleMasonryFilter:function(){handleMasonryFilter();},load:function(){handleBGElements();handleBootstrapSelect();handleBootstrapTouchSpin();equalHeight('.equal-wraper .equal-col');equalHeight('.equal-wraper2 .equal-col');equalHeight('.equal-wraper3 .equal-col');equalHeight('.equal-wraper4 .equal-col');counter();masonryBox();}}}();jQuery(document).ready(function(){'use strict';Winkit.init();var screenWidth=jQuery(window).width();if(screenWidth<=991){jQuery('.navbar-nav > li > a, .sub-menu > li > a').on('click',function(e){if(jQuery(this).parent().hasClass('open')){jQuery(this).parent().removeClass('open');}else{jQuery(this).parent().parent().find('li').removeClass('open');jQuery(this).parent().addClass('open');}});}jQuery('.navicon').on('click',function(){$(this).toggleClass('open');});});jQuery(window).load(function(){'use strict';Winkit.load();setTimeout(function(){jQuery('#loading-area').remove();},0);});
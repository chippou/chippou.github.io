
$(document).ready(function () {
    initRouter();
    initPortfoliofilter();
    $("#nav li").click(function (event) {
        var targetActiveSectionDiv = $(this).children().attr('href').substr(1);
        var currentActiveSectionDiv = $("#nav li.active").children().attr('href').substr(1);
        if (targetActiveSectionDiv === currentActiveSectionDiv) return;
        $("#nav li").removeClass("active");
        $(this).addClass("active");
        handleAnimationWhenMenuClickOrPageLoaded(targetActiveSectionDiv);
    });

    $(".btn-send").click(function (event) {
        event.preventDefault();
        var subject = $("#form_subject").val();
        var message = $("#form_message").val();
        window.location.href = `mailto:dat.dang2412@gmail.com?subject=${subject}&body=${message}`;
    });

    $(".clients.owl-carousel").owlCarousel({ nav: !0, dots: !1, items: 1, loop: !0, navText: !1, margin: 10, responsive: { 0: { items: "1" }, 768: { items: "2", }, 1200: { items: "4" } } });
    $(".lmpixels-arrows-nav div").click(function () {
        var activeItem = $('.site-main-menu li.active');
        if ($(this).hasClass("lmpixels-arrow-left")) {
            activeItem.prev("li").children("a").click();
            if (activeItem.is(':first-child')) {
                $('.site-main-menu li:last-child').children("a").click()
            }
        } else {
            activeItem.next("li").children("a").click();
            if (activeItem.is(':last-child')) {
                $('.site-main-menu li:first-child').children("a").click()
            }
        }
    });

    $(".ajax-page-load").click(function (e) {
        e.preventDefault();
        var articleURL = $(this).attr("href");
        if ($(this).hasClass("disabled")) {
            window.open(articleURL, '_blank');
            return;
        }
        
        loadAndShowArticleFromURL(articleURL);
        $(this).parent().parent().addClass("active");
        history.pushState("", "Dat dang profile", "/#portfolio?project=" + $(this).attr("projectId"));
    });

    $(document).on("click", "#portfolio-page-close-button", function (e) {
        $("#page-ajax-loaded").addClass("fadeOutLeft closed");
        setTimeout(function () {
            $("#page-ajax-loaded").removeClass("fadeOutLeft").css("display", "none");
            $("figure").removeClass("active");
        }, 500);
    });

    $(document).on("click", ".nav-item.portfolio-page-prev-next a", function (e) {
        e.preventDefault();
        var currentActiveArticle = $("figure.active");
        currentActiveArticle.removeClass("active");
        if ($(this).attr('rel') === 'previous') {
            var articleAnchorLink = currentActiveArticle.prev("figure").children().children("a");
            handleArticleNavigationButtonClick(articleAnchorLink, currentActiveArticle, "previous");
        } else {
            var articleAnchorLink = currentActiveArticle.next("figure").children().children("a");
            handleArticleNavigationButtonClick(articleAnchorLink, currentActiveArticle, "next");
        }
    });
});

function handleArticleNavigationButtonClick(articleAnchorLink, currentActiveArticle, direction) {
    if (direction === "previous") {
        if (!articleAnchorLink.hasClass("disabled")) {
            articleAnchorLink.click();
            currentActiveArticle.prev("figure").addClass("active");
        } else {
            currentActiveArticle.prev("figure").prev("figure").children().children("a").click();
            currentActiveArticle.prev("figure").prev("figure").addClass("active");
        }
        if (currentActiveArticle.is(':first-child')) {
            $('figure:last-child').children().children("a").click();
            $('figure:last-child').addClass("active");
        }
    } else {
        if (!articleAnchorLink.hasClass("disabled")) {
            articleAnchorLink.click();
            currentActiveArticle.next("figure").addClass("active");
        } else {
            currentActiveArticle.next("figure").next("figure").children().children("a").click();
            currentActiveArticle.next("figure").next("figure").addClass("active");
        }
        if (currentActiveArticle.is(':last-child')) {
            $('figure:first-child').children().children("a").click();
            $('figure:first-child').addClass("active");
        }
    }
}

function initRouter() {
    var currentLocation = window.location.href.split("#")[1];
    var projectId = "";
    if (typeof currentLocation === 'undefined' || !currentLocation) currentLocation = "about-me";
    if (currentLocation.includes("?")) {
        [currentLocation, projectParam] = currentLocation.split("?");
        projectId = projectParam.split("=")[1];
    }
    $("#nav li").each(function () {
        var menuTargetSectionName = $(this).children().attr('href').substr(1);
        $(this).removeClass("active");
        if (menuTargetSectionName === currentLocation) {
            $(this).addClass("active");
        }
    });

    handleAnimationWhenMenuClickOrPageLoaded(currentLocation);

    if (projectId.length > 0) {
        setTimeout(function () {
            $(`.ajax-page-load[projectId=${projectId}]`).click();
        }, 1000);
    }

}

function handleAnimationWhenMenuClickOrPageLoaded(targetActiveSectionDiv) {
    var animationlist = [
        "pt-page-moveFromRight pt-page-ontop",
        "pt-page-moveFromLeft pt-page-ontop",
        "pt-page-moveFromBottom pt-page-ontop",
        "pt-page-moveFromTop pt-page-ontop",
        "pt-page-moveFromRightFade",
        "pt-page-moveFromLeftFade",
        "pt-page-moveFromBottomFade",
        "pt-page-moveFromTopFade",
        "pt-page-moveFromRight",
        "pt-page-moveFromLeft",
        "pt-page-moveFromBottom",
        "pt-page-scaleUpDown pt-page-delay300",
        "pt-page-scaleUp pt-page-delay300",
        "pt-page-flipInRight pt-page-delay500",
        "pt-page-flipInBottom pt-page-delay500",
        "pt-page-flipInTop pt-page-delay500",
        "pt-page-rotatePullRight pt-page-delay180",
        "pt-page-rotatePullLeft pt-page-delay180"
    ];
    var randomAnimationNumber = Math.floor(Math.random() * Math.floor(animationlist.length));
    $("section.pt-page").each(function () {
        $(this).removeClass("pt-page-current pt-page-relative");
        var sectionDataAttrID = $(this).attr("data-id");
        if (sectionDataAttrID === targetActiveSectionDiv) {
            $(".pt-page").scrollTop(0);
            $(this).addClass("pt-page-current pt-page-relative");
            $(this).addClass(animationlist[randomAnimationNumber]);
            var _self = $(this);
            setTimeout(function () {
                _self.removeClass(animationlist[randomAnimationNumber]);
            }, 1500);
        }
    });
}

function initPortfoliofilter() {
    var el = $('.portfolio-grid');
    var shuffleInstance = new Shuffle(el, {
        itemSelector: 'figure'
    });

    $("figure").first().css("transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)");
    $(".filter").click(function (e) {
        shuffleInstance.update();
        e.preventDefault();
        $(".filter").parent().removeClass("active");
        $(this).parent().addClass("active");
        categoryName = $(this).attr("data-group");
        shuffleInstance.filter(categoryName);
    });
}

function loadAndShowArticleFromURL(URL) {
    $.get(URL, function (data) {
        $("#page-ajax-loaded").html(data);
        $("#page-ajax-loaded").removeClass("closed").css("display", "block");
        $('.portfolio-page-wrapper .portfolio-grid').each(function () { $(this).magnificPopup({ delegate: 'a.gallery-lightbox', type: 'image', gallery: { enabled: !0 } }) });
    });
}

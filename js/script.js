jQuery(document).ready(function(jQuery) {
    /* Fix for IE */
    if (jQuery.browser.msie && jQuery.browser.version >= 9) {
        jQuery.support.noCloneEvent = true;
    }
    /* End fix for IE */
    /* Top Cart */
    jQuery('.top-cart').click(function() {
        jQuery(this).toggleClass('active');
        jQuery('#topCartContent').slideToggle(500).toggleClass('active')
    })
    /* Top Cart */
    /* More Views Slider */
    if (jQuery('#more-views-slider').length) {
        jQuery('#more-views-slider').iosSlider({
            responsiveSlideWidth: true,
            snapToChildren: true,
            desktopClickDrag: true,
            infiniteSlider: true,
            navSlideSelector: '.sliderNavi .naviItem',
            navNextSelector: '.more-views .next',
            navPrevSelector: '.more-views .prev'
        });
    }
    /* More Views Slider */
    /* More Views

    Modified by Lee to show all

    */
    left_title_indent = jQuery('.more-views-title h2').outerWidth() / 2;
    holder_height = jQuery('.more-views').height();
    jQuery('.more-views-title h2').css('margin-left', '-' + left_title_indent + 'px');
    //jQuery('.more-views').css({'height': '60px'});
    jQuery('.more-views-holder').css('left', '-100000px');
    jQuery('.more-views-title h2').on('click', function() {
        if (!jQuery(this).parent().hasClass('active')) {
            jQuery(this).parent().addClass('active');
            jQuery(this).animate({
                marginLeft: 0,
                left: 0
            }, 500, 'easeInQuart');
            jQuery('.more-views-holder').fadeOut(1);
            setTimeout(function() {
                jQuery('.more-views').animate({
                    height: holder_height
                }, 200, 'linear', function() {
                    jQuery('.more-views').addClass('visible');
                });
                jQuery('.more-views-holder').css({
                    'left': '0'
                }).fadeIn(200);
            }, 500);
        } else if (jQuery(this).parent().hasClass('active')) {
            jQuery(this).animate({
                marginLeft: '-' + left_title_indent + 'px',
                left: '50%'
            }, 500, 'easeInQuart');
            jQuery('.more-views-holder').fadeOut(200, function() {
                jQuery(this).css({
                    'left': '-100000px'
                });
            });
            jQuery('.more-views').removeClass('visible').animate({
                height: '60px'
            }, 200, 'linear');
            jQuery(this).parent().removeClass('active');
        }
    });
    /* Related Block Slider */
    if (jQuery('#block-related-slider').length) {
        jQuery('#block-related-slider').iosSlider({
            responsiveSlideWidth: true,
            snapToChildren: true,
            desktopClickDrag: true,
            infiniteSlider: true,
            navSlideSelector: '.sliderNavi .naviItem',
            navNextSelector: '.block-related .next',
            navPrevSelector: '.block-related .prev'
        });
    }
    /* Related Block Slider */
    /* Wishlist Block Slider */
    if (jQuery('#wishlist-slider').length) {
        jQuery('#wishlist-slider').elastislide({
            imageW: 217,
            margin: 0,
            current: 0,
            border: 0,
            minItems: 1,
            easing: 'easeInBack'
        });
    }
    /* Wishlist Block Slider */
    /* Layered Navigation Accorion */
    if (jQuery('#layered_navigation_accordion').length) {
        jQuery('.filter-label').each(function() {
            jQuery(this).toggle(function() {
                jQuery(this).addClass('closed').next().slideToggle(200);
            }, function() {
                jQuery(this).removeClass('closed').next().slideToggle(200);
            })
        });
    }
    /* Layered Navigation Accorion */
    /* Product Collateral Accordion */
    if (jQuery('#collateral-accordion').length) {
        jQuery('#collateral-accordion > div.box-collateral').hide();
        jQuery('#collateral-accordion > h2').click(function() {
            var nextDiv = jQuery(this).next();
            var visibleSiblings = nextDiv.siblings('div:visible');
            if (visibleSiblings.length) {
                visibleSiblings.slideUp(300, function() {
                    nextDiv.slideToggle(500);
                });
            } else {
                nextDiv.slideToggle(300);
            }
        });
    }
    /* Product Collateral Accordion */
    /* My Cart Accordion */
    if (jQuery('#cart-accordion').length) {
        jQuery('#cart-accordion > div.accordion-content').hide();
        jQuery('#cart-accordion > h3.accordion-title').wrapInner('<span/>').click(function() {
            var accordion_title_check_flag = false;
            if (jQuery(this).hasClass('active')) {
                accordion_title_check_flag = true;
            }
            jQuery('#cart-accordion > h3.accordion-title').removeClass('active');
            if (accordion_title_check_flag == false) {
                jQuery(this).toggleClass('active');
            }
            var nextDiv = jQuery(this).next();
            var visibleSiblings = nextDiv.siblings('div:visible');
            if (visibleSiblings.length) {
                visibleSiblings.slideUp(300, function() {
                    nextDiv.slideToggle(500);
                });
            } else {
                nextDiv.slideToggle(300);
            }
        });
    }
    /* My Cart Accordion */
    /* Coin Slider */
    /* Fancybox */
    if (jQuery.fn.fancybox) {
        jQuery('.fancybox').fancybox();
    }
    /* Fancybox */
    /* Zoom */
    if (jQuery('#zoom').length) {
        jQuery('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
    }
    /* Zoom */
    /* Wishlink Top Link */
    function wishlist_mob() {
        if (jQuery('#header .links li a.top-link-wishlist').length) {
            wishlist_link = jQuery('#header .links li a.top-link-wishlist');
            wishlist_start_index = wishlist_link.html().indexOf('(');
            if (wishlist_start_index != -1) {
                wishlist_link.html(wishlist_link.html().slice(0, wishlist_start_index));
            }
        }
    }
    /* Responsive */
    var responsiveflag = false;
    var topSelectFlag = false;
    var menu_type = jQuery('#nav').attr('class');

    function mobile_menu(mode) {
        switch (mode) {
            case 'animate':
                if (!jQuery('.nav-container').hasClass('mobile')) {
                    jQuery(".nav-container").addClass('mobile');
                    jQuery('.nav-container > ul').slideUp('fast');
                    jQuery('.menu-button').removeClass('active');
                    jQuery('.menu-button').on('click', function() {
                        jQuery(this).toggleClass('active');
                        jQuery('.nav-container > ul').slideToggle('medium');
                    });
                    jQuery('.nav-container > ul a').each(function() {
                        if (jQuery(this).next('ul').length) {
                            jQuery(this).before('<span class="menu-item-button" />')
                            jQuery(this).next('ul').slideUp('fast');
                            jQuery(this).prev('.menu-item-button').on('click', function() {
                                jQuery(this).toggleClass('active');
                                jQuery(this).nextAll('ul').slideToggle('medium');
                            });
                        }
                    });
                }
                break;
            default:
                jQuery(".nav-container").removeClass('mobile');
                jQuery('.menu-button').off();
                jQuery('.nav-container > ul').slideDown('fast');
                jQuery('.nav-container .menu-item-button').each(function() {
                    jQuery(this).nextAll('ul').slideDown('fast');
                    jQuery(this).remove();
                });
        }
    }

    function accordion(status) {
        if (status == 'enable') {
            jQuery('.footer-columns-wrapper h3, aside.sidebar header').on('click', function() {
                jQuery(this).toggleClass("active").parent().find(".custom-footer-content, .block-content").slideToggle('medium');
            })
            jQuery('.footer-columns-wrapper, aside.sidebar').addClass('accordion').find(".custom-footer-content, .block-content").slideUp('fast');
        } else {
            jQuery('.footer-columns-wrapper h3, aside.sidebar header').removeClass("active").off().parent().find(".custom-footer-content, .block-content").slideDown('fast');
            jQuery('.footer-columns-wrapper, aside.sidebar').removeClass('accordion');
        }
    }

    function toDo() {
        if (jQuery(document.body).width() < 767 && responsiveflag == false) {
            accordion('enable');
            /* Top Menu Select */
            if (topSelectFlag == false) {
                topSelectFlag = true;
            }
            /* //Top Menu Select */
            responsiveflag = true;
        } else if (jQuery(document.body).width() > 767) {
            accordion('disable');
            responsiveflag = false;
        }
    }

    function replacingClass() {
        if (jQuery(document.body).width() < 480) { //Mobile
            wishlist_mob();
            mobile_menu('animate');
        }
        if (jQuery(document.body).width() > 479 && jQuery(document.body).width() < 768) { //iPhone
            wishlist_mob();
            mobile_menu('animate');
        } else if (jQuery(document.body).width() > 767) { //Desktop
            mobile_menu('reset');
        }
        if (jQuery(document.body).width() > 767 && jQuery(document.body).width() < 977) { //Tablet
            mobile_menu('reset');
        }
        if (jQuery(document.body).width() > 1279) { //Extra Large
            mobile_menu('reset');
        }
    }
    replacingClass();
    toDo();
    //menuHeight2();
    jQuery(window).resize(function() {
        toDo();
        replacingClass();
    });
    /* Responsive */
    /* Top Menu */
    function menuHeight2() {
        var menu_min_height = 0;
        jQuery('#nav li.tech').css('height', 'auto');
        jQuery('#nav li.tech').each(function() {
            if (jQuery(this).height() > menu_min_height) {
                menu_min_height = jQuery(this).height();
            }
        });
        jQuery('#nav li.tech').each(function() {
            jQuery(this).css('height', menu_min_height + 'px');
        });
    }
    /* Top Selects */
    function option_class_add(items, is_selector) {
        jQuery(items).each(function() {
            if (is_selector) {
                jQuery(this).removeAttr('class');
                jQuery(this).addClass('sbSelector');
            }
            stripped_string = jQuery(this).html().replace(/(<([^>]+)>)/ig, "");
            RegEx = /\s/g;
            stripped_string = stripped_string.replace(RegEx, "");
            jQuery(this).addClass(stripped_string.toLowerCase());
            if (is_selector) {
                tags_add();
            }
        });
    }
    option_class_add('.form-language .sbOptions li a, .form-language .sbSelector, .form-currency .sbOptions li a, .form-currency .sbSelector', false);
    jQuery('.form-language .sbOptions li a, .form-currency .sbOptions li a').on('click', function() {
        option_class_add('.form-language .sbSelector, .form-currency .sbSelector', true);
    });

    function tags_add() {
        jQuery('.form-language .sbSelector, .form-currency .sbSelector').each(function() {
            if (!jQuery(this).find('span.text').length) {
                jQuery(this).wrapInner('<span class="text" />').append('<span />').find('span:last').wrapInner('<span />');
            }
        });
    }
    tags_add();
    /* //Top Selects */
    /* Cart Accordion Title Divider */
    jQuery("#cart-accordion .accordion-title").append('<div class="title-divider"><span>&nbsp;</span></div>');
    /* Mobile Devices */
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
        /* Menu */
        if (jQuery("#nav.nav-wide").length) {
            var wideMenu = true;
        } else {
            var wideMenu = false;
        }
        jQuery(".nav-container:not('.mobile') #nav.nav-wide > li, .nav-container:not('.mobile') #nav:not('.nav-wide') li").on({
            click: function() {
                if (!jQuery(this).hasClass('touched') && jQuery(this).children('ul').length) {
                    if (wideMenu == true) {
                        jQuery('#nav > li').removeClass('touched');
                    }
                    jQuery(this).addClass('touched');
                    clearTouch(jQuery(this));
                    return false;
                }
            }
        });
        /* Clear Touch Function */
        function clearTouch(handlerObject) {
            jQuery('body').on('click', function() {
                handlerObject.removeClass('touched closed');
                if (handlerObject.parent().attr('id') == 'categories-accordion') {
                    handlerObject.children('ul').slideToggle(200);
                }
                jQuery('body').off();
            });
            handlerObject.click(function(event) {
                event.stopPropagation();
            });
            if (wideMenu == false) {
                handlerObject.parent().click(function() {
                    handlerObject.removeClass('touched');
                });
                handlerObject.siblings().click(function() {
                    handlerObject.removeClass('touched');
                });
            }
        }
        var mobileDevice = true;
    } else {
        var mobileDevice = false;
    }
    /* Categories Accorion */
    if (jQuery('#categories-accordion').length) {
        jQuery('#categories-accordion li.level-top.parent ul.level0').before('<div class="btn-cat"></div>');
        if (mobileDevice == true) {
            jQuery('#categories-accordion li.level-top.parent').each(function() {
                jQuery(this).on({
                    click: function() {
                        if (!jQuery(this).hasClass('touched')) {
                            jQuery(this).addClass('touched closed').children('ul').slideToggle(200);
                            clearTouch(jQuery(this));
                            return false;
                        }
                    }
                });
            });
        } else {
            jQuery('#categories-accordion li.level-top.parent .btn-cat').each(function() {
                jQuery(this).toggle(function() {
                    jQuery(this).addClass('closed').next().slideToggle(200);
                }, function() {
                    jQuery(this).removeClass('closed').next().slideToggle(200);
                })
            });
        }
    }
    /* Categories Accorion */
});
jQuery(document).ready(function() {
    /* Title divider */
    jQuery(".page-title, aside.sidebar section header, .products-grid .product-name, .products-list .product-name, .block-related .product-name").append('<div class="title-divider"><span>&nbsp;</span></div>');
    jQuery(".catalog-product-view .box-reviews h2, .crosssell .product-name, .cart .crosssell h2, .my-wishlist .data-table .product-name").after('<div class="title-divider"><span>&nbsp;</span></div>');
    /* Cart Increase/Decrease Buttons */
    jQuery('.cart .qty, .my-wishlist .qty').each(function() {
        var thisQty = jQuery(this);
        var decreaseButton = thisQty.prev();
        decreaseButton.on('click', function() {
            if (!isNaN(thisQty.attr("value")) && thisQty.attr("value") > 0) {
                var el_val = parseFloat(thisQty.attr("value")) - 1;
                thisQty.attr('value', el_val);
            }
        });
        var increaseButton = jQuery(this).next();
        increaseButton.on('click', function() {
            if (!isNaN(thisQty.attr("value"))) {
                var el_val = parseFloat(thisQty.attr("value")) + 1;
                thisQty.attr('value', el_val);
            }
        });
    });
    /* Top Menu */
    jQuery('#nav.nav-wide > li.parent').on('mouseenter mouseleave', function() {
        jQuery('.header-wrapper').toggleClass('menu-over');
    });
    /* OPC Progress Title Block */
    function sidebar_titles() {
        jQuery("section.block-progress header h2").after('<div class="title-divider"><span>&nbsp;</span></div>');
    }

    function title_check() {
        setTimeout(function() {
            if (!jQuery('.opc-block-progress header div').length) {
                sidebar_titles();
            }
            title_check();
        }, 100);
    }
    if (jQuery('.opc-block-progress').length) {
        title_check();
    }
    /* Home Tabs */
    jQuery('.home-tabs ul.tabs').delegate('li:not(.current)', 'click', function() {
        jQuery(this).addClass('current').siblings().removeClass('current').parents('div.home-tabs').find('div.tabs-box').eq(jQuery(this).index()).fadeIn(150).siblings('div.tabs-box').hide();
    });
    var maxHeightName = 0;
    jQuery('.brochure .right p').each(function() {
        var currheightName = jQuery(this).height();
        if (currheightName > maxHeightName) {
            maxHeightName = currheightName;
        }
    });
    //make product Name the same height
    jQuery('.brochure .right p').each(function() {
        jQuery(this).css({
            'height': maxHeightName
        });
    });
    jQuery(function() {
        var url = window.location.pathname, // in real app this would have to be replaced with window.location.pathname
            urlRegExp = new RegExp(url.replace(/\/$/, '')); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        jQuery('#layered_navigation_accordion .categoryList li a').each(function() {
            var clicked = this;
            // and test its href against the url pathname regexp
            if (urlRegExp.test(this.href)) {
                jQuery(this).addClass('active');
                jQuery(clicked).css("color", "#231f20");
                //jQuery(clicked + "ol li a").css("color","#918f8f");
            }
        });
    });
});
jQuery(document).ready(function($) {
    if ($(window).width() < 768) {
        $('.fancybox-new').fancybox({
            autoSize: false,
            fitToView: true,
            closeClick: false,
            openEffect: 'fade',
            closeEffect: 'fade',
            prevEffect: 'fade',
            nextEffect: 'fade',
            scrolling: 'no',
            height: '300px',
            maxHeight: '300px',
            autoWidth: true,
        });
    } else {
        $('.fancybox-new').fancybox({
            autoSize: false,
            fitToView: false,
            closeClick: false,
            openEffect: 'fade',
            closeEffect: 'fade',
            prevEffect: 'fade',
            nextEffect: 'fade',
            scrolling: 'no',
            height: '300px',
            maxHeight: '300px',
            autoWidth: true,
        });
    }
});
jQuery(document).ready(function($) {
    $('.fancybox-awac').fancybox({
        autoSize: true,
        fitToView: true,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        scrolling: 'no'
    });
});
jQuery(document).ready(function($) {
    // $('.home-doors-wrapper').slick({
    //  fade: true,
    //  arrows: false
    // });
    // $(".hd-menu li a").click(function(e){
    //        e.preventDefault();
    //        slideIndex = $(this).parent().index();
    //        $('.home-doors-wrapper').slick('slickGoTo', parseInt(slideIndex));
    //        $('.hd-menu li a').each(function(){
    //          $(this).removeClass('current-slide');
    //        });
    //        $(this).addClass('current-slide');
    //    });
    $('.featured-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        infinate: false,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        }, {
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false
            }
        }]
    });
    $('.dot1 button').html('Internal Doors');
    $('.dot2 button').html('Front Doors');
    $('.dot3 button').html('Garage Doors');
    /*$(".fs-menu li a").click(function(e){
        e.preventDefault();
        slideIndex = $(this).parent().index();
        $('.featured-slider').slick('slickGoTo', parseInt(slideIndex));
        $('.fs-menu li a').each(function(){
            $(this).removeClass('current-slide');
        });
        $(this).addClass('current-slide');
    });*/
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        }, {
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }]
    });
    $('.home-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });
    $('.wood-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });
    $('.bespoke-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });
    $('.slide-portfolio').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 1000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });
    var maxHeightName = 0;
    $('.ns-slide .text-holder h3').each(function() {
        var currheightName = $(this).height();
        if (currheightName > maxHeightName) {
            maxHeightName = currheightName;
        }
    });
    $('.ns-slide .text-holder h3').each(function() {
        $(this).css({
            'height': maxHeightName
        });
    });
    $('.home-any').viewportChecker({
        classToAdd: 'sa-visible',
        offset: 300
    });
    $('.nav-1-4 > a').attr("onclick", "return false");
    //scroll animate
    if ($(window).width() > 480) {
        $('.home-doors .scroll-animate').viewportChecker({
            classToAdd: 'sa-visible',
            offset: 400
        });
        $('.home-any .scroll-animate').viewportChecker({
            classToAdd: 'sa-visible',
            offset: 100
        });
        $('.home-workshop .scroll-animate').viewportChecker({
            classToAdd: 'sa-visible',
            offset: 100
        });
        $('.home-pre-hung .scroll-animate').viewportChecker({
            classToAdd: 'sa-visible',
            offset: 400
        });
    }
    $('.prehung.scroll-animate').viewportChecker({
        classToAdd: 'sa-visible'
    });
    $(window).scroll(function() {
        var $this = $(this);
        if ($this.scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    //anchor navigation
    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top - 0
        }, 'slow');
    }
    $('#animate1').click(function() {
        goToByScroll($(this).attr('href'));
        return false;
    });
    $('.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: $('body').offset().top - 0
        }, 'slow');
    });
});
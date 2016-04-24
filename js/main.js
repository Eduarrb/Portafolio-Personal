var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 8000,
  pause: "false"
});

/*Scroll to*/
jQuery(function( $ ){
      /**
       * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
       * @see http://demos.flesler.com/jquery/scrollTo/
       * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.localScroll.
       */
      
      // The default axis is 'y', but in this demo, I want to scroll both
      // You can modify any default like this
      $.localScroll.defaults.axis = 'xy';
      
      /**
       * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
       * also affect the >> and << links. I want every link in the page to scroll.
       */
      $.localScroll({
        target: '#body', // could be a selector or a jQuery object too.
        queue:true,
        duration:1500,
        hash:true,
        onBefore:function( e, anchor, $target ){
          // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
          // The 'this' contains the scrolled element (#content)
        }
      });
    });

/*Tooltip*/


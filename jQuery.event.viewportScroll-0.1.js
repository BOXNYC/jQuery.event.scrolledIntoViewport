$.event.special.viewportScroll = {
  setup: function(options) {
    options = $.extend({
      scrollPane: document
    }, options);
    var $items = $(this),
      $scrollPane = $(options.scrollPane);
    $items.data('viewportScroll', {
	    scrollPane: options.scrollPane
    });
    $scrollPane.on('scroll.viewportScroll', function(){
      $items.each(function(){
        var $item = $(this),
		        e = $.Event('viewportScroll', {
							top: $item.offset().top - $scrollPane.scrollTop()
		        });
        $item.trigger(e);
      });
    });
    return false;
  },
  teardown: function(options) {
    console.log(this, options, $(this).data('scrolledIntoViewport'));
    var data = $(this).data('scrolledIntoViewport');
    $(data.scrollPane).off('scroll.scrolledIntoViewport');
    return false;
  }
};

$.fn.viewportScroll = function(listener){
	$(this).on('viewportScroll', listener);
};

}(jQuery));

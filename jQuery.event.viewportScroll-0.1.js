(function($){

$.event.special.viewportScroll = {
  setup: function(options) {
    options = $.extend({
      scrollPane: document
    }, options);
    var $items = $(this),
      $scrollPane = $(options.scrollPane);
    $items.data('scrolledIntoViewport', {
	    scrollPane: options.scrollPane
    });
    $scrollPane.on('scroll.scrolledIntoViewport', function(){
      $items.each(function(){
        var $item = $(this);
        $item.trigger('scrolledIntoViewport', {
	        top: $item.offset().top - $scrollPane.scrollTop()
        });
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

}(jQuery));

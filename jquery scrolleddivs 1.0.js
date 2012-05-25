(function( $ ) {
  $.fn.scrolleddivs = function(options) {
	
	var defaults = {
		selector: null
	};
	var options = $.extend({},defaults, options);
	 var pastdivs = [];
	this.each(function() {
	      var outerHeightDiv = [], sumHeight = 0;
	      var ids = [];
	      $(this).find(options.selector).each(function(){
		    sumHeight += $(this).height();
		    outerHeightDiv.push(sumHeight);
		    ids.push($(this).attr('id'));
	      });
	      var scrollTopHeight = $(this).scrollTop();
	      var outerDivHeight = $(this).height();
	     
	      for (i = 0; i<=outerHeightDiv.length; i++){
		if(scrollTopHeight < outerHeightDiv[i] && scrollTopHeight + outerDivHeight > outerHeightDiv[i]){
		  pastdivs.push(ids[i]);
		  
		}
	      }
	     
	     
	});
	 return pastdivs;

  };
})( jQuery );

var Win8Modal = (function($) {
	var onEscapeHandler = function(e) {
		if(e.keyCode === 27)
			close();
	}

	var onCoverClickHandler = function() {		
		close();
	}

	function show() {		
		$('html').toggleClass('win8modal-active');	

		var cover = $('.win8modal-cover');		
		cover.bind('click touchstart', onCoverClickHandler);

		$(document).bind('keyup', onEscapeHandler);

		return false;
	}

	function close() {
		$('html').toggleClass('win8modal-active');

		var cover = $('.win8modal-cover');		
		cover.unbind('click touchstart', onCoverClickHandler);

		$(document).unbind('keyup', onEscapeHandler);

		return false;
	}

	function install() {
		$("*[data-wm-role='open']").bind('click touchstart', show);		
		$("*[data-wm-role='close']").bind('click touchstart', close);
	}

	return {
		show: show,
		close: close,
		install: install
	}	
})(jQuery);

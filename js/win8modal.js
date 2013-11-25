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
		cover.on('click touchstart', onCoverClickHandler);

		$(document).on('keyup', onEscapeHandler);

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
		$("*[data-wm-role='open']").on('click touchstart', show);		
		$("*[data-wm-role='close']").on('click touchstart', close);
	}

	return {
		show: show,
		close: close,
		install: install
	}	
})(jQuery);

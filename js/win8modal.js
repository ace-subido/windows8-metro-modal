// var Win8Modal = (function($) {
// 	var onEscapeHandler = function(e) {
// 		if(e.keyCode === 27)
// 			close();
// 	}

// 	var onCoverClickHandler = function() {		
// 		close();
// 	}

// 	function show(e) {		
// 		$('html').toggleClass('win8modal-active');	

// 		var cover = $('.win8modal-cover');		
// 		cover.bind('click', onCoverClickHandler);

// 		$(document).bind('keyup', onEscapeHandler);
// 	}

// 	function close(e) {
// 		$('html').toggleClass('win8modal-active');

// 		var cover = $('.win8modal-cover');		
// 		cover.unbind('click', onCoverClickHandler);

// 		$(document).unbind('keyup', onEscapeHandler);
// 	}

// 	function install() {
// 		$("*[data-wm-role='open']").bind('click', show);		
// 		$("*[data-wm-role='close']").bind('click', close);
// 	}

// 	function uninstall() {
// 		$("*[data-wm-role='open']").unbind('click', show);		
// 		$("*[data-wm-role='close']").unbind('click', close);
// 	}

// 	return {
// 		show: show,
// 		close: close,
// 		install: install,
// 		uninstall: uninstall
// 	}	
// })(jQuery);


var Win8Modal = (function(){

	var container = document.documentElement,
		popup = document.querySelector('.win8modal'),
		cover = document.querySelector('.win8modal-cover');		

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {
		if(event.keyCode === 27) {
			deactivate();
		}
	}

	// Deactivate on click outside
	function onDocumentClick(event) {
		if(event.target === cover) {
			deactivate();
		}
	}

	function activate( state ) {
		document.addEventListener('keyup', onDocumentKeyUp, false);
		document.addEventListener('click', onDocumentClick, false);
		document.addEventListener('touchstart', onDocumentClick, false);

		setTimeout( function() {
			addClass(container, 'win8modal-active');
		}, 0 );
	}

	function deactivate() {
		document.removeEventListener('keyup', onDocumentKeyUp, false);
		document.removeEventListener('click', onDocumentClick, false);
		document.removeEventListener('touchstart', onDocumentClick, false);

		removeClass(container, 'win8modal-active');
	}	

	function addClass(element, name) {
		element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
	}

	function removeClass(element, name) {
		element.className = element.className.replace(name, '');
	}

	function show(selector){
		popup = document.querySelector('.win8modal');
		activate();
		return this;
	}
	function hide() {
		deactivate();
	}

	return {
		activate: activate,
		deactivate: deactivate,
		show: show,
		hide: hide
	}

})();
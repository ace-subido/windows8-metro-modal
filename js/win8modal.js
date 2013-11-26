var Win8Modal = (function() {
	var container = document.documentElement,
		popup = document.querySelector('.win8modal'),
		cover = document.querySelector('.win8modal-cover');		

	function onDocumentKeyUp( event ) {
		if(event.keyCode === 27) {
			deactivate();
		}
	}

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
Windows 8 Modal
====================

[https://ace-subido.github.com/windows8-metro-modal](https://ace-subido.github.com/windows8-metro-modal)

A small CSS/JS library to recreate the simple Windows 8 Modal. Been looking around for a CSS/JS Windows 8 Modal, could have skinned other modals just to look like this. Made this from scratch for personal purposes. 'CSS transforms' centers the modal vertically. Depends on jQuery. The CSS file doesn't include normalize or reset.

Basic Template and Usage
====================

It's pretty straightforward :)

		<link rel="stylesheet" href="css/win8modal.css" type="text/css" />
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>  
		<script src="js/win8modal.js"> </script> 

		<button type="button" data-wm-role="open">
		  Open Modal
		</button>

		<div class="win8modal">
		  <button type="button" data-wm-role="close">Close Modal</button>
		</div>     
		<div class='win8modal-cover'></div>
		<script type="text/javascript">
			Win8Modal.install();
		</script>

This opens the Modal

		Win8Modal.close()

This closes the Modal
				
		Win8Modal.show()

This installs event handlers to elements with the _data-wm-role_ attribute. Elements with the <strong>data-wm-role</strong> are binded with event handlers that open and close the modal. 

		Win8Modal.install()

		data-wm-role='open' — for buttons that open the modal
    data-wm-role='close' — for buttons that close the modal

License
====================
Apache License v2

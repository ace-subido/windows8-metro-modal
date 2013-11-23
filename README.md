Windows 8 Modal
====================

[https://ace-subido.github.com/windows8-metro-modal](https://ace-subido.github.com/windows8-metro-modal)

A small CSS/JS library to recreate the simple Windows 8 Modal. Been looking around for a CSS/JS Windows 8 Modal, could have skinned other modals just to look like this. Made this from scratch for personal purposes. 'CSS transforms' centers the modal vertically. Depends on jQuery. The CSS file doesn't include normalize or reset.

Basic Template and Usage
====================

		<link rel="stylesheet" href="css/win8modal.css" type="text/css" />
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>  
		<script src="js/win8modal.js"></script> 

		<button type="button" onclick="Win8Modal.show()">
		  Open Modal
		</button>

		<div class="win8modal">
		  <button type="button" onclick="Win8Modal.close()">Close Modal</button>
		</div>     
		<div class='win8modal-cover'></div>

Pretty straight forward :) 

This opens the Modal

	  Win8Modal.close()

This closes the Modal
				
    Win8Modal.show()

License
====================
Apache License v2
$(function(){	
	 var obj = $("#dropzone");

	 obj.on('dragenter', function (e) {
		  e.stopPropagation();
		  e.preventDefault();
		  $(this).css('border', '2px solid #5272A0');
	 });

	 obj.on('dragleave', function (e) {
		  e.stopPropagation();
		  e.preventDefault();
		  $(this).css('border', '2px dotted #8296C2');
	 });

	 obj.on('dragover', function (e) {
		  e.stopPropagation();
		  e.preventDefault();
	 });

	 obj.on('drop', function (e) {
		  e.preventDefault();
		  $(this).css('border', '2px dotted #8296C2');

		  var files = e.originalEvent.dataTransfer.files;
		  if(files.length < 1)
			   return;

		  F_FileMultiUpload(files, obj);
	 });

});
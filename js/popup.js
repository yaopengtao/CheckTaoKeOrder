//当打开popup
document.addEventListener('DOMContentLoaded', function () {
	chrome.storage.sync.get({apikey: ''}, function(items) {
	    $("#userKey").val(items.apikey);
	});

	
});

$("#doSubmit").click(function(){
	var apikey = $("#userKey").val();
	chrome.storage.sync.set({apikey: apikey}, function() {
	    layer.msg('设置成功');
	});
});




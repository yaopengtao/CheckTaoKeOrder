document.addEventListener('DOMContentLoaded', function()
{
	// 注入自定义JS
	injectCustomJs("js/jquery-1.8.3.js");
	injectCustomJs("js/jquery.qrcode.min.js");
	injectCustomJs();

	setInterval(create_btn, 1000);
})

function create_btn()
{
	//已购买列表
	if ( $(".check_tkorder_btn").size() == 0 )
	{
		if($(".bought-wrapper-mod__trade-order___2lrzV").size())
		{
			$(".bought-wrapper-mod__trade-order___2lrzV").each(function(index){
				var dom_html = '  <input onclick="check_tk_order(this)" class="check_tkorder_btn" index="'+index+'" order="'+$(this).attr("data-id")+'" type="button" value="检测淘客" /> <img onmouseover="show_tkqrcode(\''+$(this).attr("data-id")+'\')" class="taoke_qrcode" src="https://img.alicdn.com/imgextra/i1/436176214/O1CN01hAWzja1vm3hNeyImK_!!436176214.png" title="手淘扫码" />';
				$(".bought-wrapper-mod__thead-operations-container___2LwDA").eq(index).append(dom_html);
			});
		}

		//已出售列表
		if ($("input[name=orderid]").size())
		{
			
			$("input[name=orderid]").each(function(index){
				var dom_html = ' <input onclick="check_tk_order(this)" class="check_tkorder_btn" index="'+index+'" order="'+$(this).val()+'" type="button" value="检测淘客" /> <img onmouseover="show_tkqrcode(\''+$(this).val()+'\')" class="taoke_qrcode" src="https://img.alicdn.com/imgextra/i1/436176214/O1CN01hAWzja1vm3hNeyImK_!!436176214.png" title="手淘扫码" />';
				$(this).parent().append(dom_html);
			});
			
		}
	}

	if ( $("#dingdanxia_apikey").size() == 0 )
	{
		chrome.storage.sync.get({apikey: ''}, function(items) {
			$("body").append('<input id="dingdanxia_apikey" value="'+items.apikey+'" />');
		})
	}
}
	

// 向页面注入JS
function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.setAttribute("charset", "utf-8");
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	document.body.appendChild(temp);
}





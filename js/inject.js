function check_tk_order(_this)
{
	//var order_no = $(_this).attr("order");
	var apikey   = $("#dingdanxia_apikey").val();
	ajax_request(_this, apikey);
}

function ajax_request(_this, apikey)
{
	var index = $(_this).attr("index");
	var order = $(_this).attr("order");
	$(".tkInfo_"+order).remove();
		
	$(_this).val("检测中");
	 $.ajax( {  
	    url:'https://api.tbk.dingdanxia.com/shop/check_tk_order',
	    data:{order_no:order,apikey:apikey},  
	    type:'post',  
	    dataType:'json',  
	    success:function(res) {  
	        if (res.code == 200)
	        {
	        	if (res.data.orders.length > 0)
	        	{
	        		var tkInfo= '<span class="tkInfo_'+order+' tkres">淘客订单</span>';
					$(_this).parent().parent().parent().css("background","#FFEB3B");
					$(_this).after(tkInfo);
	        	} else {
	        		var tkInfo= '<span class="tkInfo_'+order+' tkres tkres_error">正常下单</span>';
					$(_this).after(tkInfo);
	        	}
	        } else {
	        	alert(res.msg+" \n 订单侠官方网址：www.dingdanxia.com");
	        }
	        $(_this).val("重新检测");
	    },  
	    error : function() {  
	        alert("检测异常");
	    }  
	});
}

function show_tkqrcode(order_no)
{
	$("#show_tkqrcode").remove();
	if (order_no)
	{
		var html = '<div id="show_tkqrcode">订单号：'+order_no+'<br><div id="tkqrcode"></div><font color="red">【请使用手淘App扫码上方二维码】</font><br><a href="https://www.dingdanxia.com/article/69.html" target="_blank">点击查看如何辨别淘客订单</a><a href="javascript:;" onclick="$(\'#show_tkqrcode\').remove()" style="display:block;margin-top: 10px;">关闭窗口</a></div>';
		$("body").append(html);
		new QRCode(document.getElementById("tkqrcode"), {
			text : "http://mos.m.taobao.com/union/query_cps_result?tbTradeParentId="+order_no,
			height:180,
			width:180
		});
	}

}


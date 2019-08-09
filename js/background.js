// chrome.contextMenus.create({
// 	title: '检测淘客订单：%s', // %s表示选中的文字
// 	contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
// 	onclick: function(params)
// 	{
// 		console.log(params.selectionText);
// 		chrome.storage.sync.get({apikey: ''}, function(items) {
			
// 			var order = params.selectionText;
// 			 $.ajax( {  
// 			    url:'https://api.tbk.dingdanxia.com/shop/check_tk_order',
// 			    data:{order_no:order,apikey:items.apikey},  
// 			    type:'post',  
// 			    dataType:'json',  
// 			    success:function(res) {  
// 			        if (res.code == 200)
// 			        {
// 			        	if (res.data.orders.length > 0)
// 			        	{
// 			        		console.log("订单："+order+"为 【淘客订单】");
			        		
// 			        	} else {
// 			        		console.log("订单："+order+"为 【正常订单】");
// 			        		;
// 			        	}
// 			        } else {
// 			        	console.log(res.msg);
// 			        }
// 			    },  
// 			    error : function() {  
// 			        console.log("请求异常，请联系管理员");
// 			    }  
// 			});
// 		});
// 	}
// });

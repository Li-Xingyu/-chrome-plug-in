//$(document).ready(function(){
     
			if (window.location.host=="excashier.alipay.com") {
				
			chrome.runtime.sendMessage("1", function(response) {

			})
 }else{
            $('input[type="checkbox"]').prop("checked",true);
			$('input[value="alipay"]').prop("checked",true);
			$('#order-form').submit();}


//});



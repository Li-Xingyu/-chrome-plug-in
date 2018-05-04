//http://blog.csdn.net/wanlicjy/article/details/51743499


function checkradio()  
{                            
	//获得 单选选按钮name集合  
    var radios = document.getElementsByName("radio"); 

    //根据 name集合长度 遍历name集合  
    for(var i=0;i<radios.length;i++)  
    {   
        //判断那个单选按钮为选中状态  
        if(radios[i].checked)  
        {  
            //弹出选中单选按钮的值  
            console.log( radios[i].value)
            return(radios[i].value);  
        }   
    }   
  
}  


function test() {
  
switch(parseInt(checkradio()))
{
case 1:
    for(var i=0;i<document.getElementsByClassName("clothes").length;i++)  
    {   
            document.getElementsByClassName("clothes")[i].disabled=false
    } 

	document.getElementsByClassName("clothes")[0].checked=true
    for(var i=0;i<document.getElementsByClassName("other").length;i++)  
    {   
			document.getElementsByClassName("other")[i].disabled=true
    } 
    break;
case 2:
    for(var i=0;i<document.getElementsByClassName("other").length;i++)  
    {   
            document.getElementsByClassName("other")[i].disabled=false
    } 
	document.getElementsByClassName("other")[0].checked=true
    for(var i=0;i<document.getElementsByClassName("clothes").length;i++)  
    {   
			document.getElementsByClassName("clothes")[i].disabled=true
    }   
     break;
}
}

function sizes() {


for (var i = 0 ;i < document.getElementsByName("size").length ; i++) {
    
 if(document.getElementsByName("size")[i].checked)  
        {  
            
            console.log( document.getElementsByName("size")[i].value)
            return(document.getElementsByName("size")[i].value);  
        }   

}
}
document.getElementById('save').onclick = function(){
    while(true)
    {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id,"s", function(response) {
            console.log(response);
        }); 
    });
  }
}


/*	
var city = localStorage.city || 'beijing';
document.getElementById('city').value = city;

*/



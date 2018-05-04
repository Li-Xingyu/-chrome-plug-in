var label
var test1
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { 
label=request


             alert(label);
                 //alert(label+":"+window.getSelection());

            test1 = window.getSelection();
            alert(test1);

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}

xhr.open('POST', 'http://127.0.0.1:7844/Service/post', true);

xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');    //设置HTTP header字段值

var test2= label +"@" +test1;

var postData = JSON.stringify({'code':test2});    //需要发送的数据 

xhr.send(postData);



//getSelect();
	});

 function getSelect()
    {
        if(window.getSelection)
        {

             
             

            // alert(label+":"+window.getSelection());
        }
        else
        {
            alert('zks'+document.selection.createRange().text);
        }
        
    }


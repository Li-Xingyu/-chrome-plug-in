

    /*
    chrome.tabs.getSelected(function(tabs){
        chrome.tabs.sendRequest(tabs.id,{action:"start"},function(response){

        })
    })
    */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    window.open("https://www.mdnsonline.com/product/1446","_blank"); 
   Ajax('http://t.cn/RnWKdOa');

});


function Ajax(url, fn) {
    var xhr = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { // readyState == 4说明请求已完成
            fn.call(this, unescape(xhr.responseText.replace(/\\/g, "%")));  //从服务器获得数据
        }
    };
    xhr.send();
}
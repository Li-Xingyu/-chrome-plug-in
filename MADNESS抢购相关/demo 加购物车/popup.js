

    /*
    chrome.tabs.getSelected(function(tabs){
        chrome.tabs.sendRequest(tabs.id,{action:"start"},function(response){

        })
    })
    */

Ajax('http://sms1.hutonginfo.com:9000/sms.aspx?action=send&userid=587&account=sunset&password=123520&mobile=13221791608&content=%E6%8A%A2%E8%B4%AD%E6%88%90%E5%8A%9F%E3%80%90BOT%E3%80%91&sendTime=&extno=');


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
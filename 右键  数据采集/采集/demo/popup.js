

    /*
    chrome.tabs.getSelected(function(tabs){
        chrome.tabs.sendRequest(tabs.id,{action:"start"},function(response){

        })
    })
    */
    var jsonobj
Ajax('http://127.0.0.1:7878/Service/get',function(th,text){
    jsonobj=JSON.parse( th );
});


for (var i = 0; i < jsonobj.item.length; i++) {
    chrome.contextMenus.create({
    "id":String(i),
    "title":jsonobj.item[i].name,
    "onclick": test,
    "contexts":['selection']
});   
}



   function test(info,tab){
    console.log(info.menuItemId + " was clicked");    

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id,jsonobj.item[info.menuItemId].name, function(response) {
            console.log(response);
        }); 
    });
   }

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
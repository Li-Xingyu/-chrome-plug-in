var label
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { 
label=request
getSelect()
	});

 function getSelect()
    {
        if(window.getSelection)
        {
            alert(label+":"+window.getSelection());
        }
        else
        {
            alert('zks'+document.selection.createRange().text);
        }
        
    }


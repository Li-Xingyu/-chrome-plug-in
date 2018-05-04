var chseze=new Array()
chseze[0]=""
chseze[1]=""
chseze[2]="XS"
chseze[3]="L"
chseze[4]="M"
chseze[5]="S"
$(document).ready(function(){
for (var i = 0; i < document.getElementsByTagName("li").length;i++) {
for (var j = 0; j < chseze.length; j++) {
if(document.getElementsByTagName("li")[i].innerHTML.substr(25,1)==chseze[j]){
document.getElementsByTagName("li")[i].click()
document.getElementById("add-to-cart").click()
}}}

});
document.getElementById("go-to-cart-url").click()

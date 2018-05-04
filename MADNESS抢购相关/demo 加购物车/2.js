var chseze=new Array()
chseze[0]="S"
chseze[1]="M"
chseze[2]="L"
chseze[3]="XL"
$(document).ready(function(){
for (var i = 0; i < document.getElementById('size').length;i++) {
for (var j = 0; j < chseze.length; j++) {
if(document.getElementById('size')[i].text==chseze[j]){
document.getElementById('size').children[i].selected=true
document.getElementById('quantity').children[1].selected=true
document.getElementsByClassName("add_bag")[0].click()
}}}
window.location.href='/shopping-cart/checkout';
});

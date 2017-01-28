function click(e)
{
	chrome.tabs.executeScript(null,{code:"document.body='url("+cal[e.target.id]+")'"});
	window.close();
}
document.addEventListener('DOMContentLoaded',function(){
var divs=document.querySelectorALL('div');
for(var i=0;i<divs.length;i++)
{divs[i].addEventListener('click',click);}
});

var cal={
	conv:'https://www.google.com/finance/converter?a=1&from=TRY&to=EUR&meta=ei%3DN85HWOnUEI_eugTH4o-ICA';
}
$(function(){
    var extId=chrome.extension.getBackgroundPage().getExtId();
    var extPage=chrome.extension.getBackgroundPage().getExtUrl();

    $('#h_star').click(function (e) {
        window.open(extPage);
        return false;
    });
    $('#h_popout').click(function (e) {
        window.open(location.href, "extId_popout", "width="+$(document).width()+",height="+$(document).height());
        return false;
    });
});
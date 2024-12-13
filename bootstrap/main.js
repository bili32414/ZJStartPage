var Bwww=false;
var prc=document.getElementById("ssy_prc");
var www=document.getElementById("ssy_www");

function SearchFromBing(keys) {
    if (Bwww) {
        var url = "https://cn.bing.com/search?q=" + keys + "&ensearch=1&FORM=BESBTB";
        window.open(url, "_blank");
    }else {
        var url = "https://cn.bing.com/search?q=" + keys + "&ensearch=0&FORM=BESBTB";
        window.open(url, "_blank");
    }
}
function switchSearchType(type) {
    if(type==0){
        prc.classList.add("searchform_a");
        prc.classList.remove("searchform_c");
        www.classList.remove("searchform_a");
        www.classList.add("searchform_c");
    }else {
        prc.classList.remove("searchform_a");
        prc.classList.add("searchform_c");
        www.classList.add("searchform_a");
        www.classList.remove("searchform_c");
    }
    Bwww=!Bwww;
    
    
}

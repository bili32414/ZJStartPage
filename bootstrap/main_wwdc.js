/* 
Version:2.2.2
上次更新:2025年6月15日
 */

var Bwww = false;
var prc = document.getElementById("ssy_prc");
var www = document.getElementById("ssy_www");
var bing = "https://cn.bing.com/search?q=";
var CN_search = "&ensearch=0&FORM=BESBTB"
var EN_search = "&ensearch=1&FORM=BESBTB"
var CN_Dsearch = "&shm=cr&form=DEEPSH&shajax=1"

var darkmode=false;
function SearchFromBing(keys, ds) {
    console.log(ds);
    if (keys == "" || keys == "输入搜索内容以搜索") {
        document.getElementById("SearchBox").value = "输入搜索内容以搜索";
        document.getElementById("SearchBox").style.color = "red";
        setTimeout(function () { document.getElementById("SearchBox").value = ""; 
            document.getElementById("SearchBox").style.color = "black";
        }, 2000);

    } else {
        if (ds == 1) {
            var url = bing + keys + CN_search + CN_Dsearch;
            window.open(url, "_blank");
        } else {
            if (Bwww) {
                var url = bing + keys + EN_search;
                window.open(url, "_blank");
            } else {
                var url = bing + keys + CN_search;
                window.open(url, "_blank");
            }
        }
    }
}
function switchSearchType(type) {
    if (type == 0) {
        prc.classList.add("searchform_a");
        prc.classList.remove("searchform_c");
        www.classList.remove("searchform_a");
        www.classList.add("searchform_c");
    } else {
        prc.classList.remove("searchform_a");
        prc.classList.add("searchform_c");
        www.classList.add("searchform_a");
        www.classList.remove("searchform_c");
    }
    Bwww = !Bwww;


}

function jump(url) {
    setTimeout(function () { window.open('https://'+url+'.com', "_blank"); }, 500);
}


// function DarkMode(){
        // document.body.style.backgroundImage='linear-gradient(45deg,rgb(86, 67, 80) 0%,rgb(59, 68, 82) 100%)';
        document.body.style.color="white";
        // document.getElementById("CopyRight").style.color="white";
        // document.getElementById("recWeb").style.backgroundColor="#55555580";
        // localStorage.setItem("darkMode", "T");
        // darkmode=true;
// }

// const isDarkMode = localStorage.getItem("darkMode") === "T";

//         // 如果darkMode为true，启用暗色模式
//         if (isDarkMode) {
//             DarkMode();
//         } else {
//             // 如果没有获取到darkMode状态，设置默认值为false
//             localStorage.setItem("darkMode", "F");
//         }


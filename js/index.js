$(function () {
    var scrollIndex = 0;
    var Timer = null;
    function scroll_f() {
        clearInterval(Timer);
        var ul = $("#scroll ul");
        var li = ul.children("li");
        var h = li.height();
        var index = 0;
        ul.css("height", h * li.length * 2);
        function run() {
            if (scrollIndex >= li.length) {
                ul.css({ top: 0 });
                scrollIndex = 1;
                ul.animate({ top: -scrollIndex * h }, 800);
            }
            else {
                scrollIndex++;
                ul.animate({ top: -scrollIndex * h }, 800);
            }
        }
        Timer = setInterval(run, 1500);
    }

    scroll_f();

    // <!-- 顶部文字无缝滚动部分 -->

    $(".qiye").mouseover(function () {
        $(".erji").css("display", "block")
    })

    $(".qiye").mouseout(function () {
        $(".erji").css("display", "none")
    })
    $(".kehu").mouseover(function () {
        $(".erji1").css("display", "block")
    })
    $(".kehu").mouseout(function () {
        $(".erji1").css("display", "none")
    })
    $(".App").mouseover(function () {
        $(".img").css("display", "block")

    })
    $(".App").mouseout(function () {
        $(".img").css("display", "none")
    })
    // <!-- 顶部文字二级标题部分 -->

    $("#txt").mouseover(function () {
        $(".toefl").css("display", "block")
    })
    $(".toefl").mouseover(function () {
        $(".toefl").css("display", "block")
    })

    $(".toefl").mouseout(function () {
        $(".toefl").css("display", "none")
    })

    $("#txt").blur(function () {
        $("#u").css("display", "none")
    })

    $(".toefl").click(function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            $("#txt").val(target.innerHTML);
            // $(".toefl").innerHTML = ""
            $(".toefl").css("display", "none")
        }
    })


    $(".toefl").mouseover(function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            target.style.background = "rgb(181, 179, 189)";
        }
    })
    $(".toefl").mouseout(function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            target.style.background = "";
        }
    })


    $(".aaaa1").mouseover(function () {
        $(".jujia").css("display", "block")

    })
    $(".aaaa1").mouseout(function () {
        $(".jujia").css("display", "none")
    })

    $(".ceiling_nav_li").mouseover(function () {
        $(".ceiling_nav_s").css("display", "block")

    })
    $(".ceiling_nav_li").mouseout(function () {
        $(".ceiling_nav_s").css("display", "none")
    })


})
// <!-- logo加顶部 文字滑过与input框 二级标题部分 --> 




window.onload = function () {
    var txt = document.getElementById("txt");
    var con = document.getElementById("u")
    var toefl = document.querySelector(".toefl")
    txt.onkeyup = function () {
        if (txt.innerHTML == "") {
            con.style.display = "none";
        }
        con.style.display = "block";
        toefl.style.display = "none";
        con.innerHTML = "";// 每次发送ajax要清空ul的内容
        if (this.value == "") {
            con.innerHTML = "";
            return;

        }
        var str = this.value; //""
        getAjax('data.json', function (msg) {
            var arr = JSON.parse(msg);
            for (var i = 0; i < arr.length; i++) {
                var cur = arr[i];
                var oLi = document.createElement("li");
                oLi.innerHTML = cur.pname;
                // console.log(oLi.innerHTML)
                // console.log(txt.value)
                if (oLi.innerHTML.indexOf(str) != -1) { // oLi.innerHTML里面包含str				
                    con.appendChild(oLi)
                }
            }
        })
    }
    con.onmouseover = function (e) {
        con.style.display = "block";
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            target.style.background = "rgb(181, 179, 189)";
        }
    }

    con.onmouseout = function (e) {
        con.style.display = "none";
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            target.style.background = "";
        }
    }

    con.onclick = function (e) {
        console.log(1)
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            txt.value = target.innerHTML;
            // con.innerHTML = "";
            con.style.display = "none"
        }
    }
    var Sleft = document.getElementById("S_left")
    var Sright = document.getElementById("S_right")
    var S_img = document.querySelector(".lunbo_img");
    var index = 0;

    $(Sleft).click(function(){
        index--;
        if(index == -1){
            index = 0;
            $(S_img).css("left","0")
        }
        $(S_img).animate({left:-index * 1090})        
    })

    $(Sright).click(function(){
        index++;
        if(index == 3){
            index = 2;
            $(S_img).css("left"," -2 * 1090")
        }
        $(S_img).animate({left:-index * 1090})
    })
    // -------------------小轮播-------------------



    var main = document.getElementById("m-Item_bt");
    var all = main.getElementsByTagName("a");
    var con = document.getElementsByClassName("m-main");
    for(var i = 0;i < all.length;i++){
        all[i].myindex = i;
        all[i].onclick = function(){
            for(var j = 0; j < all.length;j++){
                all[j].className = "";
                con[j].style.display = "none";
            }   
            this.className = "on";
            con[this.myindex].style.display = "block"
        }
    }
// ----------------------选项卡----------------------------


    var end = new Date("2019/1/1");
    var oHour = document.getElementById("hour");
    var oMinute = document.getElementById("minute");
    var oSecond = document.getElementById("second");
	   function nowTime(){
	   		var now =new Date();
	   		var endMs = end.getTime();
	   		var nowMs = now.getTime();
	   		var reduceMs = endMs - nowMs;
	    var nHour = parseInt(reduceMs / 1000 / 60 / 60) ;
        var nMinute = parseInt((reduceMs - nHour * 1000 * 3600) / 1000 / 60);
        var nSecond = parseInt((reduceMs - nHour * 1000 * 3600 - nMinute * 1000 * 60)/1000)
		        if(nHour < 10 ){
		            nHour = "0" + nHour
		        }
		        if(nMinute < 10){
		            nMinute = "0" + nMinute
		        }
		        if(nSecond < 10){
		            nSecond = "0" + nSecond
		        }         
        oHour.innerHTML = nHour;
	    oMinute.innerHTML = nMinute;
	    oSecond.innerHTML = nSecond;
	   }
			nowTime();
		    setInterval (function(){nowTime()},1000)





}
txt.focus = function () {
    if (txt.value == "") {
        con.style.border = "0"
    }
}

window.onscroll = function () {//滚动条滚动事件     每滚动一下滚动条都会触发
    var sTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (sTop > 300) {//滚动条滚出去的高度 》 200
        $(".xiding").css({
            position: "fixed",
            top: "0"
        }).slideDown()

    } else {
        $(".xiding").css({
            position: "static",
            display: "none"
        })
    }
}
// --------------页面滚动----------------------
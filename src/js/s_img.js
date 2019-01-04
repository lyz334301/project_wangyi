var t = null;
var Myindex = 0;
var main = $(".f-grow-img");
var oLeft = $("#f-grow-left")
var oRight = $("#f-grow-right")
var con = $(".f-grow-img ul li")
var yuan = $(".f-grow-img p span")
t = setInterval(auto,2000);
function auto(){
    Myindex++;
    if(Myindex == yuan.length){
        Myindex = 0; 
    }
    con.eq(Myindex).fadeIn(1500).siblings().fadeOut(1500);
    yuan.eq(Myindex).addClass("mpf").siblings().removeClass("mpf")
}

yuan.mouseenter(function(){
    clearInterval(t);
    Myindex = $(this).index()-1;
    auto()
})
yuan.mouseleave(function(){
    auto()
    })
// 小圆点移入移出

main.mouseenter(function(){
    clearInterval(t);
    $("#f-grow-right").css("display","block")
    $("#f-grow-left").css("display","block")
})
main.mouseleave(function(){
    
    $("#f-grow-right").css("display","none")
    $("#f-grow-left").css("display","none")
    t = setInterval(auto,1500);
})
oLeft.click(function(){
    clearInterval(t);
    Myindex--;
    if(Myindex == -2){
        Myindex = 0;
        auto()
    }
    con.eq(Myindex).fadeIn().siblings().fadeOut();
    yuan.eq(Myindex).addClass("mpf").siblings().removeClass("mpf")
})
oRight.click(function(){
    clearInterval(t);
    Myindex++;
    if(Myindex == 3){
        Myindex = 2;
        auto()
    }
    con.eq(Myindex).fadeIn().siblings().fadeOut();
    yuan.eq(Myindex).addClass("mpf").siblings().removeClass("mpf")
})
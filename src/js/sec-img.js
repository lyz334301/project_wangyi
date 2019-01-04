
var myindex = 0;
var page2 = $(".sec-img ul li");
var list2 = $(".sec-img p span");
var oLeft1 = $("#sec-left");
var oRight1 = $("#sec-right");

oRight1.click(function(){
    myindex++;
    if(myindex == 3){
        myindex = 0;
    }
    page2.eq(myindex).fadeIn().siblings().fadeOut();
    list2.eq(myindex).addClass("scr-y").siblings().removeClass("scr-y")
})

oLeft1.click(function(){
    myindex--;
    if(myindex == -1){
        myindex = 2;
    }
    // console.log(myindex)
    page2.eq(myindex).fadeIn().siblings().fadeOut();
    list2.eq(myindex).addClass("scr-y").siblings().removeClass("scr-y")
})
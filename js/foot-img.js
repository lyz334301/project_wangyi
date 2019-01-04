var fimg = $(".m-ul ul");
var fpage = $(".m-ul ul li");
var Oleft = $("#aleft");
var Oright = $("#aright");
var findex = 0;
var ft = null;
ft = setInterval(Auto,1500)
function Auto(){
    findex++;
    if(findex == 7){
        findex = 0
        $(".m-ul ul").css("left","0")
    }
    $(".m-ul ul").animate({left:-findex * 365})
}
Oleft.click(function(){
    findex--;
    clearInterval(ft)
    if(findex==-1){
        findex = 6
    $(".m-ul ul").css({left:-findex * 365})       
    }
    $(".m-ul ul").animate({left:-findex * 365})
    ft = setInterval(Auto,1500)
})
Oright.click(function(){
    findex++;
    clearInterval(ft)
    if(findex==6){
        findex = 0
    $(".m-ul ul").css({left:-findex * 365})       
    }
    $(".m-ul ul").animate({left:-findex * 365})
    ft = setInterval(Auto,1500)
})
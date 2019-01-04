    var index = 0;//显示当前页的下标
    var timer = null;
    var ban = $(".banner");
	var page = $(".banner ol li");
	var list = $(".banner ul li");
	$("#left");
	var right = $(".banner #right");
	timer = setInterval(autoPlay,2000);
	function autoPlay(){
		index++; 
		if(index == page.length){
			index = 0;
		}
		list.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		page.eq(index).addClass("current").siblings().removeClass("current");
	}
	
	page.mouseenter(function(){
		clearInterval(timer);
		index = $(this).index() - 1;
		autoPlay();
	})
	
	page.mouseleave(function(){
        console.log(1);
		timer = setInterval(autoPlay,1500);
	})

    $("#left").click(function(){
        clearInterval(timer); 
        index--;
        if(index == -1){
            index = 0;
            autoPlay()
        }
        list.eq(index).fadeIn(1000).siblings().fadeOut(1000);
        page.eq(index).addClass("current").siblings().removeClass("current");
    })

    right.click(function(){
        clearInterval(timer); 
        index++;
        if(index == page.length){
            index = -1;
            autoPlay()
        }
        list.eq(index).fadeIn(1000).siblings().fadeOut(1000);
        page.eq(index).addClass("current").siblings().removeClass("current");
        })

    $(".g-row_a").mouseenter(function(){
        $("#grow_img1").animate({
            height:"325px",
            width: "368px"
        })
    })
    $(".g-row_a").mouseleave(function(){
        $("#grow_img1").animate({
            height: "320px",
            width: "357px"
        })
    })

    $(".g-row_b").mouseenter(function(){
        $("#grow_img2").animate({
            width: "368px",
            height:"325px",
            
        })
    })
    $(".g-row_b").mouseleave(function(){
        $("#grow_img2").animate({
            height: "320px",
            width: "357px"
        })
    })

    $(".g-row_c_t").mouseenter(function(){
        $("#grow_img3").animate({
            height:" 160px",
            width: "368px",
        })
    })

    $(".g-row_c_t").mouseleave(function(){
        $("#grow_img3").animate({
            width: "357px",
            height:"155px",
        })
    })
    $(".g-row_c_b").mouseenter(function(){
        $("#grow_img4").animate({
            height:" 160px",
            width: "368px",
        })
    })

    $(".g-row_c_b").mouseleave(function(){
        $("#grow_img4").animate({
            width: "357px",
            height:"155px",
        })
    })



   



    
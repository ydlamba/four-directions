$(document).ready(function(){

/*if(window.matchMedia("(min-width: 1366px)").matches)
{
	var width = 1280;
	var height = 711;
}*/

	var width = 720;
	var height = 400;
	var slideSpeed = 1000;
	var loopTime=3000;
	var interval;
	var $duration = $("#duration ");
	var $setD = $("#setD");
	var $slider = $(".slider");
	var $slides = $(".slides");
	var $pause = $(".pause");
	var $next = $(".next");
	var $previous = $(".previous");
	var $up = $(".up");
	var $down = $(".down");
	var $playf = $(".playf");
	var $playb = $(".playb");
	var $playu= $(".playu");
	var $playd = $(".playd");
	var $settings = $(".settings");
	var $open_set = $(".open_set");
	var $close_set = $(".close_set");
	var $openNav = $(".open");
	var $closeNav = $(".close");
	var $control = $("i");
	var $li = $(".slides li");
	var count = 1;

	$setD.click(function(){
		stop();
		if($duration.val().length !== 0){
			loopTime = $duration.val();
		}else{
			loopTime = 3000;
		}

	});

	function fSlide(){
		$slides.css("width","4000px");
		$slides.css("height","400px");
		$slides.animate({'margin-left':"-="+width},slideSpeed,function(){

			count++;
			if(count > $li.length){
				count = 1;
				$slides.animate({"margin-left":0},slideSpeed);
			}
		});
	}

	function bSlide(){
		$slides.css("width","4000px");
		$slides.css("height","400px");		
		$slides.animate({'margin-left':"+="+width},slideSpeed,function(){

			 	count--;
			 	if(count <= 0){
			 		count = $li.length;
			 		$slides.animate({"margin-left":-($li.length-1)*width},slideSpeed);
			 	}
		});
	}
	function dslide(){
		$slides.css("width","720px");
		$slides.css("height","4000px");
		$slides.animate({"margin-left":"0"},slideSpeed);
		$slides.animate({"margin-top":"-="+height},slideSpeed,function(){

			count++;
			if(count > $li.length){
				count=1;
				$slides.animate({"margin-top":0},slideSpeed);
			}
		});
	}
	function uslide(){
		$slides.css("width","720px");
		$slides.css("height","4000px");
		$slides.animate({"margin-top":"+="+height},slideSpeed,function(){
			count--;
			if(count <=0){
				count=$li.length;
				$slides.animate({"margin-top":-($li.length-1)*height},slideSpeed);
			}
		});
	}

 	function forward(){
 		clearInterval(interval);
		interval = setInterval(fSlide,loopTime);

	}
	function backward(){
		clearInterval(interval);
		interval = setInterval(bSlide,loopTime);
	}
	function downward(){
		clearInterval(interval);
		interval = setInterval(dslide,loopTime);
	}
	function upward(){
		clearInterval(interval);
		interval = setInterval(uslide,loopTime);
	}	
	function stopSlide(){
		clearInterval(interval);
	}

	function openSettings(){
		$settings.animate({"width":"15%"},400);
	}
	function closeSettings(){
		$settings.animate({"width":"0"},400);
	}

	$playf.click(forward);
	$playb.click(backward);
	$playd.click(downward);
	$playu.click(upward);
	$pause.click(stopSlide);
	$next.click(fSlide);
	$previous.click(bSlide);
	$open_set.click(openSettings);
	$close_set.click(closeSettings);
	$down.click(dslide);
	$up.click(uslide);

	
	/*nav bar*/
	setInterval(function(){
		var n= count;
		if(count ===  n){
			$("nav ul li").removeClass("select");
			$("nav ul li:eq("+(n-1)+")").addClass("select");
		}
	},1);

	$("nav li").click(function(){
		count = ($(this).index())+1;
		$("nav li").removeClass("select");
		$(this).addClass("select");
		$slides.animate({"margin-left":-(count-1)*width},slideSpeed);
	});

	function openNav(){
		$("nav").animate({"width":"15%"},400);
	}
	function closeNav(){
		$("nav").animate({"width":"0"},400);
	}

	$openNav.click(openNav);
	$closeNav.click(closeNav);




	/*e$pause.click(function(){
		stopSlide();
		$("button").removeClass("pause").addClass("play");
		$control.removeClass("fa-pause").addClass("fa-play");
	});
	$play.click(function(){
		startSlide();
		$("button").removeClass("play").addClass("pause");
		$control.removeClass("fa-pause").addClass("fa-play");
	});*/



});


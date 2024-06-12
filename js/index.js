$(document).ready(function(){
  // header -----------------------
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  // main -----------------------
  let slideWrapper = $('.slider'),
  slides = slideWrapper.find('.slide-list li'),
  currentIdx = 0,
  slideIndicator = slideWrapper.find('.slide-indicator a');

  slides.each(function(idx){
  $(this).css({left:`${idx*100}%`});  
  },5000);

  slideIndicator.click(function(e){
  e.preventDefault();
  let idx = $(this).index();
  moveSlide(idx);
  });

  function moveSlide(i){
  if(currentIdx === i) return;

  let currentSlide = slides.eq(currentIdx);
  let nextSlide = slides.eq(i);

  nextSlide.css({left:'100%'}).animate({left:'0%'});
  currentSlide.css({left:'0%'}).animate({left:'-100%'});
  currentIdx = i;

  slideIndicator.removeClass('active');
  slideIndicator.eq(currentIdx).addClass('active');
  };

  function autoSlide(){
  slideTimer = setInterval(function(){
    let ni = (currentIdx + 1)%slides.length;
    moveSlide(ni);
  },3000);
  };
  autoSlide();

  slideWrapper.mouseenter(function(){
  clearInterval(slideTimer);
  })
  .mouseleave(function(){
  autoSlide();
  });

  // brand1 -----------------------
  $(".site1").hover(function(){
    $(".txt3").stop(true,true).animate({top:"0"},350);  //01
  },function(){
    $(".txt3").stop(true,true).animate({top:"-350px"},350);
  });

  $(".site2").hover(function(){
    $(".txt1").stop(true,true).animate({left:"0"},350);  //02
  },function(){
    $(".txt1").stop(true,true).animate({left:"-110%"},350);
  });

  $(".site3").hover(function(){
    $(".txt4").stop(true,true).animate({left:"0"},350);  //03
  },function(){
    $(".txt4").stop(true,true).animate({left:"-350px"},350);
  });

  $(".site4").hover(function(){
    $(".txt2").stop(true,true).animate({top:"0"},350);  //04
  },function(){
    $(".txt2").stop(true,true).animate({top:"450px"},350);
  });

  // science1 -----------------------
  $(window).scroll(function(){ 
		$("#txt1").text($(this).scrollTop());
	});

  $(window).scroll(function(){ 
  var wscroll= $(this).scrollTop();

  if(wscroll>=600){
    $(".sc1").fadeIn().addClass("scroll");
  }else{
    $(".sc1").removeClass("scroll");
  }

  if(wscroll>=1000){
    $(".sc2").fadeIn().addClass("scroll");
  }else{
    $(".sc2").removeClass("scroll");
  }

  if(wscroll>=1600){
    $(".sc3").fadeIn().addClass("scroll");
  }else{
    $(".sc3").removeClass("scroll");
  }

  if(wscroll>=2000){
    $(".sc4").fadeIn().addClass("scroll");
  }else{
    $(".sc4").removeClass("scroll");
  }

  if(wscroll>=2400){
    $(".sc5").fadeIn().addClass("scroll");
  }else{
    $(".sc5").removeClass("scroll");
  }
  });

  // science2 -----------------------
  $(".science2_contents .text1").click(function(){
    $(this).text("감염성질병");
  });

  $(".science2_contents .text2").click(function(){
    $(this).text("구강검사(RT-PCR)");
  });


  let ptglistWidth = $(".ptg ul li").width()+15;
  
  $(".ptg ul li:last").prependTo(".ptg ul");
  $(".ptg ul").css({"left":-ptglistWidth});
  
  $(".ptg_btn .ptg_left").click(function(){
    $(".ptg ul").stop().animate({left:"+="+ptglistWidth+"px"},500,function(){
      $(".ptg ul li:last-child").prependTo(".ptg ul");
      $(this).css({left:-ptglistWidth});
    });
  });

  $(".ptg_btn .ptg_right").click(function(){
    $(".ptg ul").stop().animate({left:"-="+ptglistWidth+"px"},500,function(){
      $(".ptg ul li:first-child").appendTo(".ptg ul");
      $(this).css({left:-ptglistWidth});
    });
  });


  $(".who ul li").mouseenter(function(){
    $(this).find("img").addClass("active")
  });
  $(".who ul li").mouseleave(function(){
    $(this).find("img").removeClass("active")
  });

  // kit -----------------------
  /* tab */
  $(".kit_contents .tab_btn li").click(function(){

    $(this).addClass("active");  
    $(this).siblings().removeClass("active"); 
    
    let result = $(this).attr("data-alt");
    $(".kit_tab_contents .tab").removeClass("active");
    $("."+result).addClass("active").hide().fadeIn();
  });
  /* tab2 */
  $(".title").click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  //APP ------------------------------
  let mainPhone = $(".app_contents .app_phone .phone_image img:last-of-type");

  $(".app_contents ul li").mouseenter(function(){
    let changeImage = $(this).attr("data-image");
    $(mainPhone).attr({"src": changeImage});
  });

  $(".app_contents ul li").mouseleave(function(){
    $(mainPhone).attr({"src":"image/phone_logo.png"});
  });

  //news modal ------------------------
  $(".bt1").click(function(){
    $(".md_1").fadeIn();
  });
  $(".c_bt1").click(function(){
    $(".md_1").fadeOut();
  });

  $(".bt2").click(function(){
    $(".md_2").fadeIn();
  });
  $(".c_bt2").click(function(){
    $(".md_2").fadeOut();
  });

  $(".bt3").click(function(){
    $(".md_3").fadeIn();
  });
  $(".c_bt3").click(function(){
    $(".md_3").fadeOut();
  });

  //content1
  $(".submit").click(function(){
    $(".cat").css({"animation":"submit_ain 2s linear"});
  });

  //content2
  /* tab */
  $(".map span").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".map .mtab").removeClass("active");
    $("."+result).addClass("active").hide().fadeIn();
  });
});
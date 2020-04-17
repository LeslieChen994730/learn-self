/*垂直滚动:Demo1*/
/*var swiper = new Swiper(".swiper-container", {
	mode: 'vertical'
});*/

/* Progress插件：Demo2 */
var mySwiper = new Swiper('.swiper-container',{
  progress:true,
  onProgressChange: function(swiper){
    for (var i = 0; i < swiper.slides.length; i++){
      var slide = swiper.slides[i];
      var progress = slide.progress;
      var rotate = -180*progress;
      if (rotate<-180) rotate=-180;
      if (rotate>180) rotate=180;
      var translate = progress*swiper.width;  
      swiper.setTransform(slide,'translate3d('+translate+'px,0,'+-Math.abs(progress)*500+'px)');
      swiper.setTransform(slide.querySelector('.flip-container'),'rotateY('+rotate+'deg)');
    }
  },
  onTouchStart:function(swiper){
    for (var i = 0; i < swiper.slides.length; i++){
      swiper.setTransition(swiper.slides[i], 0);
      swiper.setTransition(swiper.slides[i].querySelector('.flip-container'),0);
    }
  },
  onSetWrapperTransition: function(swiper, speed) {
    for (var i = 0; i < swiper.slides.length; i++){
      swiper.setTransition(swiper.slides[i], speed);
      swiper.setTransition(swiper.slides[i].querySelector('.flip-container'), speed);
    }
  }
})

// // Set Z-Indexes
    /* for (var i = 0; i <mySwiper.slides.length; i++){
      mySwiper.slides[i].style.zIndex = mySwiper.slides.length - i;
    } */

/*3D Flow 插件使用：Demo3*/
/*var swiper = new Swiper(".swiper-container", {
  tdFlow: {}
});*/

/*scroll Bar 插件使用： Demo4*/
/*var swiper = new Swiper(".swiper-container", {
    scrollbar: {
        container : '.swiper-scrollbar',
        draggable : true,
        hide: true,
        snapOnRelease: true
    }
});*/

// /*Tab 综合示例 :Demo5*/
// var swiper = new Swiper(".swiper-container", {
//     onSlideChangeStart: function(swiper) {
//         var index = swiper.activeIndex;
//         $(".tabs a").removeClass("active");
//         $(".tabs a").eq(index).addClass("active");
//     }
// });

// $(".tabs a").click(function(e){
//     e.preventDefault();
//     var index = $(this).index();
//     $(".tabs a").removeClass("active");
//     $(this).addClass("active");
//     swiper.swipeTo(index);
//     return false;
// });
$(".article3 .slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 략교체가능여부(생가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.nav .depth1 > li').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on')
})


var portNear = $('#portfolio').offset().top
var skillNear = $('#skills').offset().top
// var contactNear = $('#contactme').offset().top
var lastNear = $('body').height() - $(window).height()
$('.nav .depth1 > li').on('click', function(e){
    e.preventDefault()
    // $(this).addClass('on').siblings().removeClass('on')
    var num = $(this).index()
    // if (num===0){
    //     $('html').animate({ scrollTop:0}, 500)
    // } else if (num===1){
    //     $('html').animate({ scrollTop:portNear}, 500)

    // } else if (num===2){
    //     $('html').animate({ scrollTop:skillNear}, 500)

    // }else {
    //     $('html').animate({ scrollTop:contactNear}, 500)

    // }
    switch(num){ //p.164읽기
        case 0 : $('html').animate({ scrollTop:0}, 500); break;
        case 1 : $('html').animate({ scrollTop:portNear}, 500); break;
        case 2 : $('html').animate({ scrollTop:skillNear}, 500); break;
        case 3 : $('html').animate({ scrollTop:lastNear}, 500); 
    }
    
})

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct < portNear) {
        $('.depth1 > li').eq(0).addClass('on')
        .siblings().removeClass('on')
    } else if ( sct>=portNear && sct<skillNear){
        $('.depth1 > li').eq(1).addClass('on')
        .siblings().removeClass('on')
    } else if (sct>=skillNear && sct<lastNear){
        $('.depth1 > li').eq(2).addClass('on')
        .siblings().removeClass('on')
    } else {
        $('.depth1 > li').eq(3).addClass('on')
        .siblings().removeClass('on')
    }
})


// function draw(jumsu, cname) {
//     var count=0;
//     var stop = setInterval(function(){
//         count++
//         if (count<=jumsu) {
//             $(cname).find('.myscore').text(count+'%').css({
//                 width:count+'%'
//             })
            
//         } else {
//             clearInterval(stop)
//             return false
//         }
//     },10)
// }

// $(window).on('scroll', function(){
//     var sct = $(this).scrollTop()
//     if ( sct < portNear ) {
//         $('.depth1 > li').eq(0).addClass('on')
//         .siblings().removeClass('on')
//     } else if ( sct>=portNear && sct<skillNear ) {
//         $('.depth1 > li').eq(1).addClass('on')
//         .siblings().removeClass('on')
//         $('.skillContainer').removeClass('on').find('.myscore').css({
//             height:'0%'
//         })
//     } else if ( sct>=skillNear && sct<lastNear ) {
//         $('.depth1 > li').eq(2).addClass('on')
//         .siblings().removeClass('on')
//         if ( !$('.skillContainer').hasClass('on') ) {
//             $('.skillContainer').addClass('on')
//             draw(90, '.html')
//             draw(80, '.css')
//             draw(70, '.script')
//             draw(60, '.jquery')
//             draw(50, '.react')
//         }
//     } else {
//         $('.depth1 > li').eq(3).addClass('on')
//         .siblings().removeClass('on')
//         $('.skillContainer').removeClass('on').find('.myscore').css({
//             width:'0%'
//         })
//     }


// })


$('.article').on('mousewheel', function(e, delta){
    // 0보다 크면 위로, 0보다 작으면 아래로
    if(delta>0){
        var prev = $(this).prev().offset().top
        $('html').stop().animate({
            scrollTop:prev
        }, 500,  'linear')
    } else if (delta<0) {
        var next = $(this).next().offset().top
        $('html').stop().animate({
            scrollTop:next
        }, 500, 'linear')
    }
})

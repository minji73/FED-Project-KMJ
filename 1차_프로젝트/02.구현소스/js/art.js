// art.js
console.log('난 art야~!!');

setTimeout(()=>{

    window.scrollTo(0,0);
},500)

// 대상: 이미지
const $imgBox = $('.main-img');
// 타이틀 박스
const $titBox = $('.title');

$(window).scroll(()=>{
    let scTop = $(window).scrollTop();
    console.log(scTop);
    if(scTop > 300){
        console.log('ㅋㅋㅋ');
        $imgBox.css({left:'0',width:'100%'});
        $titBox.css({scale:'.5'});
    }
    else if(scTop > 0){
        $imgBox.css({left:'70%',top:'85%',translate:'0 0'});
        $titBox.css({marginTop:'-39%'});
    }
})
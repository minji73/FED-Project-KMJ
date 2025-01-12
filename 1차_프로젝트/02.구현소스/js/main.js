import { voteData } from "./data.js";
// exhibition swiper js
$(() => {
  // exhibition swiper
  const swiper = new Swiper(".ex-slide", {
    // 스와이퍼 여러개 쓰는 경우를 대비해서 구분하는 클래스 하나 주기!
    // Optional parameters
    direction: "horizontal", // horizontal > 가로방향드래그, vertical > 세로방향드래그
    // loop: true, // 슬라이드가 끝난 후 처음으로 돌아가면 true, 아니면 false
    slidesPerView: 3, // 한번에 보여 줄 슬라이드 수
    spaceBetween: 25, // 슬라이드간의 간격

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, // 이전, 다음 버튼 원하면 추가
  });

  // mouseover bg
  const infoArea = $(".info-area");
  infoArea.on("mouseover", function () {
    $("body").addClass("pink");
  });

  infoArea.on("mouseleave", function () {
    $("body").removeClass("pink");
  });

  // mouseover bg 살구
  const locatArea = $(".locat-area");
  locatArea.on("mouseover", function () {
    $("body").addClass("apricot");
  });

  locatArea.on("mouseleave", function () {
    $("body").removeClass("apricot");
  });

  // vote scroll ani js
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // entry의 target으로 DOM에 접근합니다.
      const $target = entry.target;
      // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤 합니다.
      if (entry.isIntersecting) {
        setTimeout(function(){
          $target.classList.add("on");
        }, 1000);
      } else {
        $target.classList.remove("on");
      }
    });
  });
  // 옵저버할 대상 DOM을 선택하여 관찰을 시작합니다.
  const $item = document.querySelector(".vcard .card-list");
  io.observe($item);
  // 특정 요소만 옵저버를 해제합니다.
  // io.unobserve(targetElement);
  // 옵저버 전체를 해제합니다.
  // io.disconnect();

  // 팝업
  // 1. 대상선정
  // .popup1, .popup1 .close, .card-list>li
  // let -> 값이 변할때
  // const -> 값이 변하지 않을때
  const $popup1 = $(".popup1"); // 팝업
  const $card = $(".card-list>li"); // 카드 (열기)
  const $pop1Close = $(".close"); // 닫기버튼 (닫기)

  

  // 2. 이벤트
  $card.click(function(){
    // 클릭했을 때 실행될 코드
    $popup1.addClass("open");
    let idx = $(this).index();
    console.log(idx);
    
    $(".popup1 .artist").text(voteData[idx].artist);
    $(".popup1 .name").text(voteData[idx].name);
    $(".popup1 .size").text(voteData[idx].size);
    $(".popup1 .method").text(voteData[idx].method);
    $(".popup1 .material").text(voteData[idx].material);
    $(".popup1 .edition").text(voteData[idx].edition);
    $(".popup1 .explain").text(voteData[idx].explain);
    $(".popup1 .img>img").attr("src", `./img/vote${idx+1}.png`); 
    $(".overlay").addClass("on").click(()=>{$pop1Close.trigger('click')});
    $("body").css({overflow: "hidden"});
  });

  $pop1Close.click(function(){
    // 클릭했을 때 실행될 코드
    $popup1.removeClass("open");
    $(".overlay").removeClass("on");
    $("body").css({overflow: "visible"});
  });


  // 팝업2
  // 1. 대상선정
  // .popup1, .popup1 .close, .card-list>li
  // let -> 값이 변할때
  // const -> 값이 변하지 않을때
  const $popup2 = $(".popup2"); // 팝업
  const $newletter = $(".newsletter"); // 카드 (열기)
  const $pop2Close = $(".popup2 .close");
  
  $newletter.click(function(){
    // 클릭했을 때 실행될 코드
    $popup2.addClass("open");
    $(".overlay").addClass("on").click(()=>{$pop1Close.trigger('click')});
    $("body").css({overflow: "hidden"});
  });

  $pop2Close.click(function(){
    // 클릭했을 때 실행될 코드
    $popup2.removeClass("open");
  });

  $(".popup2 .submit").click(() => {
    let $firstName = $("#firstName").val(),
      $lastName = $("#lastName").val(),
      $email = $("#email").val();
    
      if($firstName == "" || $lastName == "" || $email == "") {
        alert("Please fill out the fields")
      } else {
        alert("Submit Success!");
        $popup2.removeClass("open");
        $(".overlay").removeClass("on");

      }
  });
});

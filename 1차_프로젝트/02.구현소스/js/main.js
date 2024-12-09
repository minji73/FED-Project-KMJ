// exhibition swiper js
$(() => {
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
});

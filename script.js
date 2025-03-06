document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  let aniBox = document.querySelectorAll('.aniBox');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top top',
      end: '+=400%', //시작점에서 400%까지 스크롤한 후 종료
      pin: true,
      scrub: 3, //1~3 3이 제일 부드러움
      markers: false,
    },
  });

  tl.from(aniBox, { y: '400%', duration: 8, ease: 'none', stagger: 6 }); //stagger는 각각 애니메이션에 시간차를 둠
  tl.to(aniBox, { y: 0 });
});

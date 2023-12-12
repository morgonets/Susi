//  $(document).ready(function(){
//         var isVisible = false;
  
//         $("#mainElement").on("click" ,function(){
//           if (isVisible) {
//             $("#element1, #element2").fadeOut();
//           } else {
//             $("#element1, #element2").fadeIn();
//           }
//           isVisible = !isVisible;
//         });
//       });

$(document).ready(function(){
  $("#popupBtn").click(function(){
    $("#popup").fadeToggle();
  });
});

$(document).ready(function(){
  $('.slider').slick({
    // Настройки слайдера
    autoplay: true, // Автоматическое воспроизведение слайдов
    autoplaySpeed: 2000 // Время между слайдами в миллисекундах
  });
});

function goindex1() {
  window.location.href = 'job.html';
}
function goindex3() {
  window.location.href = 'Regist.html';
}
function goindex4() {
  window.location.href = 'Login.html';
}
$(document).ready(function() {
		wow = new WOW({
		   boxClass:     'wow',      // default
		   animateClass: 'animated', // default
		   offset:       200,          // default
		   mobile:       true,       // default
		   live:         true        // default
		})
		wow.init();
		$("#menu").on("click","a", function (event) {
	      //отменяем стандартную обработку нажатия по ссылке
	      event.preventDefault();
	      //забираем идентификатор бока с атрибута href
	      var id  = $(this).attr('href'),
	      //узнаем высоту от начала страницы до блока на который ссылается якорь
	      top = $(id).offset().top;
	      //анимируем переход на расстояние - top за 1500 мс
	      $('body,html').animate({scrollTop: top}, 1500);
	   });
	   //fixed heeader
		$("#menu").removeClass("default");
		$(window).scroll(function(){
			if ($(this).scrollTop() > 200) {
				$("#menu").addClass("default").fadeIn('fast');
			} else {
				$("#menu").removeClass("default").fadeIn('fast');
			};
		});
		//при навидении сменить класс "Skills"
		$(function(){
			$('.photoshop, .html_css, .bootstrap, .adaptive, .sass, .js').hover(function(){
				$(this).toggleClass('hover')
			});
		});
});
let	prev = document.querySelector('.prev'),
	next = document.querySelector('.next');

var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	responsive: {
		320: {
			nav: true,
			navContainer: true
		},
		576: {
			nav: false
		}
	}
}); 

prev.addEventListener("click", function() {
	slider.goTo("prev");
});

next.addEventListener("click", function() {
	slider.goTo("next");
});

$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	}); 
	
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on("click", function(e) {
				e.preventDefault();
				$(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
				$(".catalog-item__details").eq(i).toggleClass("catalog-item__details_active");
			});	
		});
	};
	
	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__back");
	
	// Modal
	$("[data-modal='consultation']").on("click", function() {
		$(".overlay, #consultation").fadeIn(1500);
	});
	
	$(".modal__close").on("click", function() {
		$(".overlay, #consultation, #order, #thanks").fadeOut("slow");
	});

	$(".button_buy").each(function(i) {
		$(this).on("click", function() {
			$("#order .modal__description").text($(".catalog-item__subtitle").eq(i).text());
			$(".overlay, #order").fadeIn(1000);
		});
	});
	
	// Form validate
	// $(".feed-form").validate();
	function validateForm(form) {
		$(form).validate({
			rules: {
				name:  {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Введите имя",
					minlength: jQuery.validator.format("At least {0} characters!")
				},
				phone: "Пожалуйста, введите телефон",
				email: {
					required: "Пожалуйста, введите почту",
					email: "Неверный адрес почты"
				}
			}
		});
	};
	
	validateForm("#consultation-form");
	validateForm("#consultation form");
	validateForm("#order form");
	
	$("input[name='phone']").mask("+7 (999) 999-99-99", {placeholder: ""});
	
	$("form").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			
			$("form").trigger("reset");
		});
		return false;
	});
	
	// Плавная прокрутка
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$(".pageup").fadeIn("slow");
		} else {
			$(".pageup").fadeOut();
		}
	});
	
	$("a[href='#up']").click(function() {
		const _href = $(this).attr("href");
		
		$("html, body").animate({scrollTop: $(_href).offset().top + "px"});
		return false;
	});
	
	new WOW().init();
});  
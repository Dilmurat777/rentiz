const burger = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const body = document.body
const buttonBtn = document.querySelector('.gallery__link')
const overlay = document.querySelector('.overlay')
const overlayClose = document.querySelector('.overlay__close')





if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock')
	})
}


buttonBtn.addEventListener('click', () => {
	overlay.style.display = 'flex';
})

overlayClose.addEventListener('click', () => {
	overlay.style.display = 'none'

})
overlay.addEventListener('click', () => {
	if (event.target.classList.contains('overlay')) {

		overlay.style.display = 'none'
	}

})



// ---- filter dropdown

const filter = document.querySelector('.filter')

if (filter) {
	const items = filter.querySelectorAll('.blog-filter')

	items.forEach(item => {
		item.addEventListener('click', () => {
			item.querySelector('.blog-filter__dropdown').classList.toggle('_active')
			item.querySelector('.blog-filter__icon').classList.toggle('_active')

			if (event.target.classList.contains('blog-filter__item')) {
				item.querySelector('.blog-filter__value').textContent = event.target.textContent;
			}
		})
	})
}


const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {

		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		},
	}
});

const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	// loop: true,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-reviews__next',
		prevEl: '.slider-reviews__prev',
	},
	// breakpoints: {

	// 	992: {
	// 		slidesPerView: 3,
	// 	},
	// 	660: {
	// 		slidesPerView: 2,
	// 	},
	// }
});

const galleryItems = document.querySelectorAll(".gallery__item")

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}



let im = new Inputmask('+\\9\\96(999)99-99-99')

let formTel = document.querySelector('#tel')

im.mask(formTel)

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('section.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


$(window).on('scroll', function () {

	if ($(this).scrollTop() > 20) {
		$('.go-top').fadeIn('slow')
	} else {
		$('.go-top').fadeOut('slow')
	}
})
window.addEventListener("DOMContentLoaded", () => {
	let reasonsItem = document.querySelectorAll(".reasons__item"),
		customersItem = document.querySelectorAll(".customers__item"),
		featuresImg = document.querySelectorAll(".features__img"),
		teamCard = document.querySelectorAll(".team__card"),
		priceCard = document.querySelectorAll(".price__card");
	
	let i = 1;
	
	reasonsItem.forEach(function(item) {
		if (isElementInViewport(item)) {
			item.style.animation = "appear" + i + " 1.5s";
			item.style.opacity = 1;
			i++;
		}
	});
	
	featuresImg.forEach(function(item) {
		if (isElementInViewport(item)) {
			item.style.animation = "appearSlide 1s";
			item.style.borderRadius = "0";
			item.style.transform = "scale(1)";
		}
	});
	
	customersItem.forEach(function(item, i) {
		if (isElementInViewport(item)) {
			if (i % 2 === 0) {
				item.style.animation = "appearOdd 1.5s";
			} else {
				item.style.animation = "appearEven 1.5s";
			}
			
			item.style.opacity = 1;
		}
	});
	
	teamCard.forEach(function(item) {
		if (isElementInViewport(item)) {
			item.style.animation = "appear" + i + " 1.5s";
			i += 2;
			item.style.opacity = 1;
		}
	});
});

let scrollPosition = 0;

function isElementInViewport(elem) {
	let rect = elem.getBoundingClientRect();

	return (
		(rect.top >= 0) &&
		(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
	);
}

window.addEventListener("scroll", () => {
	let scrollProgress = document.documentElement.scrollTop || window.pageYOffset,
		documentHeightTop = document.documentElement.getBoundingClientRect().top,
		documentHeight = document.documentElement.getBoundingClientRect().height,
		positionElem = documentHeightTop / documentHeight * 100,
		reasonsItem = document.querySelectorAll(".reasons__item"),
		customersItem = document.querySelectorAll(".customers__item"),
		featuresImg = document.querySelectorAll(".features__img"),
		teamCard = document.querySelectorAll(".team__card"),
		priceCard = document.querySelectorAll(".price__card");
		
	function currentPosition(elem) {
		let windowVerticalScroll = window.scrollY;
		
		return (elem.getBoundingClientRect().top - windowVerticalScroll);
	}
	
	if (scrollProgress > scrollPosition) {
		let i = 1;
		
		reasonsItem.forEach(function(item) {
			if (currentPosition(item) <= 0) {
				item.style.animation = "appear" + i + " 1.5s";
				item.style.opacity = 1;
			}
			i++;
		});
		
		featuresImg.forEach(function(item) {
			if (isElementInViewport(item)) {
				item.style.animation = "appearSlide 1s";
				item.style.borderRadius = "0";
				item.style.transform = "scale(1)";
			}
		});
		
		customersItem.forEach(function(item, i) {
			if (currentPosition(item) <= 0) {
				if (i % 2 === 0) {
					item.style.animation = "appearOdd 1.5s";
				} else {
					item.style.animation = "appearEven 1.5s";
				}
				
				item.style.opacity = 1;
			}
		});
		
		i = 1;
		teamCard.forEach(function(item) {
			if (isElementInViewport(item)) {
				item.style.animation = "appear" + i + " 1.5s";
				i += 2;
				item.style.opacity = 1;
			}
		});
		
		i = 1;
		priceCard.forEach(function(item) {
			if (isElementInViewport(item)) {
				item.style.animation = "appear" + i + " 1.5s";
				item.style.opacity = 1;
			}
			i++;
		});
		
	} else {
		let i = 1;
		
		reasonsItem.forEach(function(item) {
			if ((currentPosition(item) > 0) && (!(isElementInViewport(item)))) {
				item.style.animation = "disappear" + i + " 1.5s";
				item.style.opacity = 0;
				i++;
			}
		});
		
		customersItem.forEach(function(item, i) {
			if ((currentPosition(item) > 0) && (!(isElementInViewport(item)))) {
				if (i % 2 === 0) {
					item.style.animation = "disappearOdd 1.5s";
				} else {
					item.style.animation = "disappearEven 1.5s";
				}
				
				item.style.opacity = 0;
			}
		});
	}
	
	scrollPosition = scrollProgress;
});
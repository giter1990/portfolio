window.addEventListener("DOMContentLoaded", () => {
	let organizer = document.querySelector(".organizer"),
		snowlake = document.querySelector(".snowlake-top"),
		nick = document.querySelector(".nick"),
		year = document.querySelector(".christmas__body_year"),
		bodyDoc = document.querySelector("#main"),
		scrollPage = window.pageYOffset,
		positionOrganizer = -50,
		address = document.querySelector(".footer_address"),
		iconList = document.querySelector(".footer_icon-list"),
		
		id = setInterval(() => {
			organizer.style.left = positionOrganizer + "%";
			positionOrganizer = positionOrganizer + 2;
			if (organizer.style.left == "0%") {
				clearInterval(id);
			};
		}, 50),
		rotationSnowlake = 1,
		id2 = setInterval(() => {
			snowlake.style.transform = "scale(" + rotationSnowlake + ", 1)";
			rotationSnowlake = rotationSnowlake - 0.1;
			if (snowlake.style.transform == "scale(-1, 1)") {
				clearInterval(id2);
			}
		}, 80);
		
		nick.addEventListener("mouseover", () => {
			nick.style.letterSpacing = "2.5px";
		});
		
		nick.addEventListener("mouseout", () => {
			nick.style.letterSpacing = "initial";
		});
		
		iconList.addEventListener("click", () => {
			/* address.style.display = "block";
			address.style.order = "3";
			iconList.style.order = "2"; */
			if (address.style.display == "block") {
				address.style.display = "none";
				address.style.order = "2";
				iconList.style.order = "3";
			} else {
				address.style.display = "block";
				address.style.order = "3";
				iconList.style.order = "2";
			}
		});
		
		console.log(scrollPage);
		
		/* if (scrollPage > 500) {
			year.style.transform = "scale(1.5)";
		} */ // Один вариант...
		
		/* window.addEventListener("scroll", function() {
			// bodyDoc.innerHTML = pageYOffset + 'px';
			if (pageYOffset > 500) {
				year.style.transform = "scale(1.5)";
			}
		}); */ // ... и второй вариант прокрутки, работающие только при перезагрузке страницы
});


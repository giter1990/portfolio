window.addEventListener("DOMContentLoaded", () => {
	let mapBody = document.querySelector(".map__body"),
		mapDialog = document.querySelector(".map__dialog"),
		mapModal = document.querySelector(".map__modal");
	
	mapBody.addEventListener("click", () => {
		mapBody.classList.toggle("africa");
		mapModal.classList.toggle("display");
		mapDialog.classList.toggle("display");
	});
});
window.addEventListener("DOMContentLoaded", () => {
	let progressBar1 = document.querySelector("#ui-ux"),
		progressBar2 = document.querySelector("#web"),
		progressBar3 = document.querySelector("#seo"),
		digitProgress = document.querySelectorAll(".skills span"),
		arrayBar = [progressBar1, progressBar2, progressBar3], 
		arrayValue = [75, 90, 65];
		
	function updateProgressBar(progressBar, percentage, number) {
		let curr = progressBar.value,
			update = setInterval(function() {
				if (curr > percentage) {
					curr--;
					clearInterval(update);
				}
				
				progressBar.value = curr;
				number.innerHTML = curr + "%";
				curr++;
			}, 100);			
	}
	
	for (let i = 0; i < digitProgress.length; i++) {
		updateProgressBar(arrayBar[i], arrayValue[i], digitProgress[i]);
	}
});
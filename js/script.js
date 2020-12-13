window.addEventListener("DOMContentLoaded", () => {
	let progressBar1 = document.getElementById('progress_PHP'),
		progressBar2 = document.getElementById('progress_HTML5'),
		progressBar3 = document.getElementById('progress_JavaScript'),
		progressBar4 = document.getElementById('progress_Photoshop'),
		array = [progressBar1, 86, progressBar2, 95, progressBar3, 51, progressBar4, 76];

	function updateProgressBar(progressBar, percentage) {
		let curr = progressBar.value,
			update = setInterval(function() {
				if (curr > percentage) {
					clearInterval(update);
				}
				
				progressBar.value = curr++;
			}, 3);
	}
	
	for (let i = 0; i < array.length; i++) {
		updateProgressBar(array[i], array[i + 1]);
	}
});
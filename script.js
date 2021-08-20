const slider = document.querySelector(".slider");
const timeSliderContainer = document.querySelector(".time-slider-container");
const imgContainer = document.querySelector(".after-img-container");

let mouseIsDown = false;

timeSliderContainer.addEventListener(
	"mousemove",
	(event) => {
		if (mouseIsDown) {
			const containerWidth = timeSliderContainer.offsetWidth;
			const rect = timeSliderContainer.getBoundingClientRect();

			currentX = event.clientX - rect.left;
			currentX =
				currentX > containerWidth
					? containerWidth
					: currentX < 0
					? 0
					: currentX;

			const newWidth = Math.abs((currentX / containerWidth) * 100 - 100);

			imgContainer.style.setProperty("--container-width", `${newWidth}%`);
		}
	},
	true
);

slider.addEventListener(
	"mousedown",
	() => {
		mouseIsDown = true;
	},
	true
);

slider.addEventListener(
	"mouseup",
	() => {
		mouseIsDown = false;
	},
	true
);

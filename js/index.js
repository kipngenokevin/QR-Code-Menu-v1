var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

		if (isSafari) {
			var videos = document.getElementsByClassName("video");
			for (var i = 0; i < videos.length; i++) {
				videos[i].style.display = "none";
			}
		} else {
			var imgs = document.getElementsByClassName("img");
			for (var j = 0; j < imgs.length; j++) {
				imgs[j].style.display = "none";
			}
		}


		window.addEventListener("DOMContentLoaded", function () {
				var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				var slideshows = document.querySelectorAll("#artcaffe-market-slideshow");

				slideshows.forEach(function (slideshow) {
					var slideIndex = 0;
					var slides = isSafari ? slideshow.querySelectorAll(".img") : slideshow.querySelectorAll(".video");

					function nextSlide() {
						slides[slideIndex].classList.remove("active");
						slideIndex = (slideIndex + 1) % slides.length;
						slides[slideIndex].classList.add("active");
					}

					setInterval(nextSlide, 9000);
				});
		});
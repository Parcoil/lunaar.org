document.addEventListener("DOMContentLoaded", () => {
	let prxurl = sessionStorage.getItem("lpurl");
	let frame = document.getElementById("frame");
	let rawurl = sessionStorage.getItem("rawurl");

	let nav = document.querySelector(".navbar");
	let inspectstate = false;
	const address = document.getElementById("proxy-address");

	if (address && rawurl) {
		address.value = rawurl;
	}

	if (nav) {
		nav.remove();
	}

	if (frame) {
		frame.src = prxurl;

		function prxback() {
			frame.contentWindow.history.back();
		}

		function prxfoward() {
			frame.contentWindow.history.forward();
		}

		function prxrefresh() {
			frame.contentWindow.location.reload();
		}
		function prxinspect() {
			if (inspectstate) {
				eruda.hide();
				inspectstate = false;
			} else {
				eruda.init();
				eruda.show();
				inspectstate = true;
			}
		}

		function prxhome() {
			window.location = /./;
		}

		function prxfullscreen() {
			if (frame.requestFullscreen) {
				frame.requestFullscreen();
			} else if (frame.mozRequestFullScreen) {
				frame.mozRequestFullScreen();
			} else if (frame.webkitRequestFullscreen) {
				frame.webkitRequestFullscreen();
			} else if (frame.msRequestFullscreen) {
				frame.msRequestFullscreen();
			}
		}

		function prxwindow() {
			const url = frame.src;
			cloak.aboutBlank(url);
			// let newWindow = window.open("about:blank", "_blank");
			// if (newWindow) {
			// 	newWindow.document.write(
			// 		`<iframe src="${frame.src}" frameborder="0" style="width: 100%; height: 100%;"></iframe>`,
			// 	);
			// 	newWindow.document.close();
			// }
		}

		window.prxback = prxback;
		window.prxfoward = prxfoward;
		window.prxrefresh = prxrefresh;
		window.prxhome = prxhome;
		window.prxfullscreen = prxfullscreen;
		window.prxinspect = prxinspect;
		window.prxwindow = prxwindow;

		fetchSearchEngine();
	}
});

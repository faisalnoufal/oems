document.body.onload = webadder;

WebFont.load({
	google: {
		families: ["Raleway:100,400,700"],
	},
});

function webadder() {
	let atag = document.createElement("a");
	let link = document.createTextNode("webAdder");

	atag.appendChild(link);
	atag.href = "https://webadder.com";
	atag.target = "_blank";
	atag.title = "Design, Develop and Deploy";
	atag.style.cssText =
		"color:white;position:fixed;text-decoration:none;font-family: Raleway, sans-serif;;font-size:10px;bottom:0;right:0;background-image: linear-gradient( to right, #9966ff 0%, #3399ff 51%, #669999 100% );border-radius:3px 0 0 0;padding:0 2px";
	document.body.appendChild(atag);

	atag.onmouseover = function () {
		atag.style.color = "black";
	};
	atag.onmouseout = function () {
		atag.style.color = "white";
	};
}

// Messenger Chat plugin Code

window.fbAsyncInit = function () {
	FB.init({
		xfbml: true,
		version: "v10.0",
	});
};

(function (d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
	fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// Your Chat plugin code

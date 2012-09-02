var url = window.webkitIntent.data;
document.querySelector('span').innerText = url;


document.querySelector("button").onclick = function() {
	window.webkitIntent.postResult(url);
}
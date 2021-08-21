function handsome() {
	mui.alert("哥就是这么帅！");
}

function Reset() {
	document.getElementById('val').value = null;
	mui.toast('清空成功', {
		duration: 'short',
		type: 'div'
	});
}

function getQueryVariable(url, variable) {
	var query = url.split("?")[1];
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

var data_index = "1";
var list = document.querySelector('.mui-table-view.mui-table-view-radio');
list.addEventListener('selected', function(e) {
	data_index = e.target.dataset.index;
});

function Query() {
	var input_data = document.getElementById("val").value;
	if (input_data) {
		if (input_data.split(".")[0] == "https://m" && input_data.split(".")[1] == "v" && input_data.split(".")[2] ==
			"qq" && input_data.split(".")[3].split("/")[0] == "com") {
			input_data = "https://v.qq.com/x/cover/" + getQueryVariable(input_data, "cid") + "/" + getQueryVariable(
				input_data, "vid") + ".html";
			console.log(input_data);
		}
		switch (data_index) {
			case "1":
				document.getElementById("card").style.display = "block";
				document.getElementById("ifrm").src = "https://okjx.cc/?url=" + input_data;
				break;
			case "2":
				document.getElementById("card").style.display = "block";
				document.getElementById("ifrm").src = "https://jx.quanmingjiexi.com/?url=" + input_data;
				break;
			case "3":
				document.getElementById("card").style.display = "block";
				document.getElementById("ifrm").src = "https://17kyun.com/api.php?url=" + input_data;
				break;
			default:
				mui.alert("程序错误，请重新再试！");
				break;
		}
	}
}

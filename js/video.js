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

var data_index = "1";
var list = document.querySelector('.mui-table-view.mui-table-view-radio');
list.addEventListener('selected', function(e) {
	data_index = e.target.dataset.index;
});

function Query() {
	var input_data = document.getElementById("val").value;
	if (input_data) {
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

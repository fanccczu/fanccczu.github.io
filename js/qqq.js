var data_index = "1";
var list = document.querySelector('.mui-table-view.mui-table-view-radio');
list.addEventListener('selected', function(e) {
	data_index = e.target.dataset.index;
});
function handsome(){
			mui.alert("哥就是这么帅！");
		}
function Set(){
	var input_data = document.getElementById("val").value;
	if(input_data){ 
		switch(data_index){
			case "1":
				window.open('https://api.uomg.com/api/qq.talk?qq=' + input_data);
				break;
			case "2":
				window.location.replace('https://api.uomg.com/api/qq.joingroup?qid=' + input_data);
				break;
			default:
				mui.alert("程序错误，请重新再试！");
				break;
		}
	}else{
		mui.alert("请输入QQ号/群号！");
	}
}
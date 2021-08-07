var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
function Init_visitData(){
			xhr.open('GET', 'https://api.uomg.com/api/visitor.info?skey=visit', true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send();
			xhr.onreadystatechange = function() {
			    if (xhr.readyState == 4 && xhr.status == 200) {
					var data_json = JSON.parse(xhr.responseText);
					if(data_json["code"] == 1){
						document.getElementById('now').innerText = data_json["time"];
						document.getElementById('ip').innerText = data_json["ip"];
						document.getElementById('system').innerText = data_json["system"];
						document.getElementById('ua').innerText = data_json["browser"];
						document.getElementById('info_card').style.display = "block";
					}else{
						mui.toast('信息获取失败',{ duration:'short', type:'div' });
					}
			    }
			};
		}
function ReSetImg(){
	window.location.reload();
}
function ReSetImgByJson(){
	xhr.open('GET', 'https://api.uomg.com/api/rand.img3?format=json', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && xhr.status == 200) {
			var data_json = JSON.parse(xhr.responseText);
			if(data_json["code"] == 1){
				document.getElementById('show').src = data_json["imgurl"];
			}
	    }
	};
}
function qq_warning(){
	mui.alert('请在QQ客户端或浏览器打开！')
}

function confirm_password(key){
	var btnArray = ['确定', '取消'];
	mui.prompt('请输入功能模块密码：', '提示：看看javascript函数', '警告', btnArray, function(e) {
		if (e.index == 0) {
			if(e.value == '1571025887'){
				window.location.href = './' + key + '.html';
				mui.toast('密码正确',{ duration:'short', type:'div' });
			}else{
				mui.toast('密码错误',{ duration:'short', type:'div' });
			}
		} else {
			mui.toast('操作取消',{ duration:'short', type:'div' });
		}
	})
}
function handsome(){
			mui.alert("哥就是这么帅！");
		}
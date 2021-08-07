var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
var base_check = { "username": "danny", "password": "11080726" };
function Init_visitData(){
	var no = null;
	var url = location.search;
	if(url.indexOf("?")!=-1){
		no = url.substr(1);
	}
	if(no == "no"){
		mui.alert("请先登录！");
	}
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
function handsome(){
	mui.alert("哥就是这么帅！");
		}
function link(){
	mui.alert("详情请联系管理员！");
}
function login(){
	var name = document.getElementById("account").value;
	var pwd = document.getElementById("password").value;
	if(name == base_check.username && pwd == base_check.password){
		mui.toast('登录成功！',{ duration:'short', type:'div' });
		setTimeout(function (){
			window.location.href = './page1.html?l';
		}, 1500);
	}else{
		mui.toast('密码错误！',{ duration:'short', type:'div' });
	}
}
function checkLogin(){
	var info = null;
	var url = location.search;
	if(url.indexOf("?")!=-1){
		info = url.substr(1);
	}
	if(info == null){
		document.body.style.display = "none";
		window.location.href = './index.html?no';
	}
}
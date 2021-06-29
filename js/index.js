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
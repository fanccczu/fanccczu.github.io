function handsome(){
			mui.alert("哥就是这么帅！");
		}
		function Reset(){
			document.getElementById('val').value = null;
			mui.toast('重置成功',{ duration:'short', type:'div' });
		}
		function warning(){
			mui.alert('仅供测试交流，严禁用于违法用途！');
		}
		var data_index = "1";
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = false;
		var list = document.querySelector('.mui-table-view.mui-table-view-radio');
		list.addEventListener('selected', function(e) {
			data_index = e.target.dataset.index;
		});
		function Query(){
			var input_data = document.getElementById("val").value;
			if(input_data){ 
				switch(data_index){
					case "1":
						xhr.open('GET', 'https://sgk.xyz/wbtxt-api.php?uid=' + input_data, true);
						xhr.send();
						xhr.onreadystatechange = function() {
						    if (xhr.readyState == 4 && xhr.status == 200) {
								var data = xhr.responseText.split('\n');
								if(data.length < 3){
									mui.alert(data[0]);
								}else{
									document.getElementById('res').innerHTML = null;
									document.getElementById('result').style.display = 'block';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data[0].split('uid:')[1] +')">UID:<span style="margin-left: 8px;">' + data[0].split('uid:')[1] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data[1].split('mobile')[1] +')">手机:<span style="margin-left: 8px;">' + data[1].split('mobile')[1] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data[2].split('location:')[1] +')">归属地:<span style="margin-left: 8px;">' + data[2].split('location:')[1] + '</span></li>';
								}
						    }
						};
						break;
					case "2":
						xhr.open('GET', 'https://sgk.xyz/wbfc-api.php?mobile=' + input_data, true);
						xhr.send();
						xhr.onreadystatechange = function() {
						    if (xhr.readyState == 4 && xhr.status == 200) {
								var data_json = JSON.parse(xhr.responseText);
								if(data_json["code"] == 200){
									document.getElementById('res').innerHTML = null;
									document.getElementById('result').style.display = 'block';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data_json["data"]["uid"] +')">UID:<span style="margin-left: 8px;">' + data_json["data"]["uid"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data_json["data"]["mobile"] +')">手机:<span style="margin-left: 8px;">' + data_json["data"]["mobile"] + '</span></li>';
									mui.toast('查询成功',{ duration:'short', type:'div' }) 
								}else if(data_json["code"] == 202){
									mui.alert(data_json["msg"]);
								}else{
									mui.alert("查询失败！");
								}
						    }
						};
						break;
					default:
						mui.alert("程序错误，请重新再试！");
						break;
				}
			}else{
				mui.alert("请输入查询参数！");
			}
		}
		function copy(text){
			var input = document.createElement('input');
			input.setAttribute('readonly', 'readonly');
			input.setAttribute('value', text);
			document.body.appendChild(input);
			input.select();
			input.setSelectionRange(0, 9999);
			document.execCommand('Copy');
			input.setAttribute('hidden', 'hidden');
			mui.toast('复制成功',{ duration:'short', type:'div' }) 
		}
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
						xhr.open('GET', 'http://api.qb-api.com/qb-api.php?mod=cha&qq=' + input_data, true);
						xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
						xhr.send();
						xhr.onreadystatechange = function() {
						    if (xhr.readyState == 4 && xhr.status == 200) {
								var data_json = JSON.parse(xhr.responseText);
								if(data_json["code"] == 200){
									document.getElementById('res').innerHTML = null;
									document.getElementById('result').style.display = 'block';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data_json["data"]["qq"] +')">QQ:<span style="margin-left: 8px;">' + data_json["data"]["qq"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data_json["data"]["mobile"] +')">手机:<span style="margin-left: 8px;">' + data_json["data"]["mobile"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell">归属地:<span style="margin-left: 8px;">' + data_json["place"]["province"] + data_json["place"]["city"] + '</span></li>';
									mui.toast('查询成功',{ duration:'short', type:'div' }) 
								}else if(data_json["code"] == 202){
									mui.alert(data_json["msg"]);
								}else{
									mui.alert("查询失败！");
								}
						    }
						};
						break;
					case "2":
						xhr.open('GET', 'http://api.qb-api.com/bq-api.php?mobile=' + input_data, true);
						xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
						xhr.send();
						xhr.onreadystatechange = function() {
						    if (xhr.readyState == 4 && xhr.status == 200) {
								var data_json = JSON.parse(xhr.responseText);
								if(data_json["code"] == 200){
									document.getElementById('res').innerHTML = null;
									document.getElementById('result').style.display = 'block';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data_json["data"]["qq"] +')">QQ:<span style="margin-left: 8px;">' + data_json["data"]["qq"] + '</span></li>';
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
					case "3":
						xhr.open('GET', 'http://api.qb-api.com/lolfc-api.php?name=' + input_data, true);
						xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
						xhr.send();
						xhr.onreadystatechange = function() {
						    if (xhr.readyState == 4 && xhr.status == 200) {
								var data_json = JSON.parse(xhr.responseText);
								if(data_json["code"] == 200){
									document.getElementById('res').innerHTML = null;
									document.getElementById('result').style.display = 'block';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ data_json["data"]["qq"] +');">QQ:<span style="margin-left: 8px;">' + data_json["data"]["qq"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ '\'' + data_json["data"]["name"] + '\'' +');">昵称:<span style="margin-left: 8px;">' + data_json["data"]["name"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell">区服:<span style="margin-left: 8px;">' + data_json["data"]["server"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell">注意:<span style="margin-left: 8px;">对比昵称和区服以确认是否为同一人。</span></li>';
									mui.toast('查询成功',{ duration:'short', type:'div' }) 
								}else if(data_json["code"] == 202){
									mui.alert(data_json["msg"]);
								}else{
									mui.alert("查询失败！");
								}
						    }
						};
						break;
					case "4":
						xhr.open('GET', 'http://api.qb-api.com/lol-api.php?mod=cha&qq=' + input_data, true);
						xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
						xhr.send();
						xhr.onreadystatechange = function() {
						    if (xhr.readyState == 4 && xhr.status == 200) {
								var data_json = JSON.parse(xhr.responseText);
								if(data_json["code"] == 200){
									document.getElementById('res').innerHTML = null;
									document.getElementById('result').style.display = 'block';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ input_data +')">QQ:<span style="margin-left: 8px;">' + input_data + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ '\'' + data_json["data"]["qq"] + '\'' +');">昵称:<span style="margin-left: 8px;">' + data_json["data"]["qq"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell" onclick="copy('+ '\'' + data_json["data"]["server"] + '\'' +');">区服:<span style="margin-left: 8px;">' + data_json["data"]["server"] + '</span></li>';
									document.getElementById('res').innerHTML += '<li class="mui-table-view-cell">注意:<span style="margin-left: 8px;">对比昵称和区服以确认是否为同一人。</span></li>';
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
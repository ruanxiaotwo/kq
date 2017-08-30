(function(){
		var arr = ["吕芸", "吕卓林", "朱姝尧", "孙宏坤", "孙浩淋", "孙益素", "孙旭诚", "吕昊", "朱梦荫", "朱元璋", "孙瑞杰", "孙嘉铭", "孙思达", "朱馨钰", "孙志红", "孙江宁", "吕佳璇", "孙嘉蔓", "吕良珊", "朱书君", "孙书贤", "吕艺杉", "吕子函", "吕徽", "朱雅宁", "吕金航", "朱秀华", "朱子轩", "吕含琦", "朱沁轩", "朱玲玲", "孙晋伟", "吕子楠", "吕歆洁", "孙琼霞", "孙易", "朱明轩", "吕鹏飞", "孙迪", "朱凌宇", "朱宇轩", "吕思伟", "朱悠然", "吕汉男", "朱怿", "吕次宏", "孙凯文", "孙嘉睿", "吕静", "朱雪玲", "孙雨菡", "吕煜", "孙家安", "孙思涵", "朱鸿飞", "孙雪慧", "朱美燕", "吕婉辰", "吕延阳", "孙利", "孙煜程", "朱成超", "孙博轩", "孙子涵", "朱书军", "孙烨", "朱颖", "吕晓泉", "朱彦冰", "吕晓光", "吕诗淇", "朱雪仪", "孙振", "吕浩南"];
		var personNum = document.getElementById('personNum');
		var personName = document.getElementsByClassName('personName')[0];
		var audio = document.getElementsByTagName('audio')[0];
		var oCheck = document.getElementById('startCheck');
		var person = document.getElementsByClassName('person')[0];
		var personCheck = document.getElementsByClassName('personCheck')[0];
		var checkNum = 0;
		personNum.innerHTML = arr.length;
		oCheck.onclick = function () {
			var oNum = document.getElementById('num');
			if(!oNum.value || isNaN(parseInt(oNum.value))){
				alert('输入正确数字!!');
				return false;
			}else{
				var num = parseInt(oNum.value);
				if(num > arr.length || num<0){
					alert('输入正确数字!!');
					return false;
				}else{
					checkNum = num;
					document.getElementsByClassName('content')[0].classList.add("up");
					document.getElementsByClassName('body-left')[0].style.left = "0";
					document.getElementsByClassName('body-right')[0].style.right = "0";
					next(false);
				}
			}
		}
		function next(isforgive){
			var oldPerson = personName.innerHTML;
			if(checkNum>0){
				var i = Math.random()*arr.length | 0;
				var value = arr.splice(i,1)[0];
				personName.innerHTML = value;
				if(value.match(/[a-zA-Z]+$/)){
					audio.src = "http://fanyi.baidu.com/gettts?lan=en&text="+value+"&spd=3&source=web";
				}else{
				audio.src = "http://fanyi.baidu.com/gettts?lan=zh&text="+encodeURI(value)+"&spd=5&source=web";
				}
			}
			if(isforgive){
					person.innerHTML += oldPerson+"&nbsp;";
				};
			if(--checkNum < 0){
					personCheck.innerHTML = "<button class=\"aaa\">点名结束</button>";
			}

		}
		audio.onerror = function(){
			var src = this.src;
			this.src = src;
		}
		personName.onclick = function(){
			audio.load();
		}
		personCheck.children[0].onclick = next.bind(null,false);
		personCheck.children[1].onclick = next.bind(null,true);
	})();
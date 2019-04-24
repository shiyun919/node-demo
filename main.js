    myButton.addEventListener('click', (e)=>{
	let request = new XMLHttpRequest() //声明XMLHttpRequest对象
	request.onreadystatechange = ()=>{
	 if(request.readyState === 4){
		 console.log('请求响应都完毕了')
	    if(request.status >= 200 && request.status < 300){
		    console.log('说明请求成功')
		    console.log(typeof request.responseText)
		    console.log(request.responseText)
		    let string = request.responseText
		    //把符合JSON语法的字符串
		    //转换成JS对应的值
		    let object = window.JSON.parse(string)
		    console.log(typeof object)
		    console.log(object)
		    console.log('object.note')
		    console.log(object.note)
		    console.log('object.note.from')
		    console.log(object.note.from)
	    }else if(request.status >= 400){
	            console.log('说明请求失败')
	    }
          }
	}
	request.open('GET','/xxx')   //配置request的请求类型及路径
	request.send()	
    })

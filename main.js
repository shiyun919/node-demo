    




//封装前的AJAX请求与响应
 //myButton.addEventListener('click', (e)=>{
//	let request = new XMLHttpRequest() //声明XMLHttpRequest对象
//	request.onreadystatechange = ()=>{
//	 if(request.readyState === 4){
//		 console.log('请求响应都完毕了')
//	    if(request.status >= 200 && request.status < 300){
//		    console.log('说明请求成功')
//		    console.log(typeof request.responseText)
//		    console.log(request.responseText)
//		    let string = request.responseText
		    //把符合JSON语法的字符串
		    //转换成JS对应的值
//		    let object = window.JSON.parse(string)
//		    console.log(typeof object)
//		    console.log(object)
//		    console.log('object.note')
//		    console.log(object.note)
//		    console.log('object.note.from')
//		    console.log(object.note.from)
//	    }else if(request.status >= 400){
//	            console.log('说明请求失败')
//	    }
//         }
//	}
//	request.open('GET','/xxx')   //配置request的请求类型及路径
//	request.send()	
//    })







//封装后的AJAX请求与响应

window.jQuery = function(){}


window.$ = window.jQuery

window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){
		
	let request = new XMLHttpRequest()
	request.open(method, url)
	for(let key in headers){
		let value = headers[key]
		console.log(key,value)
		request.setRequestHeader(key,value)
	}

	request.onreadystatechange = function(){
	    if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
	           successFn.call(undefined, request.responseText)
	    }else if(request.status >= 400){
	           failFn.call(undefined, request)
	    }
	    
	  }
	}
        request.send(body)
}


myButton.addEventListener('click', (e)=>{
     window.jQuery.ajax({
     	url:'/xxx',
	method:'get',
	headers:{
		'content-type':'application/x-www-form-urlencoded',
		'frank':'18'
	},
	successFn: function(x){console.log(x)},
	failFn:function(x){console.log(x)}     
     })

})






//引入jQuery库，按Promise规范封装

//function success(responseText){
//	console.log(responseText)
//}

//function fail(request){
//	console.log(request)
//}

//myButton.addEventListener('click', function(){
//	$.ajax({
//	  url:'/frank',
//	  method:'get',
//	}).then(success,fail)

//})

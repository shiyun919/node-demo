

//按Promise规范封装后的AJAX请求与响应

window.jQuery = function(){}


window.$ = window.jQuery

//window.Promise = function(fn){
	//...
//	return {
//		then: function(){}
//	}
//}

window.jQuery.ajax = function({url, method, body, headers}){
	return new Promise(function(resolve, reject){
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
					resolve.call(undefined, request.responseText)
				}else if(request.status >= 400){
					reject.call(undefined, request)
				}
			
			}
		}
		request.send(body)
	})	
}


myButton.addEventListener('click', (e)=>{
   let Promise =  window.jQuery.ajax({
		url:'/xxx',
		method:'get',
		headers:{
			'content-type':'application/x-www-form-urlencoded',
			'frank':'18'
		}  
	})
	Promise.then(
		function(text){console.log(text)},
		function(request){console.log(request)}
	)

})







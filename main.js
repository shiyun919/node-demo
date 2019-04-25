

//按Promise规范封装后的AJAX请求与响应

window.jQuery = function(){}


window.$ = window.jQuery

window.Promise = function(fn){
	//...
	return {
		then: function(){}
	}
}

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
		function(responseText){console.log(responseText)},
		function(request){console.log(request)}
	)

})






//引入jQuery库，按Promise规范写AJAX

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

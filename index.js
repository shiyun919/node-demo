window.jQuery = function(){}



window.jQuery.ajax = function(options){
	let url = options.url
	let method = options.method
	let body = options.body
	let successFn = options.successFn
	let failFn = options.failFn
	
	let request = new XMLHttpRequest()
	request.open(method, url)
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

window.$ = window.jQuery

myButton.addEventListener('click', (e)=>{
     window.jQuery.ajax({
     	url:'/xxx',
	    method:'get',
	    successFn: function(x){console.log(x)},
	    failFn:function(x){console.log(x)}     
     })

})

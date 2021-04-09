
	function increase(){
	var a=document.getElementById('inputVal');
	var b=parseInt(a.value);
	var c= b+1;
	a.value=c;
	document.getElementById('output').innerText='Total :'+a.value*518.0;
	}
	
	function decrease(){
	var a=document.getElementById('inputVal');
	var b=parseInt(a.value);
	var c= b-1;
	a.value=c;
	if(a.value<0){
	document.getElementById('output').innerText="Invalid";
	}else{
	document.getElementById('output').innerText='Total :'+a.value*518;
	}
	}
	
function hi (){
	const date = new Date();
	var h, m, s;
	h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();
	if(h < 10) h = '0' + h;
	if(m < 10) m = '0' + m;
	if(s < 10) s = '0' + s;
	document.querySelector('#clock').innerHTML = h + ':' + m + ':' + s;	
}
hi();
setInterval( function() { hi(); }, 1000);
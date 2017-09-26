window.onload=function(){
	let table = document.querySelector('tbody');
	let button=document.querySelector('main>button');
	console.log(button);
	let student=[
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'},
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'},
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'},
			{name:'张三' ,sex:'男' ,num:666666 ,add:'大同'}
	]
	student.forEach(element=>{
		stud(element)
	})
	function stud(obj){
		let str=document.createElement('tr');
		table.appendChild(str);
		str.innerHTML=`
			<td>${obj.name}</td>
			<td>${obj.sex}</td>
			<td>${obj.num}</td>
			<td>${obj.add}</td>
			<td><button class="bt">删除</button></td>`
	}
	table.ondblclick=function(e){
		let element=e.target;
		if(element.nodeName=='TD'&&element.className!='BT'){
			let values=element.innerHTML;
			element.innerHTML='';		
			let inputs=document.createElement('input');
			inputs.style.width='50px';
			inputs.value=values;
			element.appendChild(inputs);
			inputs.onblur = function(){
				let newvalue=inputs.values.trim();
				inputs=null;
				element.innerText=newvalue;alert(1)
			}
		}else if(element.nodeName == 'BUTTON'){
			let tbody = element.parentNode.parentNode;
			table.removeChild(tbody);	
		}
	}
}
				// element.removeChild(inputs);
				// if(newvalue){
				// 	element.innerText=newvalue;
				// }else{
				// 	element.innerText=value;
				// }
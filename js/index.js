//1轮播
	//1.1轮播容器
var lb=document.getElementById("lb");
var aa=document.getElementsByClassName("grid-row2-left")[0];
	//1.2图片个数
var count=lb.children.length;
	//1.3序号容器
var ul=document.getElementsByClassName("circle")[0];
	//1.4箭头容器
var arrL= document.getElementsByClassName("arrow-l")[0];
var arrR= document.getElementsByClassName("arrow-r")[0];

var i=0;
var index =0;

	//1.5自动生成序号
for(i;i<count;i++){
	var li = document.createElement("li");
	ul.appendChild(li);
	li.index =i;
	li.onmousemove = lionmousemove;
	if(i===0){
			li.className="circle-xz";
		}
}
	//1.6序号鼠标悬停事件
function lionmousemove(){
	lb.style.left=-this.index*590+'px';
	for(i=0;i<count;i++){
		li =ul.children[i];
		li.className ="";
	}
	this.className="circle-xz";
	index=this.index;
}
	//1.7左右按钮点击事件
arrR.onclick =function(){
	index ++;
	if(index<count){
		ul.children[index].onmousemove();
	}
	else{
		index =0;
		ul.children[index].onmousemove();
	}
}
arrL.onclick =function(){
	index --;
	if(index>=0){
		ul.children[index].onmousemove();
	}
	else{
		index =5;
		ul.children[index].onmousemove();
	}
}
	//1.8自动播放
var zd=setInterval(function(){
	arrR.click();
},2000);
	//1.9鼠标悬停关闭定时器,鼠标移开开启定时器
aa.onmousemove= function(){
	clearInterval(zd);
}
aa.onmouseout =function(){
	zd=setInterval(function(){
			arrR.click();
		},2000);
}
//2 精选商品
	//2.1排行榜
		//2.1.1导航悬停事件
var rkul=document.getElementById("rk-ul");
var rkB =document.getElementsByClassName("hp-rkB");
var rkB1=document.getElementsByClassName("hp-rkB1");
var rkB2=document.getElementsByClassName("hp-rkB2");
var rkdot=document.getElementById("rk-dot");
var p =0;
for(i=0;i<5;i++){
	rkul.children[i].index=i;
	rkul.children[i].onmousemove=rk1;
}
for(i=0;i<2;i++){
	rkdot.children[i].index=i;
	rkdot.children[i].onmousemove=rk2;
}
function rk1(){
	for(i=0;i<5;i++){
		rkB[i].style.display="none";
	}
	rkB[this.index].style.display="block";
}
function rk2(){
	for(i=0;i<2;i++){
		rkdot.children[i].className="";
	}
	this.className="dot-Selected";
	if(this.index==0){
		for(i=0;i<5;i++){
			rkB1[i].style.display="block";
			rkB2[i].style.display="none";
			
		}
	}else{
		for(i=0;i<5;i++){
			rkB2[i].style.display="block";
			rkB1[i].style.display="none";
		}
	}
}
//3秒杀商品
	//3.1倒计时
function getInterval(start,end){
	var interval = end - start;
	interval /=1000;
	var hour , minute , second;
	hour = Math.floor(interval/ 60/60);
	minute =Math.floor(interval/60 % 60);
	second =Math.floor(interval %60);
	
	return {
		hour:hour,
		minute:minute,
		second:second
	}
}
var spanhour =document.getElementById('hour');
var spanminute =document.getElementById('minute');
var spansecond =document.getElementById('second');
var end =new Date('2019-3-06');

setInterval(djs,1000);
djs();
function djs(){
	var start =new Date();
	var obj=getInterval(start,end);
	obj.hour = obj.hour <10 ? '0'+obj.hour : obj.hour;
	obj.minute = obj.minute <10 ? '0'+obj.minute : obj.minute;
	obj.second = obj.second <10 ? '0'+obj.second : obj.second;
	spanhour.innerHTML =obj.hour;
	spanminute.innerHTML =obj.minute;
	spansecond.innerHTML =obj.second;
}

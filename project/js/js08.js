// JavaScript Document
//焦点图轮播
window.onload=function(){	
	//顶部的焦点图切换
	function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange, 3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var j=0;j<pic_li.length;j++){
					if(button_li[j]==this){
						current_index=j;
						button_li[j].className="current";
						pic_li[j].className="current";
					}else{
						pic_li[j].className="pic";
						button_li[j].className="but";
					}
				}
			}
			button_li[i].onmouseout=function(){
				timer=setInterval(autoChange,3000);			
			}
		}
		function autoChange(){
			++current_index;
			if (current_index==button_li.length) {
				current_index=0;
			}
			for(var i=0;i<button_li.length;i++){
				if(i==current_index){
					button_li[i].className="current";
					pic_li[i].className="current";
				}else{
					button_li[i].className="but";
					pic_li[i].className="pic";
				}
			}
		}
	}
hotChange();
	
	//环境展示
function school(){
		//定义滚动速度
		var speed = 50;
		//获取<div id="imgbox">元素
		var imgbox = document.getElementById("imgbox");
		//复制一个<span>，用于无缝滚动
		imgbox.innerHTML += imgbox.innerHTML;
		//获取两个<span>元素
		var span = imgbox.getElementsByTagName("span");
		//启动定时器，调用滚动函数
		var timer1 = window.setInterval(marquee,speed);
		//鼠标移入时暂停滚动，移出时继续滚动
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		//滚动函数
		function marquee(){
			//当第1个<span>被完全卷出时
			if(imgbox.scrollLeft > span[0].offsetWidth){
				//将被卷起的内容归0
				imgbox.scrollLeft = 0;
			}else{
				//否则向左滚动
				++imgbox.scrollLeft;
			}
		}
	}
	school();
	
	
}

//验证表单是否为空
function checkForm(){
var flag=true;
if(form1.textname.value==""){
	divname.innerHTML="<font color=red>请输入用户名</font>"
	flag=false;
	//return false
}
if(form1.textpassword1.value==""){
	divpassword1.innerHTML="<font color=red>请输入密码</font>"
	flag=false;
	//return false
}

return flag;
//return true;
}

 

//验证用户名
function checkna()
{
 var na=form1.textname.value;
 if(na.length<6 || na.length>12)
 {
		divname.innerHTML="<font color=red>长度错误</font>"
		return false;
 }
	else
	{
	divname.innerHTML="<font color='green'>输入正确</font>"
	   return true;
     }
 return true;
}

 

//验证密码
function checkpsd1(){
	//div11=document.getElementById("divpassword1");
	psd1=form1.textpassword1.value;
	var flagZM=false
	var flagSZ=false
	var flagQT=false
	if(psd1.length<6 || psd1.length>12){
		divpassword1.innerHTML="<font color=red>长度错误</font>"
		return false;
	}
	else
	{
		for(i=0;i < psd1.length;i++)
		{
			if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z'))
			flagZM=true
			else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')
			{ flagSZ=true}
			else
			{ flagQT=true}
		}
		if(!flagZM||!flagSZ||flagQT){
			divpassword1.innerHTML="<font color=red>密码必须是字母数字的组合</font>"
			return false;
		}
		else
			divpassword1.innerHTML="<font color='green'>输入正确</font>"
			return true;
	}
	return true;
}

//验证确认密码
//-->
function denglu()
{
	var na=form1.textname.value;
	var pw=form1.textpassword1.value;
	if(na=="lpl123")
	{
	if(pw=="lpl123")
	{
	window.location.href=			"http://blog.sina.com.cn/u/6214713889";
	}
	else
	{
	divpassword1.innerHTML="<font color='red'>您输入的账号或密码不正确！</font>"
		}
	}
	else
	{
	divpassword1.innerHTML="<font color='red'>您输入的账号或密码不正确！</font>"
		}
}

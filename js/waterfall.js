$(window).on('load',function(){
     imgLocation();
     var dataImg={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'17.jpg'},{'src':'18.jpg'},{'src':'19.jpg'}]};
     //窗口添加滚动条事件
     window.onscroll=function(){
         if(scrollSide()){
         	$.each(dataImg.data,function(index,value){
         		var box=$('<div>').addClass('box').appendTo($('.container'));
         		console.log(box)
         		var content=$('<div>').addClass('content').appendTo(box);
         		console.log(content)
         		console.log('./img/'+  $(value).attr('src'))
         		$('<img>').attr('src','./img/'+  $(value).attr('src')).appendTo(content);
         	});
            imgLocation();
         }
     };
});
//鼠标滚动到的位置
function scrollSide(){
	var box=$('.box');
	var lastBoxHeight=box.last().get(0).offsetTop;
	var documentWidth=$(document).width();
	var scrollHeight=$(window).scrollTop();
	return(lastBoxHeight<documentWidth+scrollHeight)?true:false;//当鼠标滚动到距离最后一张图片顶部的距离返回true
}
//图片位置放置函数
function imgLocation(){
	var box=$('.box');
	var boxWidth=box.eq(0).width();
	var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index,value){
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
        }else{
        	var minBoxHeight=Math.min.apply(null,boxArr);
        	var minboxIndex=$.inArray(minBoxHeight,boxArr);
        	$(value).css({
        		'position':'absolute',
        		'top': minBoxHeight,
        		'left':box.eq(minboxIndex).position().left
        	})
        	boxArr[minboxIndex]+=box.eq(index).height();
        }  
    })

}

$(document).on("pagechange", function (e, data) {
  var pageID = data.toPage[0].id;

	//var pageID = $('[data-role="page"]').attr('id');//$.mobile.activePage.attr('id');
	
	var footer_html ="";
	
	console.log( pageID );
	
	switch (pageID) {
  case "news":
	footer_html ='<div data-role="navbar">' +
				'<ul>'+       					
				'<li><a href="/www/index/pools.htm" data-icon="search">附近泳池</a></li>'+
				'<li><a href="/www/index/tutorials.htm" data-icon="edit">游泳教學</a></li>'+
				'<li><a href="/www/index/lifeguard.htm" data-icon="star">救生訓練</a></li>'+
				'<li><a href="/www/index/tools.htm" data-icon="grid">泳具廣告</a></li>'+
				'<li><a href="/www/index/comments.htm" data-icon="plus">意見反饋</a></li>'+
				'</ul>'+
				'</div>';
				
    break;
  case "pools":
    	footer_html ='<div data-role="navbar">' +
				'<ul>'+       					
				'<li><a href="/www/index/news.htm" data-icon="info" >長泳消息</a></li>'+
				'<li><a href="/www/index/tutorials.htm" data-icon="edit">游泳教學</a></li>'+
				'<li><a href="/www/index/lifeguard.htm" data-icon="star">救生訓練</a></li>'+
				'<li><a href="/www/index/tools.htm" data-icon="grid">泳具廣告</a></li>'+
				'<li><a href="/www/index/comments.htm" data-icon="plus">意見反饋</a></li>'+
				'</ul>'+
				'</div>';
    break;
  case "tutorials":
        	footer_html ='<div data-role="navbar">' +
				'<ul>'+       					
				'<li><a href="/www/index/news.htm" data-icon="info" >長泳消息</a></li>'+
				'<li><a href="/www/index/pools.htm" data-icon="search">附近泳池</a></li>'+
				'<li><a href="/www/index/lifeguard.htm" data-icon="star">救生訓練</a></li>'+
				'<li><a href="/www/index/tools.htm" data-icon="grid">泳具廣告</a></li>'+
				'<li><a href="/www/index/comments.htm" data-icon="plus">意見反饋</a></li>'+
				'</ul>'+
				'</div>';
    break;
  case "lifeguard":
        	footer_html ='<div data-role="navbar">' +
				'<ul>'+       					
				'<li><a href="/www/index/news.htm" data-icon="info" >長泳消息</a></li>'+
				'<li><a href="/www/index/pools.htm" data-icon="search">附近泳池</a></li>'+
				'<li><a href="/www/index/tutorials.htm" data-icon="edit">游泳教學</a></li>'+
				'<li><a href="/www/index/tools.htm" data-icon="grid">泳具廣告</a></li>'+
				'<li><a href="/www/index/comments.htm" data-icon="plus">意見反饋</a></li>'+
				'</ul>'+
				'</div>';
    break;
  case "swim_tools":
		    	footer_html ='<div data-role="navbar">' +
				'<ul>'+       					
				'<li><a href="/www/index/news.htm" data-icon="info" >長泳消息</a></li>'+
				'<li><a href="/www/index/pools.htm" data-icon="search">附近泳池</a></li>'+
				'<li><a href="/www/index/tutorials.htm" data-icon="edit">游泳教學</a></li>'+
				'<li><a href="/www/index/lifeguard.htm" data-icon="star">救生訓練</a></li>'+
				'<li><a href="/www/index/comments.htm" data-icon="plus">意見反饋</a></li>'+
				'</ul>'+
				'</div>';
	break;
  case "comments":
       	footer_html ='<div data-role="navbar">' +
				'<ul>'+       					
				'<li><a href="/www/index/news.htm" data-icon="info" >長泳消息</a></li>'+
				'<li><a href="/www/index/pools.htm" data-icon="search">附近泳池</a></li>'+
				'<li><a href="/www/index/tutorials.htm" data-icon="edit">游泳教學</a></li>'+
				'<li><a href="/www/index/lifeguard.htm" data-icon="star">救生訓練</a></li>'+
				'<li><a href="/www/index/tools.htm" data-icon="grid">泳具廣告</a></li>'+
				'</ul>'+
				'</div>';
    break;
  default:
    console.log("Sorry, we are out of " + pageID + ".");	
}
	if (footer_html !=""){
		$('[data-role="footer"]').html( footer_html );
		$('[data-role="navbar"]').navbar();
	}
});
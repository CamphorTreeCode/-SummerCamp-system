$(function(){
	$(document).ready(function(){
			var    $sel = $(".select"),
			$sel_default = $(".select_default"),
			  $sel_item = $(".select_item"),
			$sel_item_li = $(".select_item li")
			$sel_default.text($(".select_item li:first").text());
			//alert();
			
			$sel.hover(function(){
			//1111111111111111
			$(this).find(".select_item").show();
			$(this).find(".select_default").addClass("rotate");
			     //222222222222222222222222222222
				 $sel_item_li.hover(
					
					function(){
						$index = $sel_item_li.index(this);
	//					alert($index);
						$sel_item_li.eq($index).addClass("hover");
					},
					
					
					function(){
					$sel_item_li.removeClass("hover");
					})
			   },
			   
			   //111111111111111111111111
				function(){
					var that=this
					$sel_item.hide();
					$sel_default.removeClass("rotate");
				});
				
				$sel_item_li.click(
				function(){
				$(this).parent().prev().text($(this).text());
				$sel_item.hide();
				});
			});
})

$(function(){
	$('.save').click(function(){
		if($('#jiancheng').val() == '' || $('#jiancheng').val().length > 10){
			alert('请填写10字以内简称!');
			return false;
		}else if($('textarea').val() == ''){
			alert('请填写正文!');
			return false;
		}else {
			return true;
		}	
		
	});
})

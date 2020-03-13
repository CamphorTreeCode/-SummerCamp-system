$(function(){
	$('.save').on('click', function(){
		var reg1 = /^[0-9]{1,2}$/;
		var shengao = /^[0-9]{1,3}$/;
		var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
		var IDnumber = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
		if($('#user').val() == ''){
			alert('请填写正确的姓名');
			return false;
		}
		else if($('input:radio[name="radio0"]:checked').val() == null){
			alert('请选择性别!');
			return false;
		}
		else if($('#age').val() == '' || !reg1.test($('#age').val())){
			alert('请填写正确的年龄');
			return false;
		}
		else if($('#date').val() == ''){
			alert('请选择日期');
			return false;
		}
		else if($('#address').val() == ''){
			alert('请填写正确的家庭地址');
			return false;
		}
		else if($('#message').val() == '' || !IDnumber.test($('#message').val())){
			alert('请填写正确的证件信息');
			return false;
		}
		
		else if($('input:radio[name="radio1"]:checked').val() == null){
			alert('请选择身体是否健康');
			return false;
		}
		
		else if($('#height').val() == ''|| !shengao.test($('#height').val())){
			alert('请填写正确的身高');
			return false;
		}
		else if($('#weight').val() == ''|| !reg1.test($('#weight').val())){
			alert('请填写正确的体重');
			return false;
		}
		else if($('#size').val() == ''|| !reg1.test($('#size').val())){
			alert('请填写正确的鞋子尺码');
			return false;
		}
		
		else if($('input:radio[name="radio2"]:checked').val() == null){
			alert('请选择是否为穆斯林');
			return false;
		}
		
		else if($('input:radio[name="radio3"]:checked').val() == null){
			alert('请选择是否经常晕车');
			return false;
		}
		
		else if($('input:radio[name="radio4"]:checked').val() == null){
			alert('请选择是否有药品过敏史');
			return false;
		}
		
		else if($('#pill').val() == ''){
			alert('请填写何种药物过敏');
			return false;
		}
		else if($('#father').val() == ''){
			alert('请填写父亲姓名');
			return false;
		}
		else if($('#fa-mobile').val() == ''|| $('#fa-mobile').val().length !=11 || !myreg.test($('#fa-mobile').val())){
			alert('请填写正确的手机号');
			return false;
		}
		else if($('#mother').val() == ''){
			alert('请填写母亲姓名');
			return false;
		}
		else if($('#mo-mobile').val() == ''|| $('#mo-mobile').val().length !=11 || !myreg.test($('#fa-mobile').val())){
			alert('请填写正确的手机号');
			return false;
		}
		else if($('#hope').val() == ''){
			alert('请填写家长期待');
			return false;
		}
		return true;
	})
})

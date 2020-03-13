$(".leftsidebar_box dt").css({"background-color":"#111"});
$(".leftsidebar_box dt img").attr("src","img/xiajiantou.pngg");
$(function(){
	//left二级下拉菜单
	$(".leftsidebar_box dd").hide();
	//top修改信息
	$(".xia").on('click',function(){
		$(".dogegg").fadeToggle(500);
	});
	
	$(".leftsidebar_box dt").click(function(){
		$(".leftsidebar_box dt").css({"background-color":"#111","border-left":"5px solid #111","color":"#c2c2c2"});
		$(this).css({"background-color": "#000","border-left":"5px solid #810000","color":"#fff"});
		$(this).parent().find('dd').slideToggle();
	});
	
	$(".leftsidebar_box dt").hover(function(){
		$(".leftsidebar_box dt").css({"background-color":"#111","border-left":"5px solid #111","color":"#c2c2c2"});
		$(this).css({"background-color": "#000","border-left":"5px solid #810000","color":"#fff"});
	});
	$(".leftsidebar_box dd").click(function(){
		$(".leftsidebar_box dd").css({"background-color":"#111","border-left":"5px solid #111","color":"#c2c2c2"});
		$(this).css({"background-color": "#000","border-left":"5px solid #810000","color":"#fff"});

	});
$(".leftsidebar_box dd").hover(function(){
		$(".leftsidebar_box dd").css({"background-color":"#111","border-left":"5px solid #111","color":"#c2c2c2"});
		$(this).css({"background-color": "#000","border-left":"5px solid #810000","color":"#fff"});

	});
	
	
	$(".safa").on('click',function(){
		
     each();
        $(this).removeClass("safa");
        $(this).addClass("safas");
              return false
          
	})
	$(".dtt").on('click',function(){
		  each();
		$(this).removeClass("dtt");
		$(this).addClass("dtts");
	})
	$(".we").on('click',function(){
		  each();
		$(this).removeClass("we");
		$(this).addClass("wes");
	})
	$(".sencod_dd").on('click',function(){
		  each();
		$(this).removeClass("sencod_dd");
		$(this).addClass("sencod_dds");
	})
	$(".ddt").on('click',function(){
		  each();
		$(this).removeClass("ddt");
		$(this).addClass("ddts");
	})
	$(".con").on('click',function(){
		  each();
		$(this).removeClass("con");
		$(this).addClass("cons");
	})
	$(".cont").on('click',function(){
		  each();
		$(this).removeClass("cont");
		$(this).addClass("conts");
	})
	$(".sun").on('click',function(){
		  each();
		$(this).removeClass("sun");
		$(this).addClass("suns");
	})
	$(".you").on('click',function(){
		  each();
		$(this).removeClass("you");
		$(this).addClass("yous");
	})
	$(".me").on('click',function(){
		  each();
		$(this).removeClass("me");
		$(this).addClass("mes");
	})
	$(".out").on('click',function(){
		  each();
		$(this).removeClass("out");
		$(this).addClass("outs");
	})
	$(".my").on('click',function(){
		  each();
		$(this).removeClass("my");
		$(this).addClass("mys");
	})
	$(".off").on('click',function(){
		  each();
		$(this).removeClass("off");
		$(this).addClass("offs");
	})
	$(".round").on('click',function(){
		  each();
		$(this).removeClass("round");
		$(this).addClass("rounds");
	})
	
	function each(){
		//后台首页
		$(".safas").removeClass("safas").addClass("safa");
		//项目管理
		$(".dtts").removeClass("dtts").addClass("dtt");
		//项目查询
		$(".wes").removeClass("wes").addClass("we");
		//项目发布
		$(".sencod_dds").removeClass("sencod_dds").addClass("sencod_dd");
		//报名表管理
		$(".ddts").removeClass("ddts").addClass("ddt");
		//会员管理
		$(".cons").removeClass("cons").addClass("con");
		//留言管理
		$(".conts").removeClass("conts").addClass("cont");
		//界面管理
		$(".suns").removeClass("suns").addClass("sun");
		//首页banner
		$(".yous").removeClass("yous").addClass("you");
		//首页精选项目
		$(".mes").removeClass("mes").addClass("me");
		//公司简介
		$(".outs").removeClass("outs").addClass("out");
		//关于我们
		$(".mys").removeClass("mys").addClass("my");
		//退营须知编辑
		$(".offs").removeClass("offs").addClass("off");
		//协议编辑
		$(".rounds").removeClass("rounds").addClass("round");
	};	
	
	
})
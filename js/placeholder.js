$(function(){  
 
  //判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
 
  placeholder=function(input){
 
    var text = input.attr('placeholder'),
    defaultValue = input.defaultValue;
 
    if(!defaultValue){
 
      input.val(text).addClass("phcolor");
    }
 
    input.focus(function(){
 
      if(input.val() == text){
   
        $(this).val("");
      }
    });
 
  
    input.blur(function(){
 
      if(input.val() == ""){
       
        $(this).val(text).addClass("phcolor");
      }
    });
 
    //输入的字符不为灰色
    input.keydown(function(){
  
      $(this).removeClass("phcolor");
    });
  };
 
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
    $('input').each(function(){
	  if($(this).attr("type") == "text" && $(this).attr("data-type") != "pwd" ){
        placeholder($(this));
      }
    });
  }
    
  //密码框placeholder效果开始
  $(".showPwd").each(function(index, element) {
        $(this).focus(function(e) {
            var text_value=$(this).val();
			if (text_value == this.defaultValue) {
				$(this).hide();
				$(this).next(".password").show().focus();
			}
        });
    });
	$(".password").each(function(index, element) {
        $(this).blur(function(e) {
           var text_value = $(this).val();
			if (text_value == "") {
				$(this).hide();
				$(this).prev(".showPwd").show();
			} 
        });
    });
  //密码框placeholder效果结束
  
  //textarea文本域的placeholder效果
  if(!supportPlaceholder){
		$("textarea").each(function(index, element) {
		  var textarea_value=$(this).attr("data-value");
		  $(this).val(textarea_value);
		  $(this).focus(function(e) {
				 if($(this).val()==textarea_value){
					 $(this).val("");
				 }
		  });
		  $(this).blur(function(e) {
				if($(this).val()==""){
					$(this).val(textarea_value);
				}
		  });
	   });
  }

  
  
  
  
 
});

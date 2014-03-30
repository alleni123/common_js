(function($){
	
	var _const={
		className:{
			DIALOG_CON:"dialog_con",
			DIALOG_BTN:"dialog_btn"	
		},
	};
	
	$.fn.dialog=function(opts){
		setting=$.extend({
			btnSelector:""
		},opts||{});
		
		//初始化dialog框的样式
		$("#dialog").css({position:"relative",
						top:"100px",left:"200px",
					   height:"90px",width:"200px",
					   border:"1px solid yellow",
					   "text-align":"center"});
	
		$(document).on("click",setting.btnSelector,function(){
						
						
				if ($("#dialog").attr("exist") == "false" || $("#dialog").attr("exist") == null) {
						$("#dialog").attr("exist", "true");
						
						
						
						
						var dialog = $("#dialog")[0];

						var dialog_con = document.createElement("div");
						dialog_con.className=_const.className.DIALOG_CON;
						dialog.appendChild(dialog_con);

						var p = document.createElement("p");
						p.appendChild(document.createTextNode("已经到了最后一页"));
						dialog_con.appendChild(p);
						var btn = document.createElement("input");
						btn.setAttribute("type", "button");
						btn.setAttribute("value", "确定");
						btn.className = _const.className.DIALOG_BTN;
						dialog.appendChild(btn);

						$("#content")[0].appendChild(dialog);
						$("#dialog").css("display", "block");
					} else {
						$("#dialog").css("display", "block");
					}
		});
		
		$(document).on("click", ".dialog_btn", function() {

					if ($("#dialog").css("display") == "block") {
						$("#dialog").hide();
					}
				});
		
		
		
	};
})(jQuery);

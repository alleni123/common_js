(function($) {

	$.fn.imgzoom = function(opts) {

		var setting = $.extend({
			imgSelector : "#click_img",
			imgSrc : "",
			next:".img_next"
		}, opts || {});

		var selector = $(this).selector;
		
		$(setting.next).click(function(){
			alert("next");
		});
		
		
		

		$(setting.imgSelector).click(function(e) {

			//console.log($(this).attr("src"));
			console.log($(this).attr("src").width);
			console.log($(this).attr("w"));

			var imgs = $(".click_img");
			console.log(imgs);

		

			$("#appendParent").addImgzoom({
				imgSrc : $(this).attr("src"),
				zoomParent : selector,
				imgWidth : $(this).attr("w"),
				imgHeight : $(this).attr("h")
			});
			$("#imgzoom").drags();
			
			
			
			
			if ($("#_cover").css("display") == "none") {
				//alert("== ");
				$("#_cover").show();
			} else {
				//alert("show");
				$("#appendParent").addCover();
			}

			$("#imgzoom").show();
			return false;
		});
		
		
		
		
		
		$(setting.next).on("click",function(){
			alert("next");
		});
	};

	$.fn.addImgzoom = function(opts) {

		var setting = $.extend({
			imgPath : "#123",
			imgSrc : "",
			imgWidth : "",
			imgHeight : "",
			zoomParent : "#appendParent"
		}, opts || {});
		//alert("src= "+setting.imgSrc);
		$("body").click(function(e) {
			console.log("bodyclick" + e.target + "1");
			
			if($(e.target).hasClass('img_next')){
				alert("next");
				e.preventDefault();
			}
			
			if ($(e.target).hasClass('imgclose')) {

				//$("#_cover").hide();
				//$("#imgzoom").hide();
				
				$("#_cover").remove();
				$("#imgzoom").remove();
				e.preventDefault();
			}

			// if ($(e.target).hasClass('imgzoom_content')) {
			// alert(1);
			// return false;
			// }

			if (($("#_cover").css("display") == "block") && !($(e.target).hasClass('imgzoom_content'))) {

				//$("#_cover").hide();
				//$("#imgzoom").hide();
				$("#_cover").remove();
				$("#imgzoom").remove();
				e.preventDefault();
			}
		});

		var imgzoom = document.createElement("div");
		imgzoom.id = "imgzoom";
		imgzoom.style.position = "fixed";
		imgzoom.style.zIndex = 501;
		imgzoom.style.cursor = "move";
		imgzoom.style.top = "100px";
		imgzoom.style.left = "500px";
		imgzoom.style.display = "none";

		//这里是添加imgzoom div的地方。
		//alert(setting.zoomParent);
		//$("#appendParent").append(imgzoom);
		$(setting.zoomParent).append(imgzoom);

		var zoomlayer = document.createElement("div");
		zoomlayer.id = "imgzoom_zoomlayer";
		zoomlayer.className = "zoominner imgzoom_content";
		//zoomlayer.style.height = "760px";
		imgzoom.appendChild(zoomlayer);

		var p = document.createElement("p");
		p.className = "imgzoom_content";
		zoomlayer.appendChild(p);

		var span = document.createElement("span");
		span.className = "y";
		p.appendChild(span);

		var a_ori_img = document.createElement("a");
		a_ori_img.id = "imgzoom_imglink";
		a_ori_img.className = "imglink imgzoom_btn imgzoom_content";
		a_ori_img.target = "_blank";
		a_ori_img.title = "查看大图";
		a_ori_img.href = setting.imgSrc;
		var txt = document.createTextNode("查看大图");
		a_ori_img.appendChild(txt);

		var a_close = document.createElement("a");
		a_close.className = "imgclose imgzoom_btn imgzoom_content";
		a_close.title = "关闭";
		a_close.href = "#";
		var txt = document.createTextNode("关闭");
		a_close.appendChild(txt);

		span.appendChild(a_ori_img);
		span.appendChild(a_close);

		//加入前一页后一页的按钮
		var img_pager = document.createElement("div");
		zoomlayer.appendChild(img_pager);
		var img_prev = document.createElement("div");
		img_prev.className = "img_prev";
		//alert("prev="+setting.imgHeight);
		img_prev.style.height = setting.imgHeight + "px";

		var img_next = document.createElement("div");
		img_next.className = "img_next";
		img_next.style.height = setting.imgHeight + "px";

		zoomlayer.appendChild(img_prev);
		zoomlayer.appendChild(img_next);

		var imgDiv = document.createElement("div");
		imgDiv.id = "imgzoom_img";
		imgDiv.className = "hm imgzoom_content";
		zoomlayer.appendChild(imgDiv);

		var img = document.createElement("img");
		img.id = "imgzoom_zoom";
		//img.src = "roll-02.jpg";
		img.src = setting.imgSrc;
		//img.style.width = "480px";
		img.style.width = setting.imgWidth;
		img.className = "imgzoom_content";
		imgDiv.appendChild(img);

		var img_title = document.createElement("div");
		img_title.className = "imgzoom_title imgzoom_content";
		img_title.appendChild(document.createTextNode("roll-02.jpg"));
		imgDiv.appendChild(img_title);

	};

	$.fn.addCover = function(opt) {
		opt = $.extend({

		}, opt);
		var coverObj = document.createElement("div");
		coverObj.id = "_cover";
		coverObj.style.position = "absolute";
		coverObj.style.zIndex = 500;
		coverObj.style.left = coverObj.style.top = "0px";
		coverObj.style.width = "100%";

		//clientHeight似乎是浏览器所打开的高度，offsetHeight是网页最大高度
		coverObj.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
		coverObj.style.backgroundColor = '#000';
		coverObj.style.opacity = 0.5;
		$(this).append(coverObj);

	};
})(jQuery);


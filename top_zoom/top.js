(function($) {

	$.fn.addImgzoom = function(opt) {

		opt = $.extend({

		}, opt);

		$("body").click(function(e) {
			console.log(e.target);
			if ($(e.target).hasClass('imgclose')) {

				$("#_cover").hide();
				$("#imgzoom").hide();
			}

			if ($(e.target).hasClass('imgzoom_content')) {
				return false;
			}

			if ($("#_cover").css("display") == "block") {

				$("#_cover").hide();
				$("#imgzoom").hide();
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
		$(this).append(imgzoom);

		var zoomlayer = document.createElement("div");
		zoomlayer.id = "imgzoom_zoomlayer";
		zoomlayer.className = "zoominner imgzoom_content";
		zoomlayer.style.height = "560px";
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
		a_ori_img.href = "#";
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

		var imgDiv = document.createElement("div");
		imgDiv.id = "imgzoom_img";
		imgDiv.className = "hm imgzoom_content";
		zoomlayer.appendChild(imgDiv);

		var img = document.createElement("img");
		img.id = "imgzoom_zoom";
		img.src = "roll-02.jpg";
		img.style.width = "480px";
		imgDiv.appendChild(img);

		var img_title = document.createElement("div");
		img_title.className = "imgzoom_title imgzoom_content";
		img_title.appendChild(document.createTextNode("roll-02.jpg"));
		imgDiv.appendChild(img_title);

	};

	$.fn.showCover = function(opt) {
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


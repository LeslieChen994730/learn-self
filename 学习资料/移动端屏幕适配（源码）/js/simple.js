(function() {
	'use strict';

	window.addEventListener('resize', function() {
		setRemUnit(18.75);
	});

	function setRemUnit(ratio) {
		// var ratio=18.75;
		var docEl = document.documentElement;
		var viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;
		var viewportEl = document.querySelector('meta[name="viewport"]');
		var dpr = window.devicePixelRatio || 1;
		var maxWidth = 540;
		var minWidth = 320;
		dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);
		// html添加属性
		docEl.setAttribute('data-dpr', dpr);
		docEl.setAttribute('maxWidth', maxWidth);
		docEl.setAttribute('minWidth', minWidth);

		//定义scale和content内容
		var scale = 1 / dpr;
		var content = 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no'

		//判断是否存在meta视口标签
		if (viewportEl) {
			// 存在就替换content的内容
			viewportEl.setAttribute('content', content);
		} else {
			// 不存在就新建
			viewportEl = document.createElement('meta');
			viewportEl.setAttribute('name', 'viewport');
			viewportEl.setAttribute('content', content);
			document.head.appendChild(viewportEl);
		}
		//设置元素的font-size/1rem的基准单位和限制缩放
		if (maxWidth && (viewWidth / dpr > maxWidth)) {
			viewWidth = maxWidth * dpr;
		}else if(minWidth && (viewWidth / dpr < minWidth)){
			viewWidth=minWidth*dpr;
		}
		docEl.style.fontSize = viewWidth / ratio + 'px';
	};
})();
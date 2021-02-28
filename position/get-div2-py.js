     var targetElement = document.getElementById( "div2" ) ;
    
    setInterval( function() {
        //「ビューポート(画面内)」における位置(スクロールによって変わる)
    	var clientRect = targetElement.getBoundingClientRect() ;
    
    	// ページ内の高さ位置 (垂直方向のスクロール量 + 画面内の位置)
    	var py = window.pageYOffset + clientRect.top ;
    
    	// 表示
    	for ( var a=[ [ "py", py ] ],i=a.length; i--; ) {
    		document.getElementById( a[i][0] ).textContent = a[i][1] ;
    	}
    }, 100 ) ;

$(document).ready(function () {
	$('#reg_page_show').on('click', function () {
		$('#reg_page').show();
	});
	$('#reg_page_hide').on('click', function () {
		$('#reg_page').hide();
	});

	$('#chart_page_show').on('click', function () {
		$('#chart_page').show();
	});
	$('#chart_page_hide').on('click', function () {
		$('#chart_page').hide();
	});

	$('#charts_vid_show').on('click', function () {
		$('#charts_vid').show();
	});

	$('#charts_vid_hide').on('click', function () {
		$('#charts_vid').hide();
	});

	$('#register_design_show').on('click', function () {
		$('#register_design').show();
	});

	$('#register_design_hide').on('click', function () {
		$('#register_design').hide();
	});


	$('#login_design_show').on('click', function () {
		$('#login_design').show();
	});

	$('#login_design_hide').on('click', function () {
		$('#login_design').hide();
	});

	$('#call_design_show').on('click', function () {
		$('#call_design').show();
	});

	$('#call_design_hide').on('click', function () {
		$('#call_design').hide();
	});

	$('#search_design_show').on('click', function () {
		$('#search_design').show();
	});

	$('#search_design_hide').on('click', function () {
		$('#search_design').hide();
	});
	
	$('#charts_design_show').on('click', function () {
		$('#charts_design').show();
	});

	$('#charts_design_hide').on('click', function () {
		$('#charts_design').hide();
	});

	$('#responsive_design_show').on('click', function () {
		$('#responsive_design').show();
	});

	$('#responsive_design_hide').on('click', function () {
		$('#responsive_design').hide();
	});

	String.prototype.escapeHTML = function () {                                        
	  return(                                                                 
	    this.replace(/>/g,'&gt;').
	         replace(/</g,'&lt;').
	         replace(/"/g,'&quot;')
	  );
	};
	var codeEl = document.getElementById('historic');
	if (codeEl) {
	  codeEl.innerHTML = codeEl.innerHTML.escapeHTML();
	}
	var codeEl2 = document.getElementById('sPerson');
	if (codeEl2) {
	  codeEl2.innerHTML = codeEl2.innerHTML.escapeHTML();
	}

});

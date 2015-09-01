//menu listener
function mobileMenu(a) {
	var a;
    var i = document.getElementById('menu_content').style.display;
    if (i == 'block') {
        document.getElementById('menu_content').style.display = 'none';
        document.getElementById('menu').style.display = 'none';
        //document.getElementById('coverup').style.display = 'none';
        document.getElementById('menuback').style.display = 'none';
    }
    else {
        document.getElementById('menu_content').style.display = 'block';
        document.getElementById('menu').style.display = 'block';
        //document.getElementById('coverup').style.display = 'block';
        document.getElementById('menuback').style.display = 'block';
    }
}
function showMenu(a) {
	var a;
	var i = document.getElementById('menuNavToggle').style.display;
	if (i == 'block') {
		document.getElementById('menuNavToggle').style.display = 'none';
	}
	else {
		document.getElementById('menuNavToggle').style.display = 'block';
	}
}
function resetMobile() {
	//document.getElementById('homeImg').style.display='block';
	document.getElementById('img1').style.display='none';
	document.getElementById('img2').style.display='none';
	document.getElementById('img3').style.display='none';
	document.getElementById('img1H').style.display='none';
	document.getElementById('img2H').style.display='none';
	document.getElementById('img3H').style.display='none';
}
function showBanner(ImgID) {
	var Bid = ImgID;
	var BidLine = ImgID + 'H';
	var BidTab = ImgID + 'Tab';
	var Bidtest = document.getElementById(Bid).style.display;
	//resetMobile();
	//document.getElementById('homeImg').style.display='none';
	if (Bidtest == 'none') {
		document.getElementById(Bid).style.display='block';
		document.getElementById(BidLine).style.display='block';
		document.getElementById(BidTab).className = 'active';
	}
	else {
		document.getElementById(Bid).style.display='none';
		document.getElementById(BidLine).style.display='none';
		document.getElementById(BidTab).className = null;
		//document.getElementById('homeImg').style.display='block';
	}
}

//window.addEventListener('resize', resetMenu);
function resetMenu() {
    document.getElementById('menu_content').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    //document.getElementById('coverup').style.display = 'none';
    document.getElementById('menuback').style.display = 'none';
}
function resetMenuTabs() {
	//var width =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById('pg1').className = null;
    document.getElementById('pg2').className = null;
    document.getElementById('pg3').className = null;
    document.getElementById('pg4').className = null;
    document.getElementById('pg5').className = null;
    //document.getElementById('li5').style.display = 'none';
    document.getElementById('pg6').className = null;
	document.getElementById('pg1m').className = null;
    document.getElementById('pg2m').className = null;
    document.getElementById('pg3m').className = null;
    document.getElementById('pg4m').className = null;
    document.getElementById('pg5m').className = null;
	//document.getElementById('li5m').style.display = 'none';
	document.getElementById('pg6m').className = null;
}
function pageTest() {
    var title = document.title;
    resetMenuTabs();
	//resetMobile();
    if (title == 'Discover CERTAINTY') {
        document.getElementById('pg1').className = 'active';
		document.getElementById('pg1m').className = 'active';
    }
    else if (title == 'CERTAINTY Technology') {
        document.getElementById('pg2').className = 'active';
		document.getElementById('pg2m').className = 'active';
    }
    else if (title == 'CERTAINTY FAQs') {
        document.getElementById('pg3').className = 'active';
		document.getElementById('pg3m').className = 'active';
    }
    else if (title == 'CERTAINTY Products') {
        document.getElementById('pg4').className = 'active';
		document.getElementById('pg4m').className = 'active';
    }
    else if (title == 'News & Media') {
        document.getElementById('pg5').className = 'active';
		document.getElementById('pg5m').className = 'active';
        document.getElementById('li5').style.display = 'block';
		document.getElementById('li5m').style.display = 'block';
    }
    else if (title == 'Store Locations') {
        document.getElementById('pg6').className = 'active';
		document.getElementById('pg6m').className = 'active';
    }
    else {resetMenuTabs();}// document.getElementById('homeImg').style.display=' ';}
}
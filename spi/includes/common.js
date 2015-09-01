//menu listener
function mobileMenu(a) {
    var i = document.getElementById('menu_content').style.display;
    if (i == 'block') {
        document.getElementById('menu_content').style.display = 'none';
        //document.getElementById('menu').style.display = 'none';
        //document.getElementById('coverup').style.display = 'none';
        document.getElementById('menuback').style.display = 'none';
		document.getElementById('menuStatus').value = '0';
    }
    else {
        document.getElementById('menu_content').style.display = 'block';
        //document.getElementById('menu').style.display = 'block';
        //document.getElementById('coverup').style.display = 'block';
        document.getElementById('menuback').style.display = 'block';
		document.getElementById('menuStatus').value = '1';
    }
}
window.addEventListener('resize', resetMenu);
function resetMenu() {
    document.getElementById('menu_content').style.display = 'block';
    //document.getElementById('menu').style.display = 'block';
    //document.getElementById('coverup').style.display = 'none';
    document.getElementById('menuback').style.display = 'block';
}
function resetMenu() {
  
    
}
function pageTest() {
    var title = document.title;
    resetMenu();
	
}

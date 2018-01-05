
//Sidebar Start

function open_close_sidebar() {
    var u = document.getElementById('my_precious_sidebar');
    if (u.style.display == "block") {
        u.style.display = "none";
    } else {
        u.style.display = "block";
    }
}
//Sidebar End


// Menu Start
function show_stuff(id) {
	var cur = document.getElementById(id);
	var contentz = document.getElementsByClassName('content');
	var i;
	for (i = 0; i < contentz.length; i++) {
		contentz[i].style.display = "none";
	}
	cur.style.display = "block";
}
// Menu End


function show_stuffie(id) {
	var u = document.getElementById(id);
	if (u.style.display == "none") {
		u.style.display = "inline";
	} else {
		u.style.display = "none";
	}
}


//Scrolling and Teleporting to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("tlptotop").style.display = "block";
    } else {
        document.getElementById("tlptotop").style.display = "none";
    }
}

function teleport_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Scrolling and Teleporting to top Ends


/* 
function() {
  $(this).addClass('current').siblings().removeClass('current')
    .parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
  var ulIndex = $('ul.tabs').index($(this).parents('ul.tabs'));
  eraseCookie('tabCookie' + ulIndex);
  createCookie('tabCookie' + ulIndex, $(this).index(), 365);
}
 */
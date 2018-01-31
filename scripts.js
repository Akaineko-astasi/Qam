
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


//Filter Experiment v.0.2 -- ACHTUNG!!1 COSTYL DETECTED
/* function type_filter_ES() {
	document.getElementById('blablah').style.display = "none";
	var elmtz1 = document.getElementsByClassName('KA-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "none";}
	var elmtz2 = document.getElementsByClassName('ON-type'); for (i = 0; i < elmtz2.length; i++) { elmtz2[i].style.display = "none";}
	var elmtz3 = document.getElementsByClassName('TSU-type'); for (i = 0; i < elmtz3.length; i++) { elmtz3[i].style.display = "none";}
	var elmtz1 = document.getElementsByClassName('ES-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "block";}
}
function type_filter_KA() {
	document.getElementById('blablah').style.display = "none";
	var elmtz1 = document.getElementsByClassName('ES-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "none";}
	var elmtz2 = document.getElementsByClassName('ON-type'); for (i = 0; i < elmtz2.length; i++) { elmtz2[i].style.display = "none";}
	var elmtz3 = document.getElementsByClassName('TSU-type'); for (i = 0; i < elmtz3.length; i++) { elmtz3[i].style.display = "none";}
	var elmtz1 = document.getElementsByClassName('KA-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "block";}
}
function type_filter_ON() {
	document.getElementById('blablah').style.display = "none";
	var elmtz1 = document.getElementsByClassName('KA-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "none";}
	var elmtz2 = document.getElementsByClassName('ES-type'); for (i = 0; i < elmtz2.length; i++) { elmtz2[i].style.display = "none";}
	var elmtz3 = document.getElementsByClassName('TSU-type'); for (i = 0; i < elmtz3.length; i++) { elmtz3[i].style.display = "none";}
	var elmtz1 = document.getElementsByClassName('ON-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "block";}
}
function type_filter_TSU() {
	document.getElementById('blablah').style.display = "none";
	var elmtz1 = document.getElementsByClassName('ES-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "none";}
	var elmtz2 = document.getElementsByClassName('ON-type'); for (i = 0; i < elmtz2.length; i++) { elmtz2[i].style.display = "none";}
	var elmtz3 = document.getElementsByClassName('KA-type'); for (i = 0; i < elmtz3.length; i++) { elmtz3[i].style.display = "none";}
	var elmtz1 = document.getElementsByClassName('TSU-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "block";}
}
function type_filter_none() {
	document.getElementById('blah').style.display = "none";
	document.getElementById('blablah').style.display = "inline";
	var elmtz1 = document.getElementsByClassName('ES-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "none";}
	var elmtz2 = document.getElementsByClassName('ON-type'); for (i = 0; i < elmtz2.length; i++) { elmtz2[i].style.display = "none";}
	var elmtz3 = document.getElementsByClassName('KA-type'); for (i = 0; i < elmtz3.length; i++) { elmtz3[i].style.display = "none";}
	var elmtz1 = document.getElementsByClassName('TSU-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "none";}
}
function type_filter_ALL() {
	document.getElementById('blah').style.display = "block";
	document.getElementById('blablah').style.display = "inline";
	var elmtz1 = document.getElementsByClassName('ES-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "block";}
	var elmtz2 = document.getElementsByClassName('ON-type'); for (i = 0; i < elmtz2.length; i++) { elmtz2[i].style.display = "block";}
	var elmtz3 = document.getElementsByClassName('KA-type'); for (i = 0; i < elmtz3.length; i++) { elmtz3[i].style.display = "block";}
	var elmtz1 = document.getElementsByClassName('TSU-type'); for (i = 0; i < elmtz1.length; i++) { elmtz1[i].style.display = "block";}
}*/
//Filter Experiment end


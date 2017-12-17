
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

//Background Start
function rand_bg() {
    var y = String(Math.round(Math.random() * 10));
    var str = "background: fixed center url(wallpapers/bg-0" + y + ".jpg); background-size: cover;";
    document.body.style = str;
}
//Background End

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

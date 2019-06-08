function chngtm(){
	let d = new Date();
	let hrs = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();

	if (hrs < 10) {
		hrs = "0" + hrs;
	}
	let h = document.getElementById("hour");
	h.innerHTML = hrs + " :";

	if (min < 10) {
		min = "0" + min;
	}
	let m = document.getElementById("min");
	m.innerHTML = min + " :";

	if (sec < 10) {
		sec = "0" + sec;
	}
	let s = document.getElementById("secs");
	s.innerHTML = sec;
}

setInterval(chngtm, 1000);

//date

var dt = new Date();
var month = dt.getMonth();
var day = dt.getDay();
var nums = dt.getDate();

switch (day) {
	case 0:
	day = "Sun";
	break;

	case 1: 
	day = "Tue";
	break;

	case 2:
	day = "Tue";
	break;

	case 3:
	day = "Wed";
	break;

	case 4:
	day = "Thu";
	break;
	
	case 5:
	day = "Fri";
	break;

	case 6:
	day = "Sat";
	break;
}

var da = document.getElementById("day");
da.innerHTML = day;

switch (month) {
	case 0:
	month = "Jan"
	break;

	case 1:
	month = "Feb"
	break;

	case 2:
	month = "Mar"
	break;

	case 3:
	month = "Apr"
	break;

	case 4:
	month = "May"
	break;

	case 5:
	month = "Jun"
	break;

	case 6:
	month = "Jul"
	break;

	case 7:
	month = "Aug"
	break;

	case 8:
	month = "Sep"
	break;

	case 9:
	month = "Oct"
	break;

	case 10:
	month = "Nov"
	break;

	case 11:
	month = "Dec"
	break;
}

var m = document.getElementById("mon");
m.innerHTML = month;
//for the suffix not working 100%


switch (nums) {
	case 1:
	case 21:
	case 31:
	nums = nums + "st";
	break;

	case 2:
	case 22:
	nums = nums + "nd";
	break;

	case 3:
	case 23:
	nums = nums + "rd";
	break;

	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	nums = nums + "th";
	break;
}

var n = document.getElementById("num");
n.innerHTML = nums;










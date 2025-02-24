function time_to_JD() {
    var timezone = document.getElementById("timezone").value;
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    var second = document.getElementById("second").value;
    var time = new Date(
        Date.UTC(
            year,
            month - 1,
            day,
            Number(hour) - Number(timezone),
            minute,
            second,
            0
        )
    );
    var JD = document.getElementById("JD");
    JD.value = 2440587.5 + time.getTime() / 86400000;
}

function time_now() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = check_time(m);
    s = check_time(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        time_now();
    }, 100);
}
function check_time(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function time_now_to_JD() {
    var time_now = new Date();
    var JD_now = document.getElementById("JD_now");
    JD_now.value = 2440587.5 + time_now.getTime() / 86400000;
}

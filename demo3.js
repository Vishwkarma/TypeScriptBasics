"use strict";
var sun = "SUN";
var mon = "MON";
//emun data type custum value
var dayOfWeek;
(function (dayOfWeek) {
    dayOfWeek[dayOfWeek["SUN"] = 0] = "SUN";
    dayOfWeek[dayOfWeek["MON"] = 1] = "MON";
    dayOfWeek[dayOfWeek["TUE"] = 2] = "TUE";
    dayOfWeek[dayOfWeek["WED"] = 3] = "WED";
    dayOfWeek[dayOfWeek["THRU"] = 4] = "THRU";
    dayOfWeek[dayOfWeek["FRI"] = 5] = "FRI";
    dayOfWeek[dayOfWeek["SAT"] = 6] = "SAT";
})(dayOfWeek || (dayOfWeek = {}));
;
const day = dayOfWeek.MON;
if (day === dayOfWeek.MON) {
    console.log(`Its Monday`);
}
else {
    console.log(`Its not Monday`);
}

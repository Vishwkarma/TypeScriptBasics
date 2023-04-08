var sun ="SUN";
var mon="MON";

//emun data type custum value

enum dayOfWeek{
    SUN,MON,TUE,WED,THRU,FRI,SAT

};

const day:dayOfWeek =dayOfWeek.MON;

if(day === dayOfWeek.MON){
    console.log(`Its Monday`);

}else {
     console.log(`Its not Monday`);
}
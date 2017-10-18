function sleep_in(weekday,vacation) {
    if (weekday && !vacation) {
        return false;
    } else {
        return true;
    }

}

function monkey_trouble(a_smile,b_smile) {
    if (a_smile && b_smile) {
        return true;
    }
    if (!a_smile && !b_smile) {
        return true;
    }
    if (a_smile && !b_smile) {
        return false;
    }
    if (!a_smile &&b_smile) {
        return false;
    }
}

function string_times(string,num){
var answer="";
    for(var i=0;i<num; i++){

        answer+=string;
    }

return answer;

}

function front_times(string,num){
   var answer ="";
   for(var i=0; i< num; i++){
       answer+= string.substring(0,3);
   }
    return answer;
}

function string_bits(string){
    var answer="";
    for(var i=0; i<string.length; i+=2){
        answer+=string[i];
    }
    return answer;
}

function caughtSpeeding(num,birthday){
    if (birthday){
        num-=5;
    }
    if(num<=60 ){
        return 0;
    } else if (num<=80 ){
        return 1;
    } else{
        return 2;
    }
}

function fizz_buzz(string){
    if (string%3==0 && string%5==0){
        return "FizzBuzz";
    } else if (string%3 == 0) {
        return "Fizz";
    } else if (string%5 == 0) {
        return "Buzz";
    } else {
        return string + "!";
    }
}

function teaParty(tea,candy) {
    if (candy<5||tea<5) {
        return 0;
    } else if (tea>=candy*2 || candy>=tea*2) {
        return 2;
    } else {
        return 1;
    }
}



function blackjack (a,b) {
    if (a<=21 && b<a) {
        return a;
    } else if (b<= 21 && a<b){
        return b;
    } else if (a>21 && b<=21){
        return b;
    } else if (b>21 && a<=21){
        return a
    }else{
        return 0;
    }
}

function loneSum(a,b,c){
    if(b==a && c==b){
        return 0;
    }
    if(b==a){
        a=0;
        b=0;
    }
    if(c==b){
        b=0;
        c=0;
    }
    if(c==a) {
        a = 0;
        c = 0;
    }

   return a+b+c;
}




function tester() {

    document.getElementById("output").innerHTML  = sleep_in(false, false);
    document.getElementById("output1").innerHTML = monkey_trouble(a_smile,!b_smile);
    document.getElementById("output2").innerHTML = string_times("lauren", 6);
    document.getElementById("output3").innerHTML = front_times("toss",3);
    document.getElementById("output4").innerHTML = string_bits("Hallo");
    document.getElementById("output5").innerHTML = caughtSpeeding(85,true);
    document.getElementById("output6").innerHTML = fizzString(30);
    document.getElementById("output7").innerHTML = teaParty(5,8);
    document.getElementById("output8").innerHTML = blackjack(7,20);
    document.getElementById("output9").innerHTML = loneSum(4,5,6);
    //test third method, etc
}

var greeting = new Date();
month = greeting.getMonth();
date = greeting.getDate();


// Month of December.




if (month ===3 && date ===4 ||  month ===3  && date === 14 || month ===3 && date === 24){


document.getElementsByClassName('snowman')[0].style.display = "block";

}else if (month ===3){


document.getElementsByClassName('tree')[0].style.display = "block";


}
else if (month ===4 && date === 2 || month ===4 && date === 4 && date <= 6){

document.getElementsByClassName('snowman')[0].style.display = "block";

}
else if (month ===4 && date <= 6){

document.getElementsByClassName('tree')[0].style.display = "block";

}



//Christmas Day.
/*if (month ===11 && date === 25){


document.getElementsByClassName('tree')[0].style.display = "block";


}
*/

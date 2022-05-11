const date = new Date();  
var thisYear = date.getFullYear();
var thisMonth = date.getMonth();
var firstDay = new Date(thisYear, thisMonth, 1).getDay();
var lastDayOfMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

for (let i = firstDay; i < 7; i++){
  document.querySelectorAll("tbody tr.fst th")[i].textContent = 
    i + (1 - firstDay);
}

for (let i = 0; i < 7; i++){
  document.querySelectorAll("tbody tr.snd th")[i].textContent = 
    i + (8 - firstDay);
}

for (let i = 0; i < 7; i++){
  document.querySelectorAll("tbody tr.trd th")[i].textContent = 
    i + (15 - firstDay);
}

for (let i = 0; i < 7; i++){
  document.querySelectorAll("tbody tr.foth th")[i].textContent = 
    i + (22 - firstDay);
}

for (let i = 0; i < 7; i++){
  if (i + 29 - firstDay > lastDayOfMonth){
  break;
  } 
  document.querySelectorAll("tbody tr.fith th")[i].textContent = 
    i + (29 - firstDay);
}

for (let i = 0; i < 7; i++){
  if (i + 36 - firstDay > lastDayOfMonth){
  break;
  } 
  document.querySelectorAll("tbody tr.sith th")[i].textContent = 
    i + (36 - firstDay);
}

var parent = document.querySelector("body")
var table = document.querySelector("table")
var heading = document.createElement("h1")
parent.insertBefore(heading, table);

var realMonth = thisMonth + 1;
heading.textContent = thisYear + "년 " + 
  realMonth + "월";

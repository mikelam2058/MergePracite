$(function(){
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    document.getElementById("myImage").src= "images/"+randomChildNumber +".jpg";
    const d = new Date();
    let month = d.getMonth();
    let date = d.getDate();
    let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = month+1+"/"+date;
let heading_2 = document.createElement('th');
if(randomChildNumber==1){
heading_2.innerHTML = "滷肉飯";
}
if(randomChildNumber==0){
    heading_2.innerHTML = "拉麵";
    }
    if(randomChildNumber==2){
        heading_2.innerHTML = "水餃";
        }
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
    });
    });
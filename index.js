// index.js 

// document.getElementById("count-el").innerText = 5

// add title
document.title = "BTHS Counter App"

var count = 0;

function increment(){
    count++;
    document.getElementById("count-el").innerHTML = count;
    console.log(count);
}

function save(){
    prevEntries = document.getElementById("entries").innerText;
    prevEntries+= " " + count + " - ";
    document.getElementById("entries").innerHTML = prevEntries;
}
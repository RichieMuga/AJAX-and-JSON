var pagecounter=1
var button= document.getElementById("btn")
var emptydiv= document.getElementById("pupuman")
btn.addEventListener("click",function() {
    var mydata= new XMLHttpRequest;
mydata.open('GET','https://learnwebcode.github.io/json-example/animals-'+pagecounter+'.json')
mydata.onload=function(){
    theData= JSON.parse(mydata.responseText);
    renderhtml(theData);
}
mydata.send();
pagecounter++
if (pagecounter>3) {
    btn.classList.add("hide-me")
}
})
function renderhtml(data) {
    var outputting="";
    for(i=0;i<data.length;i++){
        outputting += "<p>"+ data[i].name+ " is a "+ data[i].species+".</p>"
    }
    emptydiv.insertAdjacentHTML('beforeend',outputting)
}

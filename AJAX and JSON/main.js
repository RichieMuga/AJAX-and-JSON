var mydata= new XMLHttpRequest;
mydata.open('GET','https://learnwebcode.github.io/json-example/animals-1.json')
mydata.onload=function(){
    theData= JSON.parse(mydata.responseText);
    console.log(theData[0])
}
mydata.send();
title=document.getElementById("title").textContent;
console.log(title)
var files = JSON.parse(window.PageData);
var tr = document.createElement("tr");
for(var i=0;i<files.length;i++){
    if(files[i].name==title){
        var labels=files[i].label;
        for(var j=0;j<labels.length;j++){
            var td =document.createElement("td");
            td.textContent=labels[j];
            tr.appendChild(td);
        }
        break;
    }
}
console.log(document.getElementsByTagName("tbody"));
document.getElementsByTagName("tbody")[0].appendChild(tr);
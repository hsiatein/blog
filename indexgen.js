var files = JSON.parse(window.PageData);
console.log(files);
var ol = document.createElement("ol");
var labels=[]
files.forEach((file) => {
  var li = document.createElement("li");
  var a = document.createElement("a");
  li.className="index";
  a.textContent = file.name;
  a.href = "javascript:void(0)";
  a.onclick=function() {
    toggleIframe('preview', "pages/"+file.name+".html");
  };
  li.appendChild(a);
  ol.appendChild(li);
  for(var i=0;i<file.label.length;i++){
    if(!labels.includes(file.label[i])){
      labels.push(file.label[i]);
    }
  }
});
document.getElementById("index").appendChild(ol);
console.log(labels);
var N=parseInt((labels.length-1)/9)+1;
console.log(N);
for(var j=0;j<N;j++){
  var tr=document.createElement("tr");
  for(var i=0;i<9;i++){
    if(j*9+i<labels.length){
      var td=document.createElement("td");
      var checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.className="checkbox-input";
      checkbox.id=labels[j*9+i];
      checkbox.value=labels[j*9+i];
      var checkboxlabel=document.createElement("label");
      checkboxlabel.className="checkbox-label";
      checkboxlabel.htmlFor=labels[j*9+i];
      checkboxlabel.textContent=labels[j*9+i];
      td.appendChild(checkbox);
      td.appendChild(checkboxlabel);
      tr.appendChild(td);
    }
    else{
      break;
    }
  }
  document.getElementById("labeltable").appendChild(tr);
}

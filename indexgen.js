// const files = [
//   "实现简单的网络爬虫",
//   "估计1形状类似Watson引理的积分估计",
//   "估计2涉及泊松核的积分估计",
//   "估计3有关黎曼勒贝格引理的积分估计",
//   "估计4使用围道和极点进行积分估计",
//   "个人所写的对数积分题集",
//   "估计5一类涉及zeta函数的积分估计表",
//   "讨论一下积分变换"
// ];
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
var N=parseInt((labels.length-1)/10)+1;
console.log(N);
for(var j=0;j<N;j++){
  var tr=document.createElement("tr");
  for(var i=0;i<10;i++){
    if(j*10+i<labels.length){
      var td=document.createElement("td");
      var checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.className="checkbox-input";
      checkbox.id=labels[j*10+i];
      checkbox.value=labels[j*10+i];
      var checkboxlabel=document.createElement("label");
      checkboxlabel.className="checkbox-label";
      checkboxlabel.htmlFor=labels[j*10+i];
      checkboxlabel.textContent=labels[j*10+i];
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

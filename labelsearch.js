var Pages = JSON.parse(window.PageData);
console.log(Pages);
console.log(Pages[1].name)
// 获取所有的复选框元素
var checkboxes = document.querySelectorAll(".checkbox-input");
// 定义一个函数，用来获取并输出被选中的复选框的值
function showCheckedValues() {
  // 创建一个空数组，用来存放被选中的复选框的值
  var checkedValues = [];
  // 遍历所有的复选框元素
  for (var i = 0; i < checkboxes.length; i++) {
    // 判断每个复选框元素是否被选中
    if (checkboxes[i].checked) {
      // 如果被选中，就把它的值添加到数组中
      checkedValues.push(checkboxes[i].value);
    }
  }
  // 输出数组到控制台
  console.log(checkedValues);
  var selectedpage=[];
  for(var i=0;i<Pages.length;i++){
    var B=true;
    for(var j=0;j<checkedValues.length;j++){
      if(!Pages[i].label.includes(checkedValues[j])){
        B=false;
      }
    }
    if(B){
      selectedpage.push(Pages[i].name);
    }
  }
  console.log(selectedpage);
  document.querySelector("ol").remove();
  var ol = document.createElement("ol");
  selectedpage.forEach((file) => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    li.className="index";
    a.textContent = file;
    a.href = "javascript:void(0)";
    a.onclick=function() {
      toggleIframe('preview', "pages/"+file+".html");
    };
    li.appendChild(a);
    ol.appendChild(li);
  });
  document.getElementById("index").appendChild(ol);
}

// 遍历所有的复选框元素
for (var j = 0; j < checkboxes.length; j++) {
  // 给每个复选框元素添加一个onchange事件处理函数
  checkboxes[j].onchange = showCheckedValues;
}